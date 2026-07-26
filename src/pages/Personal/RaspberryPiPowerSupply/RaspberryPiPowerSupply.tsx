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
          <img src={Img07} height={500} />
          <img src={Img01} height={500} />
          <figcaption>Final design</figcaption>
        </figure>
        Here is the final design, this was a large project that is functional
        finished but I would like to improve the appearance.
        <br /> The original design was inspired by a Warhammer 40K Servo Skull,
        The idea was to have this servo controller and observing my 3D printer.
        But due to time limitations I never finished designing the 3D skull.
        <h2>Camera</h2>
        I had been using a USB webcam but this was very bulky and difficult to
        mount. So I acquired a RPi camera module that uses an FFC to connect
        directly to the RPi.
        <br />
        I got a camera with a 130° fisheye lense, this would allow me to move
        the camera closer to the printer while still getting a good view.
        <br />
        Here is the camera and I am testing it by looking through it with
        Octoprint.
        <figure>
          <img src={Img02} height={500} />
          <img src={Img03} height={500} />
          <figcaption>Camera</figcaption>
        </figure>
        <h2>Spotlight</h2>A 24V LED was used to illuminate the printer. I found
        that the LENs on the LED was enough to illuminate the print bed.
        <figure>
          <img src={Img04} height={300} />
          <figcaption>Led</figcaption>
        </figure>
        <h2>Power Supply</h2>
        The Ender 3 uses a 24V power supply, there were spare screw terminals so
        I soldered up an XT60 connector.
        <br />I decided to go with a LM2596S as it could supply the 3A required,
        in hindsight I should have gone with something a bit more modern but
        this has worked well. This steps the voltage down from 24V to 5V@3A.
        This is more than enough to supply the RPi and the LED. Here is the
        final design after soldering, I used solder paste and a hot plate and
        noticed some shiny balls left over between the pins. I was not able to
        remove thee but they have not caused any problems.
        <figure>
          <img src={Img08} height={500} />
          <img src={Img09} height={500} />
          <figcaption>Buck Converter</figcaption>
        </figure>
        I was not too happy with the noise on the 5V rail, I was measuring
        around 200mA of ripple. I attempted to filter it a bit more but did not
        make any major improvements.
        <br />I believe this was a limitation of the LM2596S, however the RPi
        has additional regulation so this was not an issue.
        <h2>PCB</h2>
        The PCB was made using EasyEDA, There was only a minor typo and a
        missing connection for a test pad. I soldered it myself with a hotplate
        and it all went together perfectly.
        <figure>
          <img src={Img10} height={500} />
          <img src={Img06} height={500} />
          <figcaption>PCB</figcaption>
        </figure>
        I broke out a few extra GPIOs and added connectors for driving RGB LEDs
        and some touch sensors. These sensors were to be used for decorating the
        servo skull. I also added a Qwiic I2C connector as this is used by a lot
        of Adafruit's modules. This was in case I need to add any extra I2C
        devices later.
        <h2>Final Assembly</h2>
        I hand soldered the remaining through hole components and wired up the
        rest of the connectors. I tried to use connectors where I could to make
        it easier to maintain.
        <br />
        This was a good idea as I later found a problem with he switch wiring.
        The power switch was disconnecting the ground wire, this worked great in
        isolation However when the RPi was connected to the printer using the
        USB, the current could flow through the ground of the cable and the RPi
        wouldn't turn off. This was rewired so the switch interrupts the 24V and
        the connectors design made this a lot easier to fix.
        <figure>
          <img src={Img01} height={500} />
          <img src={Img05} height={500} />
          <figcaption>Final Design</figcaption>
        </figure>
        Overall this project was a great success and I still use it with my
        printer to this day. I plan to revisit this at some point to design the
        servo skull decoration part.
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Raspberry Pi Power Supply";

export const priority = 3;
