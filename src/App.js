import { useState } from "react";
import Aside from "./components/Aside";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let paths = ["/", "/plans", "/add-ons", "/summary", "/thanks"];
  let [step, setStep] = useState(0);
  let [personalInfo, setPersonalInfo] = useState({name:"", email:"", number:""});

  let handlePersonalInfo = (key, value)=>{
    setPersonalInfo({
      ...personalInfo,
      [key]:value
    })
  }

  return (
    <div className="App my-container d-flex flex-column flex-lg-row bg-light border border-light rounded-3 h-75 p-lg-3">
      <Aside step={step}/>

      <Routes>
        <Route element={<Step1 handlePersonalInfo={handlePersonalInfo}/>} path="/" />
        <Route element={<Step2 />} path="/plans" />
        <Route element={<Step3 />} path="/add-ons" />
        <Route element={<Step4 />} path="/summary" />
        <Route element={<Step5 />} path="/thanks" />
      </Routes>

      {step > 0 && (
        <Link
          to={paths[step - 1]}
          onClick={() => {
            setStep(step - 1);
          }}
          className="btn btn-rounded btn-outline-dark prev-btn p-2 px-4"
        >
          Go Back
        </Link>
      )}

      {step < 4 && (
        <Link
          to={paths[step + 1]}
          onClick={() => {
            setStep(step + 1);
          }}
          className="btn btn-rounded btn-dark next-btn p-2 px-4"
        >
          Next Step
        </Link>
      )}
    </div>
  );
}

export default App;
