import React from "react";
import Pet from "./Pet";
import {createRoot} from "react-dom/client"

const App =() =>{
  return(
  <div>
    <h1>Hello World.....!!!!!</h1>
    <Pet name='gaurav' animal='tiger' sname='taple'/>
    <Pet name='Ajay' animal='Lion' sname='taple'/>
    <Pet name='Akshay' animal='Bigtiger' sname='taple'/>

  </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App/>)
