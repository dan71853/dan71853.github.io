import { Link } from "react-router-dom";
import * as pages from "../pages/index";
import sharkOne from "../assets/SharkOne.png";

export const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      <Link to="/">
        <img src={sharkOne} />
      </Link>
      {Object.entries(pages).map(([groupName]) => {
        return (
          <Link to={`/${groupName}`}>
            <h2 style={{ margin: "1rem" }}>{groupName}</h2>
          </Link>
        );
      })}
    </div>
  );
};
