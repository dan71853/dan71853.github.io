import * as pages from "./pages/index";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CardGroup } from "./components/CardGroup";
import { NavBar } from "./components/NavBar";
import { useMemo } from "react";
import type { page, pageGroups } from "./types/types";

function App() {

  const sortedPages = useMemo(()=>{
    return Object.entries(pages as pageGroups).filter((thingy)=>thingy).sort((a,b)=>(a[1].priority??0)- (b[1].priority??0))
  },[pages])

  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {sortedPages.map(([groupName, group]) => {
            const onlyPages = useMemo(()=>{
              const all = {...group};
              all["title"] = undefined;
              all["priority"] = undefined;
              return all as Record<string, page>
            },[])
            return (
              <Route
                path={`/${groupName}`}
                element={
                  <CardGroup
                    pages={onlyPages}
                     title={group.title??groupName}
                    path={groupName}
                  ></CardGroup>
                }
              />
            );
          })}
          {sortedPages.map(([groupName, group]) => {
            const onlyPages = useMemo(()=>{
              const all = {...group};
              all["title"] = undefined;
              all["priority"] = undefined;
              return all as Record<string, page>
            },[])
            return Object.entries(onlyPages).map(([pageName, page]) => {
              if(page)
              return (
                <Route
                  path={`/${groupName}/${pageName}`}
                  element={page.page()}
                />
              );
            });
          })}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
