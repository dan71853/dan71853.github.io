import * as pages from "./../pages/index";
import { CardGroup } from "./CardGroup";

export const Home = () => {
  return (
    <div>
      {Object.entries(pages).map(([groupName, group],i) => {
        return (
          <CardGroup
            pages={group}
            title={groupName}
            path={groupName}
            limit={5}
            key={`cardGroup${i}`}
          ></CardGroup>
        );
      })}
    </div>
  );
};
