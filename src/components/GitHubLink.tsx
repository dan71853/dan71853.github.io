import { Link } from "react-router-dom";

import gitHubIconDark from "../assets/GithubIcon-Dark.svg";
import gitHubIconLight from "../assets/GithubIcon-Light.svg";
import type { gitHubIconProps } from "../types/types";

export const GitHubLink = (props : gitHubIconProps) => {
  return (
    <Link to= {props.link} style={{ marginLeft: "auto" }}>
      <img
        src={
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? gitHubIconDark
            : gitHubIconLight
        }
        style={{ height: props.size??"80px" }}
      />
    </Link>
  );
};
