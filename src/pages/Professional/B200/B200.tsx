import img from "./thumbnail.jpg";
import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";

import Vid01 from "./Vid-01.mp4";
import Vid02 from "./Vid-02.mp4";
import Vid03 from "./Vid-03.mp4";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1> B200 Aircraft Flight Simulator </h1>
        I worked on this Beechcraft Super King Air Aircraft flight simulator
        when I worked with iSim. <br />
        This is a project I joined half way through its design phase. <br/>
        My main focus was the design and assembly of all the PCBs that drive the
        simulator. <br />
        The cockpit is a 1:1 replica of the B200 aircraft, all the switches,
        buttons and lights are connected to the PC flight simulator software.
        <figure>
          <img src={Img01} width={800} />
          <figcaption>Cockpit</figcaption>
        </figure>
        Every panel was backlit and dimmable like in the real aircraft.
        <br /> We used stepper motors to add force feedback on the controls to
        simulate trimming and allow autopilot control.
        <figure>
          <video height={500} controls muted>
            <source src={Vid01} type="video/mp4" />
          </video>
          <figcaption>Work in progress Cockpit</figcaption>
        </figure>
        Both the compass and the elevator trim were software controlled using stepper motors.
        <figure>
          <video height={500} controls muted>
            <source src={Vid02} type="video/mp4" />
          </video>{" "}
          <video height={500} controls muted>
            <source src={Vid03} type="video/mp4" />
          </video>
          <figcaption>Compass and Elevator Trim</figcaption>
        </figure>
        We used 3 projectors to create a wide viewing angle, this allows the pilots to look over at the wings and engines.
        <figure>
          <img src={Img02} width={800} />
          <figcaption>Front With Screen</figcaption>
        </figure>
        Everything is controlled by the instructor station at the back. Our custom aircraft software allows full control over the aircraft <br/>
        We can run custom training scenarios, plot courses and trigger aircraft failures.
        <figure>
          <img src={Img03} width={800} />
          <figcaption>Instructor Station</figcaption>
        </figure>
      </div>
    </>
  );
};

export const title = "B200 King Air";
export const thumb = img;

export const priority = 1;
