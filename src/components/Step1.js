import Input from "./subComponents/Step1_Inputs";
import inputs from "../data/inputs.js";
import { useEffect } from "react";

let Step1 = ({personalInfo, handlePersonalInfo, setStep}) => {

  useEffect(()=>{
    setStep(0);
  },[])

  return (
    <>
      <form
        className="px-3 py-4 p-sm-5 mx-auto d-flex flex-column bg-light rounded-4"
        action=""
      >
        <h1 className="fs-1 my-2 text-dark fw-bolder">Personal Info</h1>
        <p className="text-muted my-2 mb-5">
          Please provide your name, email address, and phone number
        </p>

        {inputs.map((element, index) => (
          <Input
            key={index}
            id={element.id}
            value={personalInfo[element.id]}
            type={element.type}
            placeholder={element.placeholder}
            labelName={element.labelName}
            handlePersonalInfo={handlePersonalInfo}
          />
        ))}
      </form>
    </>
  );
};

export default Step1;
