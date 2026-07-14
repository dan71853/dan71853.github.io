import { useMemo } from "react";
import * as pages from "./../pages/index";
import { CardGroup } from "./CardGroup";
import type { page,  pageGroups } from "../types/types";





export const Home = () => {
  
  const sortedPages = useMemo(()=>{
    return Object.entries(pages as pageGroups).sort((a,b)=>(a[1].priority??0)- (b[1].priority??0))
  },[])
  return (
    <div>
      {sortedPages.map(([groupName, group],i) => {
        const onlyPages = useMemo(()=>{
          const all = {...group};
          all["title"] = undefined;
          all["priority"] = undefined;
          return all as Record<string, page>
        },[])
        return (
          <CardGroup
            pages={onlyPages}
            title={group.title??groupName}
            path={groupName}
            limit={5}
            key={`cardGroup${i}`}
          ></CardGroup>
        );
      })}
    </div>
  );
};
