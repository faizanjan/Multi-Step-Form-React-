import {useEffect} from 'react';

let Step5 = ({setStep}) => {
  
  useEffect(()=>{
    setStep(4);
  },[])

  return (
    <div
      id="thankyou"
      className="d-flex flex-column align-items-center justify-content-center mt-5"
    >
      <img
        className="my-2"
        src="https://multi-step-form-sepia-six.vercel.app/assets/images/icon-thank-you.svg"
        alt="Thanks"
      />
      <h1 className="my-3">Thank you!</h1>

      <p className="text-muted text-center my-2 w-75">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Step5;
