import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";
import Img04 from "./Img-04.jpg";
import Img05 from "./Img-05.jpg";
import Img06 from "./Img-06.jpg";
import Img07 from "./Img-07.jpg";
import Img08 from "./Img-08.jpg";
import Img09 from "./Img-09.jpg";
import Img10 from "./Img-10.jpg";
import Img11 from "./Img-11.jpg";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>H800 Aircraft Flight Simulator</h1>
        This is a project I worked on from the start. This was a full motion
        simulator for a Hawker 800XP.
        <br />
        I designed all the PCBs for all the instruments managed all the wiring
        to connect everything together.
        <br />
        I created the system around a CAN bus network, this was a large
        undertaking but this significantly reduced the wiring required compared
        to r earlier sims.
        <br />
        THe pictures below shows how the cockpit is assembled.
        <figure>
          <img src={Img10} height={400} />
          <img src={Img11} height={400} />
          <figcaption>Cockpit</figcaption>
        </figure>
        We custom designed all the instruments in the aircraft, form left to
        right; <br />
        The hydraulic pressure gauge, The Control Display Unit and the Flight
        Management System. <br />I designed all the PCBs seen here and programed
        the STM32 microcontrollers.
        <figure>
          <img src={Img01} height={400} />
          <img src={Img02} height={400} />
          <img src={Img03} height={400} />

          <figcaption>Aircraft Instruments</figcaption>
        </figure>
        I aided with the mechanical design and assembly, including setting up
        the 6 DOF motion platform.
        <figure>
          <img src={Img04} height={400} />
          <img src={Img05} height={400} />
          <img src={Img06} height={400} />
          <figcaption>Aircraft Frame Assembly</figcaption>
        </figure>
        Here is simulator installed in Thailand. 
        <figure>
          <img src={Img07} height={500} />
          <img src={Img08} height={500} />
          <img src={Img09} height={500} />

          <figcaption>Final Assembly</figcaption>
        </figure>
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Hawker 800XP";
