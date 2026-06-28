import { Link } from "react-router-dom";
import * as pages from "../pages/index";
import sharkOne from "../assets/SharkOne.png";

export const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/">
        <img src={sharkOne} />
      </Link>
      {Object.entries(pages).map(([groupName]) => {
        return <Link to={`/${groupName}`}>{groupName}</Link>;
      })}
    </div>
  );
};
