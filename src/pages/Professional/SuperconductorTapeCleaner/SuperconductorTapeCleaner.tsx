import img from "./thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Vid01 from "./Vid-01.mp4";
import Vid02 from "./Vid-02.mp4";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>Superconductor Tape Cleaner</h1>
        This was my first job where worked at the Robinson Research Institute as
        a summer student. <br />
        I was tasked with creating a device to clean superconducting tape.
        <br />
        This was a challenge as the superconducting tape is a ceramic and is
        quite fragile, <br />
        but there was 10s of kilometers that needed to be cleaned so this had to
        be quite efficient.
        <br />
        The tape also had to be tensioned when wound onto a spool, <br />
        So I designed this pulley system that used some weights and an PID
        control system to provide constant tension.
        <figure>
          <video width="800" controls muted>
            <source src={Vid01} type="video/mp4" />
          </video>
          <figcaption>Initial Testing</figcaption>
        </figure>
        I created a simple control box to control the whole system. This also
        had a small display to print the number of meters cleaned for each
        spool.
        <figure>
          <img src={Img01} width={800} />
          <figcaption>Control Panel</figcaption>
        </figure>
        Here is a video of the final system with all the safety glass in place.
        <br />
        The tape is fed through 3 different containers which hold cleaning
        alcohol and scrubbers.
        <figure>
          <video width="800" controls muted>
            <source src={Vid02} type="video/mp4" />
          </video>
          <figcaption>Final Setup</figcaption>
        </figure>
        This project was a great success and got me started on my electronics
        career.
      </div>
    </>
  );
};

export const thumb = img;

export const title = "Superconductor Tape Cleaner";
