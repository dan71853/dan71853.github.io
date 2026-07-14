import img from "./thumbnail.jpg";

import PCIEA from "./PCIE-A.jpg";
import PCIEB from "./PCIE-B.jpg";
import PCIEC from "./PCIE-C.jpg";
import PCIED from "./PCIE-D.jpg";
import PowerDistA from "./12_Dist-A.jpg";
import PowerDistB from "./12_Dist-B.jpg";
import PowerDistC from "./12_Dist-C.jpg";

export const page = () => {
  return (
    <>
    <div style={{ textAlign: "left"}}>

     <h1>12V Power Distribution Board</h1>

I was wanting 12V for a few things on my work bench, some sort of distribution board with switches. <br/>
There was nothing I could find off the shelf that met my requirements, so I started to make my own. My PC Is nearby and the power supply provides both 12V and 5V. <br/>
Only the 12V is needed for this project but it would be a good idea to expose the 5V at the same time. <br/>
I had also broken out the PC power button in a previous project, so there were a few cables running out the back of my PC. 
All these cables made it difficult to service my PC as the the connectors were difficult to reach. <br/>
I decided to make my own PCIE bracket and get it 3D printed in metal. 

    <figure >
        <img src={PCIEA} height={400}/>
        <img src={PCIEB} height={400}/>
        <figcaption>PCIE Bracket</figcaption>
    </figure>

   This is the design I came up with, this breaks out both the 5V and 12V into XT30 and XT60 connectors. 
   It also breaks out the PC power button and status light using a magnetic connector.

    <figure >
        <img src={PCIEC} height={350}/>
        <img src={PCIED} height={350}/>
        <figcaption>Installed Bracket</figcaption>
    </figure>
    
  And here is the bracket installed on my PC. The connectors make it easy to disconnect everything when I need to move the case. <br/>
  With the power supply sorted I moved onto the 12V distribution board.

   <figure >
        <img src={PowerDistA} height={400}/>
        <img src={PowerDistB} height={400}/>
        <figcaption>Distribution Board</figcaption>
    </figure>

I went with a modular approach. Each PCB has 2 XT60 plugs with individual switches. <br/>
The PCBs have exposed pads on the bottom so I can solder multiple boards together, this allows me to have a distribution box with 4 or even more sockets but I only have to design and order 1 PCB.


    <figure >
        <img src={PowerDistC} height={500}/>
        <figcaption>Soldering Setup</figcaption>
    </figure>
This picture shows my PC powering both my soldering iron and extraction fan I made out of an old PC fan. I have since added a 12V articulating spotlight to provide illumination.


    {/* The files can be found <a href = "https://github.com/dan71853/MyProjects/tree/main/SmallProjects/PhoneChargerHolder">here</a>. */}

    </div>
    </>
  );
};

export const title = "12V Power Distribution Board";
export const thumb = img;

export const priority = 1;
