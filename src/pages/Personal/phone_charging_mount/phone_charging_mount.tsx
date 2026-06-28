import img from "./thumbnail.jpg";

import refA from "./phone_mount-ref-a.jpg";
import refB from "./phone_mount-ref-b.jpg";
import finalA from "./phone_mount-final-a.jpg";
import finalB from "./phone_mount-final-b.jpg";
import finalC from "./phone_mount-final-c.jpg";
import finalD from "./phone_mount-final-d.jpg";

export const page = () => {
  return (
    <>
    <div style={{ textAlign: "left"}}>

     <h1>Phone charging mount</h1>
    A friend wanted a wall mount to hold their phone while it was charging. 
    We had found some designs online but could not find any designs that we liked. <br/>

    I found these 2 designs and combined them. 

    <figure >
        <img src={refA} width={300}/>
        <img src={refB} width={300}/>
        <figcaption>Reference images</figcaption>
    </figure>

    The final design had a slot for the charging cable, can hold headphones and has cute feet.

    <figure >
        <img src={finalA} width={300}/>
        <img src={finalB} width={300}/>
        <figcaption> Final design </figcaption>
    </figure>

   <figure >
        <img src={finalC} width={300}/>
        <img src={finalD} width={300}/>
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
