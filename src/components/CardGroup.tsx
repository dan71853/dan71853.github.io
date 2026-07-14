import { Link } from "react-router-dom";
import showMoreImg from "../assets/showMoreArrows.svg";
import { useMemo } from "react";

interface page {
  page: () => {};
  thumb: string;
  priority?: number;
  title: string;
}

type pages = Record<string, page>;

interface cardGroupProps {
  pages: pages;
  title: string;
  path: string;
  limit?: number;
  wrap?: boolean;
}

const cardWidth = `${100/6}%`

const maxPriority = 9999;
export const CardGroup = (props: cardGroupProps) => {

  const sortedPages = useMemo(()=>{
    return Object.entries(props.pages).sort((a,b)=> (a[1].priority??maxPriority) - (b[1].priority??maxPriority))
  },[props.pages])

  return (
    <div >
      <h1 style={{ textAlign: "left"}}>{props.title}</h1>
      <div  style={{ display: "flex", flexWrap: "wrap",  }} className="CardGroupDiv">
        {sortedPages.map(([k, v], i) => {
          if (i < (props.limit ?? 9999))
            return (
              <Link to={`/${props.path}/${k}`} key={`link${i}`} 
              style={{
                width:cardWidth, 
                height:cardWidth, 
                color:"white", 
                textDecoration:"none",
                fontSize:"20px",
                }}>
                <Card {...v} grayScale={false} key={`card${i}`} />
              </Link>
            );
        })}
        {props.limit !== undefined &&
          sortedPages.length > props.limit &&
          !props.wrap && (
            <Link to={`/${props.path}`} style={{width:cardWidth, height:cardWidth}}>
              <Card
                {...Object.entries(props.pages)[props.limit][1]}
                title={"Show More"}
                grayScale={true}
              />
            </Link>
          )}
      </div>
    </div>
  );
};

interface cardProps extends page {
  grayScale: boolean;
}
const Card = (props: cardProps) => {




  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin:"0.5rem"
      }}
    >
      <div
        style={{
          filter: props.grayScale ? "grayscale(100%)" : "none",
          position: "relative",
        }}
      >
        <img
          src={props.thumb}
          style={{width:"100%", height:"100%", borderRadius:"5px"}}

          
        />
        {props.grayScale && (
          <img
            src={showMoreImg}

            style={{ 
              width:"100%",
               height:"100%",
               position: "absolute",
                left: "0px",
                 top: "0px" }}
          />
        )}
      </div>
      <br></br>
      {props.title}
    </div>
  );
};
