import img from "./thumbnail.jpg";

import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Raspberry Pi Power Supply
          <GitHubLink link="https://github.com/dan71853/ServoSkull" />
        </h1>
       
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Raspberry Pi Power Supply";

export const priority = 3;