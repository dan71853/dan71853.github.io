import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";

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
          Home Automation
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
          <figcaption>Final design</figcaption>
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
      </div>
    </>
  );
};

export const title = "Home Automation";
export const thumb = img;

export const priority = 3;
