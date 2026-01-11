import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import picofbryson from "./assets/brysonflowerspic.png";
import "./App.css";

function App() {
  return (
    <>
      <aside className="sidebar text-center">
        <center>
          <h1 id="sidebartitle"> Bryson Flowers </h1>
          <img
            class="picprofileimg"
            src={picofbryson}
            alt="Pic of Bryson Flowers"
            width="150"
            height="150"
          />
        </center>

        <nav>
          <a class="sidbar"> About Me </a>
          <a class="sidbar"> Technical Training</a>
          <a class="sidbar"> Skills </a>
          <a class="sidbar"> Projects </a>
        </nav>
      </aside>
    </>
  );
}

export default App;
