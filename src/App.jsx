import React from "react";
import Navbar from "./Navbar";
import Home from "./home";

function App() {
  // const link = "http://www.google.com";
  // This is a functional component
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        {/* <p>{"Hello, welcome to my blog, I have so much to tell you"}</p>
        <p>{"I'm aspiring to be a tech expert"}</p>
        <p>{"I'm a software developer"}</p>
        <p>{"I'm a tech enthusiast"}</p>
        <p>{"I'm a tech blogger"}</p>
        <p>{"I'm a tech content creator"}</p> */}
        {/* <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;
