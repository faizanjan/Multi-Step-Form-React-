import Plan from "./subComponents/Step2_Plans";
import plans from "../data/plans" 
import { useEffect } from "react";

let Step2 = ({monthly, switchMonthly, setPlan, activePlan, setStep}) => {
  
  useEffect(()=>{
    setStep(1);
  },[])

  let classesForMonthlyAndYearly = "form-check-label mx-2 mx-sm-3 mx-lg-5";
  return (
    <form
      className="px-3 py-4 p-sm-5 mx-auto d-flex flex-column bg-light rounded-4"
      action=""
    >
      <h1 className="fs-1 my-2 text-dark fw-bolder">Select Your Plan</h1>
      <p className="text-muted my-2 mb-5">
        You have the option of monthly or yearly billing
      </p>

      <div
        id="plans-options"
        className="d-flex flex-column flex-lg-row justify-content-between"
      >
        {plans.map((plan, index) => (
          <Plan
            key={index}
            serial={index}
            id={plan.id}
            imgSrc={plan.img}
            monthlyPrice={plan.monthlyPrice}
            monthly={monthly}
            checked={plan.id===activePlan.id}
            setPlan={setPlan}
          />
        ))}
      </div>

      <div className="form-check form-switch d-flex flex-row justify-content-center align-items-center my-5 py-4">
        <span className={monthly? classesForMonthlyAndYearly+ " fw-bold" : classesForMonthlyAndYearly}>
          Monthly
        </span>
        <input
          className="form-check-input mx-2 mx-sm-3 mx-lg-5"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={()=>{switchMonthly(!monthly)}}
          defaultChecked={!monthly}
        />
        <span className={!monthly? classesForMonthlyAndYearly+ " fw-bold" : classesForMonthlyAndYearly}> Yearly</span>
      </div>
    </form>
  );
};

export default Step2;
