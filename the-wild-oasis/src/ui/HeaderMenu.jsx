import React from "react";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <UserAvatar />
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
