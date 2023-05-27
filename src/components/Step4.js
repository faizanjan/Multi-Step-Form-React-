import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

let Step4 = ({ isMonthly, activePlan, addOnsList, setStep }) => {
  
  useEffect(()=>{
    setStep(3);
  },[])

  let monthlyTotal = useState(
    activePlan.monthlyPrice +
      addOnsList.reduce((acc, addOn) => {
        if (addOn.checked) {
          acc += addOn.monthlyPrice;
        }
        return acc;
      }, 0)
  );

  return (
    <form
      className="px-3 py-4 p-sm-5 mx-auto d-flex flex-column bg-light rounded-4"
      action=""
    >
      <h1 className="fs-1 my-2 text-dark fw-bolder">Finishing up</h1>
      <p className="text-muted my-2 mb-5">
        Double check everything looks OK before confirming
      </p>

      <div id="summary" className="w-100 border rounded-3 p-3 mx-auto">
        <div
          id="plan-summary"
          className="d-flex flex-row justify-content-between align-items-center pe-3 mt-2 mb-3"
        >
          <div id="plan-details">
            <h5
              id="plan-name"
              className="fw-bold mb-2"
              style={{ textTransform: "Capitalize" }}
            >
              {activePlan.id} ({isMonthly ? "Monthly" : "Yearly"})
            </h5>
            <Link
              to="/plans"
              onClick={() => {
                setStep(1);
              }}
              className="text-muted"
            >
              Change
            </Link>
          </div>
          <span id="plan-price" className="fw-bold">
            $
            {isMonthly
              ? activePlan.monthlyPrice + "/mo"
              : activePlan.monthlyPrice * 10 + "/yr"}
          </span>
        </div>
        <hr />
        <div id="add-ons-summary" className="mt-3">
          {addOnsList.map((addOn) => {
            if (addOn.checked) {
              return (
                <div
                  key={addOn.id}
                  className="add-on-sum d-flex flex-row justify-content-between align-items-center pe-3 mt-2 mb-3 "
                >
                  <p className="add-on-name text-muted">{addOn.addOnName}</p>
                  <p className="add-on-price">
                    +$
                    {isMonthly
                      ? addOn.monthlyPrice + "/mo"
                      : addOn.monthlyPrice * 10 + "/yr"}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div
        id="total-container"
        className="my-4 w-100 m-auto d-flex flex-row justify-content-between px-3"
      >
        <h5 id="total">Total ({isMonthly? "Monthly":"Yearly"})</h5>
        <h4 id="total-summary-price" className="text-primary">
          ${isMonthly ? monthlyTotal[0] + "/mo" : monthlyTotal[0] * 10 + "/yr"}
        </h4>
      </div>
    </form>
  );
};

export default Step4;
