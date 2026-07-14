import img from "./Thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
 
export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left"}}>
      <h1>Octopus</h1>

      I found this on <a href="https://www.thingiverse.com/thing:3495390">Thingiverse</a> but I didn't like the mouth so I modified it with Blender. <br/>
      The arms are articulated and are printed as one part.
      It currently sits as a decoration on top of my microphone.
 
        <figure >
          <img src={Img01} width={600}/> 
          <img src={Img02} width={600}/> 
          <figcaption>3D Printed Octopus</figcaption>
        </figure>

      </div>
    </>);
};

export const thumb = img;

export const title = "Octopus";
