import img from "./Thumbnail.jpg";

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
import Img12 from "./Img-12.jpg";
import Img13 from "./Img-13.jpg";
import Img14 from "./Img-14.jpg";
import Img15 from "./Img-15.jpg";
import Img16 from "./Img-16.jpg";
import Img17 from "./Img-17.jpg";
import Img18 from "./Img-18.jpg";
import Img19 from "./Img-19.jpg";
import Img20 from "./Img-20.jpg";
import Img21 from "./Img-21.jpg";
import Img22 from "./Img-22.jpg";
import Img23 from "./Img-23.jpg";
import Img24 from "./Img-24.jpg";
import Img25 from "./Img-25.jpg";
import Img26 from "./Img-26.jpg";
import Img27 from "./Img-27.jpg";
import Img28 from "./Img-28.jpg";
import Img29 from "./Img-29.jpg";
import Img30 from "./Img-30.jpg";
import Img31 from "./Img-31.jpg";
import Img32 from "./Img-32.jpg";
import Img33 from "./Img-33.jpg";

import Vid01 from "./Vid-01.mp4";
import Vid02 from "./Vid-02.mp4";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>Joystick</h1>
        This is one of my larger projects, I wanted to design a joystick for a
        space flight simulator game.
        <br />
        The main idea is to create a HOSAS (dual joysticks) system with
        additional button boxes and have them mounted to my chair.
        <br />
        <br />
        <h2>Initial Gimbal</h2>
        <figure>
          <img src={Img01} height={500} />
          <img src={Img02} height={500} />
          <figcaption>Initial Gimbal</figcaption>
        </figure>
        Initial gimbal prototype, using rubber bands for the initial tests but
        this gets upgraded to springs later on.
        <figure>
          <img src={Img03} height={500} />
          <img src={Img04} height={500} />
          <figcaption>Initial Gimbal</figcaption>
        </figure>
        Added the sensors for the 3 axis. X and Y use hall effect sensors, there
        are magnets connected to the center cross piece. The Z axis is just a
        potentiometer (pot). <br />
        I then started designing the main body for the joystick. Using some
        designs I found online as a reference I designed the first version. I
        used Slicer for Fusion 360 to cut the model up into segments that could
        be cut out of cardboard. This was a fast and cheap way to see how the
        joystick would feel.
        <br />
        <br />
        <h2>Test prints</h2>I started making some test prints for the different
        components, I wanted the joystick to have a trigger, 3 buttons and a
        mini joystick on the top. I wanted to make sure I got the individual
        components working before I 3D printed the whole handel.
        <figure>
          <img src={Img05} height={500} />
          <video height={500} controls muted>
            <source src={Vid01} type="video/mp4" />
          </video>
          <figcaption>Trigger Testing</figcaption>
        </figure>
        I pulled apart an old xbox controller and removed the trigger. I had to
        design the casing to hold the trigger and redesign the arm connecting
        the trigger to the pot. The video shows the output of the pot using an
        Arduino. <br />I was very happy with this, the spring created nice
        feedback and the pot had a large range.
        <figure>
          <img src={Img06} height={500} />
          <img src={Img07} height={500} />
          <figcaption>Buttons and centering mechanism</figcaption>
        </figure>
        Next was testing the design and fit for the buttons and the centering
        mechanism.
        <figure>
          <img src={Img08} height={500} />
          <img src={Img09} height={500} />
          <figcaption>Mini joystick</figcaption>
        </figure>
        The mini joystick which i removed from the xbox controller, I cut the
        PCB out form the xbox controller, this gave me a nice square base that I
        could clamp the 3D printed joystick grip to. <br />
        The traces on the PCB allowed me to easily connect wires.
        <br />
        <br />
        <h2>Printing Joystick</h2>I 3D printed one of the Joysticks, this took a
        couple of iterations but I eventually found a design that worked.
        <figure>
          <img src={Img10} height={500} />
          <img src={Img11} height={500} />
        </figure>
        <figure>
          <img src={Img12} height={500} />
          <img src={Img13} height={500} />
          <figcaption>First joystick print</figcaption>
        </figure>
        <br />
        <br />
        <h2>Chair Mount</h2>
        Over the summer break my dad helped me make a mount so the joysticks
        could be attached directly to my chair.
        <br />
        These are easily adjustable and can be removed quickly.
        <figure>
          <img src={Img14} height={500} />
          <img src={Img15} height={500} />
        </figure>
        <figure>
          <img src={Img16} height={500} />
          <img src={Img17} height={500} />
        </figure>
        <figure>
          <img src={Img18} height={500} />
          <img src={Img19} height={500} />
          <figcaption>Chair mount</figcaption>
        </figure>
        <br />
        <br />
        <h2>New Gimbal</h2>I wanted to redesign the gimbal system, I found an
        existing design <a href="https://www.realrobots.net/hotas">here</a>. I
        modified the design a bit to work for my setup.
        <figure>
          <img src={Img20} height={500} />
          <img src={Img21} height={500} />
        </figure>
        <figure>
          <img src={Img22} height={500} />
          <img src={Img23} height={500} />
        </figure>
        <figure>
          <img src={Img24} height={500} />
          <figcaption>New gimbal</figcaption>
        </figure>
        I also tried using magnets to center the Z axis, how ever this was not
        very successful.
        <br />
        <br />
        <h2>Button Box</h2>I printed the enclosure for the button box, this also
        houses the ESP32 which is the brains for the right stick.
        <figure>
          <img src={Img25} height={500} />
          <img src={Img26} height={500} />
        </figure>
        <figure>
          <img src={Img27} height={500} />
          <figcaption>Button Box</figcaption>
        </figure>
        <br />
        <br />
        <h2>More Testing</h2>I started doing some testing on imbedding a nut into
        a 3D print and testing an LCD screen and LED light strip on a bread
        board.
       <figure>
          <img src={Img28} height={500} />
          <img src={Img29} height={500} />
          <figcaption>Chair mount</figcaption>
        </figure>
        Here I paused the print at a specific height, placed the nut in and
        resumed the print. It took a bit of tuning but I managed to seamlessly
        embed a nut. <br />
        <br />

              <figure>
          <img src={Img30} height={500} />
          <img src={Img31} height={500} />
        </figure>
        <figure>
                 <video height={500} controls muted>
            <source src={Vid02} type="video/mp4" />
          </video>
          <figcaption>LED and LCD testing</figcaption>
        </figure>
    
        The next test was getting the LCD and LED strip working. I salvaged the
        LCD of an old radio, it required a bit of reverse engineering to map the
        inputs to the seven segment display outputs. I am controlling the LED
        strip (and other LEDs in the future) with an LED driver chip (MAX7219).
        It is normally used for 7 segment displays but can be programed to word
        for any number of LEDs up to a max of 64. <br />
        The LCD display needs 9 GPIO pins and the LED driver needs another 3 so
        I decided to use an arduino Micro to control everything. <br />
        The arduino is then controlled by an ESP32 which is connected to the PC
        and also reads the axis and button inputs. <br />
        The video shows the LED strip counting up in binary and the LCD display
        is displaying a random number. This is all controlled by the ESP32 via
        the arduino.
        <br />
        <br />
        <h2>Z Axis Clamp</h2>I redesigned the Z axis centering mechanism,
        Springs and magnets did an ok job of pulling the stick to roughly zero
        but it was never perfect. Increasing the dead-zone helped a bit but
        there was always some drift. <br />I decided to use a clamp design that
        I could manipulate with my pinky, this would allow free movement but
        would also lock the axis when I needed.
        <figure>
          <img src={Img32} height={500} />
          <img src={Img33} height={500} />
          <figcaption>Z Axis Clamp</figcaption>
        </figure>
      
      
        {/* The files can be found <a href = "https://github.com/dan71853/MyProjects/tree/main/SmallProjects/PhoneChargerHolder">here</a>. */}
      </div>
    </>
  );
};

export const title = "Joystick";
export const thumb = img;

export const priority = 1;
