// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// );

let str1 = "AABBCAABDDEEBA";

function display(str) {
  let result = "";

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let seen=new Set()

  for(let i of str){
    if(!seen.has(i)){
      result+=i+obj[i]
      seen.add(i)
    }
  }

  return result;
}

console.log(display(str1));
