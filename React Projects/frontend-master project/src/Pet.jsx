import React from "react";

// const pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.middleName),
//       React.createElement("h3", {}, props.lastName),
//     ]);
//   };

const Pet = (props) => {
    return(
    <div>
        <h1>{props.name}</h1>
        <h1>{props.animal}</h1>
        <h1>{props.sname}</h1>
    </div>
    )
}

  export default Pet;