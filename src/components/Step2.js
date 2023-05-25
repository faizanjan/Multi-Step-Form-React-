import Plan from "./Step2_Plans";

let Step2 = () => {
  const plans = [
    {
      id: "arcade",
      img: "https://multi-step-form-sepia-six.vercel.app/assets/images/icon-arcade.svg",
      monthlyPrice: 9,
      checked: true,
    },
    {
      id: "advanced",
      img: "https://multi-step-form-sepia-six.vercel.app/assets/images/icon-advanced.svg",
      monthlyPrice: 12,
      checked: false,
    },
    {
      id: "pro",
      img: "https://multi-step-form-sepia-six.vercel.app/assets/images/icon-pro.svg",
      monthlyPrice: 15,
      cheched: false,
    },
  ];
  
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
            id={plan.id}
            imgSrc={plan.img}
            monthlyPrice={plan.monthlyPrice}
            checked={plan.checked}
          />
        ))}
      </div>

      <div className="form-check form-switch d-flex flex-row justify-content-center align-items-center my-5 py-4">
        <span className="form-check-label fw-bold mx-2 mx-sm-3 mx-lg-5">
          Monthly
        </span>
        <input
          className="form-check-input mx-2 mx-sm-3 mx-lg-5"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <span className="form-check-label mx-2 mx-sm-3 mx-lg-5"> Yearly</span>
      </div>
    </form>
  );
};

export default Step2;
