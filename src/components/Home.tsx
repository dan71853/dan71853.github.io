import * as pages from "./../pages/index";
import { CardGroup } from "./CardGroup";

export const Home = () => {
  return (
    <div>
      {Object.entries(pages).map(([groupName, group]) => {
        return (
          <CardGroup
            pages={group}
            title={groupName}
            path={groupName}
            limit={5}
          ></CardGroup>
        );
      })}
    </div>
  );
};
