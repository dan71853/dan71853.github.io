import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";
// import Img04 from "./Img-04.jpg";
// import Img05 from "./Img-05.jpg";
// import Img06 from "./Img-06.jpg";

import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Raspberry Pi Power Supply
          <GitHubLink link="https://github.com/dan71853/ServoSkull" />
        </h1>
        I have a Raspberry Pi running{" "}
        <a href="https://octoprint.org/">Octoprint</a> to control my Creality
        Ender 3 3D printer.
        <br />
        This has been a great setup but there were a few things that cold be
        improved.
        <ul>
          <li>No camera</li>
          <li>Poor lighting </li>
          <li>RPi requiring a different power supply</li>
        </ul>
        <br />
        So I designed a PCB to step down the 24V from the printer power supply
        to 5V that the RPi could uses. I also broke out a few GPIO and drove a
        24V LED with a MOSFET.
        <figure>
          <img src={Img01} height={500} />
          <figcaption>Final design</figcaption>
        </figure>
        Here is the final design, this was a large project that is functional
        finished but I would like to improve the appearance.
        <br /> The original design was inspired by a Warhammer 40K Servo Skull,
        The idea was to have this servo controller and observing my 3D printer.
        But due to time limitations I never finished designing the 3D skull.
        <h2>Camera</h2>
        I had been using a USB webcam but this was very bulky and difficult to mount.
        So I acquired a RPi camera module that uses an FFC to connect directly to the RPi.
        <br/>
        I got a camera with a 130° fisheye lense, this would allow me to move the camera closer to the printer while still getting a good view.
        <br/>
Here is the camera and I am testing it by looking through it with Octoprint.
         <figure>
          <img src={Img02} height={500} />
          <img src={Img03} height={500} />
          <figcaption>Camera</figcaption>
        </figure>
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Raspberry Pi Power Supply";

export const priority = 3;
