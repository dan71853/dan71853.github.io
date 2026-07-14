import img from "./thumbnail.jpg";

import ImgA from "./Img-A.jpg";
import VidA from "./Vid-A.mp4";
import VidB from "./Vid-B.mp4";
 
export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left"}}>
      <h1>Superconductor Tape Cleaner</h1>

      <figure >
        <video width="800" controls muted>
          <source src={VidA} type="video/mp4"/>
        </video>
        <figcaption >Initial Testing</figcaption>
      </figure>

        <figure >
          <img src={ImgA} width={800}/> 
          <figcaption>Control Panel</figcaption>
        </figure>
    
       <figure >
        <video width="800" controls muted>
          <source src={VidB} type="video/mp4"/>
        </video>
        <figcaption >Final Setup</figcaption>
      </figure>
      

      </div>
    </>);
};

export const thumb = img;

export const title = "Superconductor Tape Cleaner";
