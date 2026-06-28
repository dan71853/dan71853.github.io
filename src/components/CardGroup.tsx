import { Link } from "react-router-dom";

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
                <Card {...v} />
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
              />
            </Link>
          )}
      </div>
    </div>
  );
};

const Card = (props: page) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={props.thumb} width={200} height={200} />
      <br></br>
      {props.title}
    </div>
  );
};
