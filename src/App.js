import Aside from "./components/Aside";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

import plans from "./data/plans.js";
import addOns from "./data/addOns.js";

import validateFirstStep from "./modules/validation";

import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let paths = ["/", "/plans", "/add-ons", "/summary", "/thanks"];

  // STATE MANAGEMENT
  let [personalInfo, setPersonalInfo] = useState(JSON.parse(sessionStorage.getItem("personalInfo")));

  let lastMonthly = JSON.parse(sessionStorage.getItem("isMonthly"));
  let [isMonthly, switchMonthly] = useState(
    lastMonthly === null ? true : lastMonthly
  );

  let lastActivePlan =
    JSON.parse(sessionStorage.getItem("activePlan")) || plans[0];
  let [activePlan, setActivePlan] = useState(lastActivePlan);

  let lastAddOnsList =
    JSON.parse(sessionStorage.getItem("addOnsList")) || addOns;
  let [addOnsList, setAddOnsList] = useState(lastAddOnsList);

  let lastStep = parseInt(sessionStorage.getItem("step")) || 0;
  let [step, setStep] = useState(lastStep);

  let [validity, setValidity] = useState(
    step===0? validateFirstStep(personalInfo): [true,null]
  )

  // COMPONENT DID UPDATE 
  useEffect(() => {
    sessionStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    sessionStorage.setItem("step", JSON.stringify(step));
    sessionStorage.setItem("isMonthly", JSON.stringify(isMonthly));
    sessionStorage.setItem("activePlan", JSON.stringify(activePlan));
    sessionStorage.setItem("addOnsList", JSON.stringify(addOnsList));
    setValidity(validateFirstStep(personalInfo));
  }, [isMonthly, step, activePlan, addOnsList, personalInfo]);

  let handlePersonalInfo = (key, value) => {
    setPersonalInfo({
      ...personalInfo,
      [key]: value,
    });
  };

  let setPlan = (index) => {
    setActivePlan(plans[index]);
  };

  let modifyAddOns = (id, checked) => {
    let newList = addOnsList.map((addOn) => {
      if (addOn.id === id) {
        return {
          ...addOn,
          checked,
        };
      } else return addOn;
    });
    setAddOnsList(newList);
  };

  // JSX
  return (
    <div className="App my-container d-flex flex-column flex-lg-row bg-light border border-light rounded-3 h-75 p-lg-3">
      <Aside step={step} />

      <Routes>
        <Route
          element={
            <Step1
              personalInfo={personalInfo}
              handlePersonalInfo={handlePersonalInfo}
              setStep={setStep}
              prompts={validity[1]}
            />
          }
          path="/"
        />
        <Route
          element={
            <Step2
              isMonthly={isMonthly}
              switchMonthly={switchMonthly}
              setPlan={setPlan}
              activePlan={activePlan}
              setStep={setStep}
            />
          }
          path="/plans"
        />
        <Route
          element={
            <Step3
              isMonthly={isMonthly}
              modifyAddOns={modifyAddOns}
              addOnsList={addOnsList}
              setStep={setStep}
            />
          }
          path="/add-ons"
        />
        <Route
          element={
            <Step4
              isMonthly={isMonthly}
              activePlan={activePlan}
              addOnsList={addOnsList}
              setStep={setStep}
            />
          }
          path="/summary"
        />
        <Route element={<Step5 setStep={setStep}/>} path="/thanks" />
      </Routes>

          {/*********** Navigation Buttons ************/}
      {step > 0 && step< 4 && (
        <Link
          to={paths[step - 1]}
          className="btn btn-rounded btn-outline-dark prev-btn p-2 px-4"
        >
          Go Back
        </Link>
      )}

      {step < 4 && (
        <Link
          to={validity[0]? paths[step+1]: paths[step]}
          className="btn btn-rounded btn-dark next-btn p-2 px-4"
        >
          {step === 3 ? "Confirm" : "Next Step"}
        </Link>
      )}
    </div>
  );
}

export default App;
