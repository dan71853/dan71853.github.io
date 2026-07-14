import img from "./Thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
 
export const page = () => {
  return (
    <>
      <div style={{ textAlign: "left"}}>
        <h1>Pencil Holder</h1>
        This was a gift to a friend, I found this on <a href="https://www.thingiverse.com/thing:5187469">Thingiverse</a>. It was
        designed as a plant pot but it makes a great pencil holder.
        <figure >
          <img src={Img01} width={600}/> 
          <img src={Img02} width={600}/> 
          <figcaption>Pencil Holder</figcaption>
        </figure>

      </div>
    </>);
};

export const thumb = img;

export const title = "Pencil Holder";
