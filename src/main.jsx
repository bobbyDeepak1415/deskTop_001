// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// );


let arr1=[23,4,[5,6,[7,4,[34,23],90]]]


function display(arr){


  let result=[]

  for(let i of arr){
    if(Array.isArray(i)){
      result.push(...display(i))
    }

    result.push(i)
  }

}

console.log(display(arr1))