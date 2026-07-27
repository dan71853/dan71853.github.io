import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";
import Img04 from "./Img-04.jpg";
import Img05 from "./Img-05.jpg";
import Img06 from "./Img-06.jpg";
import Img07 from "./Img-07.jpg";
import Img08 from "./Img-08.jpg";

import Vid01 from "./Vid-01.mp4";
import Vid02 from "./Vid-02.mp4";
import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Voices of the Void Drive
          <GitHubLink link="https://github.com/dan71853/EmbeddedExperiments/tree/main/Projects/VOTV%20Drive" />
        </h1>
        <figure>
          <img src={Img01} height={300} />
          <figcaption>Reference Image</figcaption>
        </figure>

        <figure>
          <img src={Img02} height={400} />
          <img src={Img03} height={400} />
          <img src={Img04} height={400} />
          <figcaption>Prototyping TTL Stepper Driver</figcaption>
        </figure>

        <figure>
          <video height={400} controls muted>
            <source src={Vid01} type="video/mp4" />
          </video>
          <figcaption>Spinning Motors</figcaption>
        </figure>

        <figure>
          <img src={Img05} height={400} />
          <img src={Img06} height={400} />
          <figcaption>3D Printed Shell</figcaption>
        </figure>

        <figure>
          <img src={Img07} height={400} />
          <img src={Img08} height={400} />
          <figcaption>Final Assembly</figcaption>
        </figure>

        <figure>
          <video height={400} controls muted>
            <source src={Vid02} type="video/mp4" />
          </video>
          <figcaption>Final Testing</figcaption>
        </figure>
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Voices of the Void Drive";

export const priority = 3;
