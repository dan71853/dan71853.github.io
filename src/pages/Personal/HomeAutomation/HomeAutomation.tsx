import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";
import Img04 from "./Img-04.jpg";
import Img05 from "./Img-05.jpg";
import Img06 from "./Img-06.jpg";
import Img07 from "./Img-07.jpg";

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
          <GitHubLink link="https://github.com/dan71853/home-automation/blob/main/devices/env-node/README.md" />
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
          <GitHubLink link="https://github.com/dan71853/home-automation/blob/main/devices/oven_node/README.md" />
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
      </div>
    </>
  );
};

export const title = "Home Automation";
export const thumb = img;

export const priority = 3;
