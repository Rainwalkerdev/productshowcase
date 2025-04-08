import { Suspense } from "react";
import "./App.css";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <div id={"bg_container"} className={"container"}>
        <div className={"wrapper"}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
