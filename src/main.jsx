// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// );

let arr1 = [1, 2, [3, 4, [5, 6, [7, 8], 9]]];

function display(arr) {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...display(i));
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(display(arr1));
