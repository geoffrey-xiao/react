import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((store) => store.user.username);
  return <div className="hidden uppercase md:block">{username}</div>;
};

export default Username;
