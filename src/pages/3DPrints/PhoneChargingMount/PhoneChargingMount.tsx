import img from "./Thumbnail.jpg";

import Img01 from "./Img-01.jpg";
import Img02 from "./Img-02.jpg";
import Img03 from "./Img-03.jpg";
import Img04 from "./Img-04.jpg";
import Img05 from "./Img-05.jpg";
import Img06 from "./Img-06.jpg";

export const page = () => {
  return (
    <>
    <div style={{ textAlign: "left"}}>

     <h1>Phone charging mount</h1>
    A friend wanted a wall mount to hold their phone while it was charging. 
    We had found some designs online but could not find any designs that we liked. <br/>

    I found these 2 designs and combined them. 

    <figure >
        <img src={Img01} width={300}/>
        <img src={Img02} width={300}/>
        <figcaption>Reference images</figcaption>
    </figure>

    The final design had a slot for the charging cable, can hold headphones and has cute feet.

    <figure >
        <img src={Img03} width={300}/>
        <img src={Img04} width={300}/>
        <figcaption> Final design </figcaption>
    </figure>

   <figure >
        <img src={Img05} width={300}/>
        <img src={Img06} width={300}/>
        <figcaption> Holding headphones </figcaption>
    </figure>

    The files can be found <a href = "https://github.com/dan71853/MyProjects/tree/main/SmallProjects/PhoneChargerHolder">here</a>.

    </div>
    </>
  );
};

export const title = "Phone Charging Mount";
export const thumb = img;

export const priority = 1;
