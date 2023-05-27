import AddOn from "./subComponents/Step3_AddOns";
import { useEffect } from "react";

let Step3 = ({monthly, modifyAddOns, addOnsList, setStep}) => {
  
  useEffect(()=>{
    setStep(2);
  },[])
  
  return (
    <form
      className="px-3 py-4 p-sm-5 mx-auto d-flex flex-column bg-light rounded-4"
      action=""
    >
      <h1 className="fs-1 my-2 text-dark fw-bolder">Pick add-ons</h1>
      <p className="text-muted my-2 mb-3">
        Add-ons help enhance your gaming experience
      </p>

      {addOnsList.map((addOn) => (
        <AddOn
          key={addOn.id}
          id={addOn.id}
          addOnName={addOn.addOnName}
          addOnDetail={addOn.addOnDetail}
          monthlyPrice={addOn.monthlyPrice}
          checked={addOn.checked}
          modifyAddOns={modifyAddOns}
          monthly={monthly}
        />
      ))}
    </form>
  );
};

export default Step3;
