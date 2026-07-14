import img from "./Thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
 
export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left"}}>
        <h1>Tallneck Robot</h1>
            This is a robot from a game called Horizon Zero Dawn, I found the design on <a href="https://www.thingiverse.com/thing:2700455">Thingiverse</a>.  <br/>          
            This was printed in multiple pats and glued together.
        <figure >
          <img src={Img01} width={600}/> 
          <img src={Img02} width={600}/> 
          <figcaption>Pencil Holder</figcaption>
        </figure>

      </div>
    </>);
};

export const thumb = img;

export const title = "Tallneck";
