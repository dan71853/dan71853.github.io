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

import { GitHubLink } from "../../../components/GitHubLink";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>
          Home Automation
          <GitHubLink link="https://github.com/dan71853/home-automation" />
        </h1>
        I was wanting to automate a few tasks around the house, I had heard
        about Home Assistant and wanted to learn more about it. I have setup
        Home Assistant to run on a docker container which I am hosting on a
        RPi5.
        <br />I started with a basic temperature/humidity/pressure monitor.
        <h2>
          Environment Sensor
          <GitHubLink link="https://github.com/dan71853/home-automation/blob/main/devices/env-node" />
        </h2>
        For this device I used an ESP32-C3 as the MCU as these are quite cheap
        and have wifi.
        <br />
        There is also ESPHome which is designed to work with Home Assistant.
        This is all configured though YAML. While this did make it quickly to
        get the sensor board running, I found it a bit limiting when I wanted to
        do things a bit differently to the preconfigured way.
        <figure>
          <img src={Img03} height={500} />
          <figcaption>Env Node Final design</figcaption>
        </figure>
        The device uses a DHT11 and a BMP250 sensor to get temperature, humidity
        and pressure. I cut up a prototype board and soldered everything
        together. I 3D printed the enclosure and used heat inserts for the
        screws.
        <figure>
          <img src={Img01} height={400} />
          <img src={Img02} height={400} />
          <figcaption>Final design</figcaption>
        </figure>
        <h2>
          Oven Sensor
          <GitHubLink link="https://github.com/dan71853/home-automation/blob/main/devices/oven_node" />
        </h2>
        This node is used to detect if the stove or oven has been left on. This
        node has two LDR light sensors and a passive infrared sensor (PIR). The
        LDR sensors look at the status lights on the oven. There is also a small
        buzzer that can be enabled.
        <br />
        If no motion has been detected in the kitchen for 15 min and either of
        the status lights are on, then an alarm is triggered.
        <figure>
          <img src={Img04} height={500} />
          <figcaption>Oven Node Final design</figcaption>
        </figure>
        I had to add an antenna as there was a hot water cylinder between the
        oven and the router. I tried a DIY antenna with a bit of wire but this
        had no effect. The on chip antenna seems to only be capable of going
        through 1 wall.
        <figure>
          <img src={Img06} height={500} />
          <figcaption>Oven Node Circuit Board</figcaption>
        </figure>
        I also added a buzzer and some pots to adjust the sensitivity of the LDR
        sensors.
        <figure>
          <img src={Img05} height={500} />
          <figcaption>LDR Sensors</figcaption>
        </figure>
        I used 2 LDR sensors on the red status lights on the oven, I wanted a
        easily removable way to attached the sensors so I went with magnets. I
        designed these mounts the clamp the wires down and hold onto the magnet
        via friction fit.
        <figure>
          <img src={Img07} height={500} />
          <figcaption>Final Install</figcaption>
        </figure>
        Here is the node installed on my oven, It is powered from a socket on
        the side of the oven. Most of the logic is handled by HomeAssistant
        because I used ESPHome to program the microcontroller.In the future I
        may ditch ESPHome and move all the logic to the ESP32 to make it a bit
        more reliable and efficient. This has already caught me leaving the
        stove on a couple of times so its working as intended.
        <h2>
          Status Panel
          <GitHubLink link="https://github.com/dan71853/home-automation/blob/main/devices/status_panel" />
        </h2>
        I wanted to make an Epaper based status panel that can display
        information from Home Assistant. For example the temperature, humidity
        and any sort of notification. I have a 7 colour Epaper from a previous
        project, This was a live wallpaper and I wanted to upgrade this to show
        a text box on top of the current image. However the difficulty for
        hosting the images from Home Assistant and the lack of dynamic image
        support from ESPHome made this a very difficult task.
        <br /> I decided to instead get a new and smaller epaper that was just
        for this status panel. I went with the WeAct 3.7" Epaper Display as ths
        was a nice size. Here is some testing I was doing using the Adafruit
        fonts.
        <figure>
          <img src={Img10} height={500} />
          <figcaption>Font Testing</figcaption>
        </figure>
        This screen worked well, however I again ran into ESPHome issues. The
        driver for this particular screen was not yet supported by ESPHome. I
        debated making my own ESPHome component but I decided to remove ESPHome
        and program the ESP directly to give me more control. I could then
        connect to Home Assistant using MQTT.
        <br />
        Once I tested all components worked as I expected, I designed a PCB and
        enclosure.
        <figure>
          <img src={Img11} height={500} />
          <figcaption>Disassembled Status Panel</figcaption>
        </figure>
        Here all the components disassembled, This all slots together and is
        fastened with 4 M3 screws. I really like how easy this is to assemble,
        the way the case splits apart makes it easy to open.
        <br />I went with a 1000mAH battery, by going into deep sleep and only
        waking every 15min I was able to get around 5 weeks of battery life.
        This is plenty and I can charge with the USB C port on the side.
        <figure>
          <img src={Img08} height={500} />
          <img src={Img09} height={500} />
          <figcaption>Final Status Panel Design</figcaption>
        </figure>
        Here is the assembled status panel, I really liked the design. All the
        hardware is done, all that is left is to figure out what I want
        displayed and finish the UI.
      </div>
    </>
  );
};

export const title = "Home Automation";
export const thumb = img;

export const priority = 3;
