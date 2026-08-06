// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// );



let arr1 = [3, 6, 8, 4, 2, 1, 19];




function display(arr) {
  for (let i = 0; i < arr.length - 1 - i; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i+1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(display(arr1));
