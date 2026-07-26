import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";
import Img04 from "./Img-04.jpg";
import Img05 from "./Img-05.jpg";
import Img06 from "./Img-06.jpg";

import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Macro Keypad
          <GitHubLink link="https://github.com/dan71853/can-perf" />
        </h1>
        This is the start of a much larger project where I want to make a
        network of Computer Peripherals. Thinks like Macro Keypads, Joysticks
        and Space Mice. I don't like the idea of having multiple USB cables for
        each, instead I want to create a modular system where the devices
        connect to a central hub via CAN bus. This hub then connects to the PC
        which will allow any combination of peripherals to be connected.
        <br />I started with a Macro Keypad as this would be very useful to bind
        to shortcuts for CAD and EDA.
        <figure>
          <img src={Img02} height={500} />
          <img src={Img01} height={500} />
          <figcaption>PCB Assembly</figcaption>
        </figure>
        I decided to make this module out of 3 different PCBs, the white PCB
        handles the power supply and CAN transceiver as well as the CAN
        connectors. I went with RJ12 connectors as these are easy to crimp and
        allow for power/CAN data and debug. This white PCB can be reused in
        other projects, it can be directly soldered to another PCB using
        castellated holes.
        <figure>
          <img src={Img03} height={500} />
          <img src={Img04} height={500} />
          <figcaption>Backlights</figcaption>
        </figure>
        I had to go with RGB backlights and I also added a small OLED screen.
        The knobs on the top are both encoders, and the left one can be either
        an encoder or a potentiometer.
        <figure>
          <img src={Img05} height={500} />
          <figcaption>Close up of Shark1</figcaption>
        </figure>
        Here is a closeup of the OLED screen, its 128x32 which is enough for
        small icons and a bit of text. I plan to uses this do show what macro
        preset is selected.
        <figure>
          <img src={Img06} height={500} />
          <figcaption>Final Design</figcaption>
        </figure>
        Here is the Final design, All the hardware is working great. I am now
        working on the software. I used this project to learn more about RTOS
        systems. This is almost done, the next stage is to finish the master nod
        that connects to the PC.
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Macro Keypad";

export const priority = 1;
