import { Link } from "react-router-dom";
import * as pages from "../pages/index";
import sharkOne from "../assets/SharkOne.png";
import gitHubIconDark from "../assets/GithubIcon-Dark.svg";
import gitHubIconLight from "../assets/GithubIcon-Light.svg";
import { useMemo } from "react";
import type { pageGroups } from "../types/types";

export const NavBar = () => {
  const sortedPages = useMemo(() => {
    return Object.entries(pages as pageGroups).sort(
      (a, b) => (a[1].priority ?? 0) - (b[1].priority ?? 0),
    );
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      <Link to="/">
        <img src={sharkOne} />
      </Link>
      {sortedPages.map(([groupName, group], i) => {
        return (
          <Link
            to={`/${groupName}`}
            key={`navLink${i}`}
            style={{ alignContent: "center" }}
            className="nav-bar-link"
          >
            <h2
              className="nav-bar-text"
              style={{
                margin: "1rem",
                // color: "var(--text-h)",
                // fontSize: "26px",
              }}
            >
              {group.title ?? groupName}
            </h2>
          </Link>
        );
      })}
      <Link to="https://github.com/dan71853/" style={{ marginLeft: "auto" }} >
        <img src={window.matchMedia("(prefers-color-scheme: dark)").matches ? gitHubIconDark : gitHubIconLight} style={{ height:"80px"}} />
      </Link>
    </div>
  );
};
