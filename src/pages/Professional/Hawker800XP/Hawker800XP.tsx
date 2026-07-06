import img from "./thumbnail.jpg";

import H800A from "./H800-A.jpg";
import H800B from "./H800-B.jpg";
import H800C from "./H800-C.jpg";
import H800D from "./H800-D.jpg";
import H800E from "./H800-E.jpg";
import H800F from "./H800-F.jpg";
import H800G from "./H800-G.jpg";
import H800H from "./H800-H.jpg";
import H800I from "./H800-I.jpg";

export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left"}}>
      <h1>H800 Aircraft Flight Simulator</h1>

    <figure >
        <img src={H800A} height={400}/> 
        <img src={H800C} height={400}/> 
        <img src={H800B} height={400}/> 

        <figcaption>Aircraft Instruments</figcaption>
      </figure>
    
       <figure >
        <img src={H800F} height={400}/> 
        <img src={H800E} height={400}/> 
        <img src={H800D} height={400}/> 

        <figcaption>Aircraft Frame Assembly</figcaption>
           </figure>
    
       <figure >
        <img src={H800G} height={500}/> 
        <img src={H800H} height={500}/> 
        <img src={H800I} height={500}/> 

        <figcaption>Final Assembly</figcaption>
      </figure>

    
      </div>
    </>);
};

export const thumb = img;

export const title = "Hawker 800XP";
