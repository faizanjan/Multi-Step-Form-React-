let Step2 = () => {
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
        <input
          type="radio"
          id="arcade"
          name="plan"
          value="arcade"
          className="invisible"
          checked
        />
        <label
          className="plan-label d-flex flex-lg-column justify-content-between border rounded-2 p-3"
          htmlFor="arcade"
        >
          <img
            className="mb-lg-5"
            src="https://multi-step-form-sepia-six.vercel.app/assets/images/icon-arcade.svg"
            alt="arcade"
          />
          <span className="plan-details">
            <p className="plan text-dark fw-bold">Arcade</p>
            <p className="price text-muted">$9/mo</p>
            <p className="two-months-free">2 months free</p>
          </span>
        </label>

        <input
          type="radio"
          id="advanced"
          name="plan"
          value="advanced"
          className="invisible"
        />
        <label
          className="plan-label d-flex flex-lg-column justify-content-between border rounded-2 p-3"
          htmlFor="advanced"
        >
          <img
            className="mb-lg-5"
            src="https://multi-step-form-sepia-six.vercel.app/assets/images/icon-advanced.svg"
            alt="advanced"
          />
          <span className="plan-details">
            <p className="plan text-dark fw-bold">Advanced</p>
            <p className="price text-muted">$12/mo</p>
            <p className="two-months-free">2 months free</p>
          </span>
        </label>

        <input
          type="radio"
          id="pro"
          name="plan"
          value="pro"
          className="invisible"
        />
        <label
          className="plan-label d-flex flex-lg-column justify-content-between border rounded-2 p-3"
          htmlFor="pro"
        >
          <img
            className="mb-lg-5"
            src="https://multi-step-form-sepia-six.vercel.app/assets/images/icon-pro.svg"
            alt="pro"
          />
          <span className="plan-details">
            <p className="plan text-dark fw-bold">Pro</p>
            <p className="price text-muted">$15/mo</p>
            <p className="two-months-free">2 months free</p>
          </span>
        </label>
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
