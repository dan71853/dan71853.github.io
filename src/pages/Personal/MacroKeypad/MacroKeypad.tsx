import img from "./thumbnail.jpg";

// import Img01 from "./Img-01.jpg";
// import Img02 from "./Img-02.jpg";
// import Img03 from "./Img-03.jpg";
// import Img04 from "./Img-04.jpg";
// import Img05 from "./Img-05.jpg";
// import Img06 from "./Img-06.jpg";
// import Img07 from "./Img-07.jpg";
// import Img08 from "./Img-08.jpg";
// import Img09 from "./Img-09.jpg";
// import Img10 from "./Img-10.jpg";

import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Macro Keypad
          <GitHubLink link="https://github.com/dan71853/can-perf" />
        </h1>
        
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Macro Keypad";

export const priority = 1;
