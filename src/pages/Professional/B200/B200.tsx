import img from "./thumbnail.jpg";
import finalA from "./B200-Final-A.jpg"
import finalB from "./B200-Final-B.jpg"
import finalC from "./B200-Final-C.jpg"

export const page = () => {
  return (
    <>
    <div style={{ textAlign: "left"}}>
    
   <h1> B200 Aircraft Flight Simulator </h1>

    <figure >
      <img src={finalA} width={800}/> 
      <figcaption>Instructor Station</figcaption>
    </figure>

  <figure >
    <img src={finalB} width={800}/> 
    <figcaption>Cockpit</figcaption>
  </figure>


  <figure >
    <img src={finalC} width={800}/> 
    <figcaption>Front With Screen</figcaption>
  </figure>


   

      </div>
    </>
  );
};

export const title = "B200 King Air";
export const thumb = img;

export const priority = 1;
