import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({});
  const navigate = useNavigate();
  const open = (id) => setOpenId(id);
  const close = () => setOpenId("");
  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition, navigate }}
    >
      <StyledMenu>{children}</StyledMenu>
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, position, setPosition } =
    useContext(MenusContext);
  const handleClick = (e) => {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    if (!openId || openId !== id) {
      open(id);
    } else {
      close();
    }
  };
  return (
    <StyledToggle>
      <HiEllipsisVertical onClick={handleClick} />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);
  if (openId !== id) return null;
  return (
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>
  );
}

function Menu({ children, icon, onClick }) {
  const { openId, close, navigate } = useContext(MenusContext);

  function handleClick() {
    if (onClick && typeof onClick === "string") {
      navigate(onClick);
    } else {
      onClick?.();
    }
    close();
  }
  return (
    <li onClick={handleClick}>
      <StyledButton>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Menu = Menu;

export default Menus;
