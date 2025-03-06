import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals"


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App(){
 let [steps,setSteps]=useState(1);
 const [isOpen,setIsOpen]=useState(true);
  function hundlePreviouse(){
   if(steps>1) setSteps((s)=>s-1);   
  }
  function hundleNext(){
   if(steps<3) setSteps(steps+1);
  }
  return(
    <>
  <button className="close" onClick={() => setIsOpen((is) => !is)}>
    &times;
  </button>

  {isOpen && (
   <div className="steps">
    <div className="numbers">
      <div className={steps >=1 ? "active" :""}>1</div>
      <div className={steps >=2 ? "active" :""}>2</div>
      <div className={steps >=3 ? "active" :""}>3</div>
    </div>
    <p className="message">Step{steps}:{messages[steps-1]} </p>
    <div className="buttons">
      <button style={{color:"#fff",backgroundColor:"#7950f2"}} onClick={hundlePreviouse}>Previous</button>
      <button style={{color:"#fff",backgroundColor:"#7950f2"}} onClick={hundleNext}>Next</button>
    </div>
  </div>)};
  </>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [steps, setSteps] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (steps > 1) setSteps((s) => s - 1); // مقدار را با استفاده از تابع به‌روز کنید
//   }

//   function handleNext() {
//     if (steps < 3) setSteps((s) => s + 1); // مقدار را با استفاده از تابع به‌روز کنید
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={steps >= 1 ? "active" : ""}>1</div>
//             <div className={steps >= 2 ? "active" : ""}>2</div>
//             <div className={steps >= 3 ? "active" : ""}>3</div>
//           </div>
//           <p className="message">
//             Step {steps}: {messages[steps - 1]}
//           </p>
//           <div className="buttons">
//             <button
//               style={{ color: "#fff", backgroundColor: "#7950f2" }}
//               onClick={handlePrevious}
//               disabled={steps === 1}
//             >
//               Previous
//             </button>
//             <button
//               style={{ color: "#fff", backgroundColor: "#7950f2" }}
//               onClick={handleNext}
//               disabled={steps === 3}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


