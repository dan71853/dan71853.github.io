import { Link } from "react-router-dom";
import showMoreImg from "../assets/showMoreArrows.svg";

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

export const CardGroup = (props: cardGroupProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.entries(props.pages).map(([k, v], i) => {
          if (i < (props.limit ?? 9999))
            return (
              <Link to={`/${props.path}/${k}`}>
                <Card {...v} grayScale={false} />
              </Link>
            );
        })}
        {props.limit !== undefined &&
          Object.entries(props.pages).length > props.limit &&
          !props.wrap && (
            <Link to={`/${props.path}`}>
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
          width={window.innerWidth / 6}
          height={window.innerHeight / 3}
        />
        {props.grayScale && (
          <img
            src={showMoreImg}
            width={window.innerWidth / 6}
            height={window.innerHeight / 3}
            style={{ position: "absolute", left: "0px", top: "0px" }}
          />
        )}
      </div>
      <br></br>
      {props.title}
    </div>
  );
};
