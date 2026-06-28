import * as pages from "./pages/index";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CardGroup } from "./components/CardGroup";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.entries(pages).map(([groupName, group]) => {
            return (
              <Route
                path={`/${groupName}`}
                element={
                  <CardGroup
                    pages={group}
                    title={groupName}
                    path={groupName}
                  ></CardGroup>
                }
              />
            );
          })}
          {Object.entries(pages).map(([groupName, group]) => {
            return Object.entries(group).map(([pageName, page]) => {
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
