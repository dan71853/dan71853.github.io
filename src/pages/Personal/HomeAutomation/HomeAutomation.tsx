import img from "./thumbnail.jpg";


import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Home Automation
          <GitHubLink link="https://github.com/dan71853/home-automation" />
        </h1>
      </div>
    </>
  );
};

export const title = "Home Automation";
export const thumb = img;

export const priority = 3;
