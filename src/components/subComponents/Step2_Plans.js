let Plan = (props) => {
  let { serial, id, imgSrc, monthlyPrice, isMonthly, isChecked, setPlan } = props;
  return (
    <>
      <input
        type="radio"
        id={id}
        name="plan"
        value={id}
        className="invisible"
        defaultChecked={isChecked}
        onClick={() => {
          setPlan(serial);
        }}
      />
      <label
        className="plan-label d-flex flex-lg-column justify-content-between border rounded-2 p-3"
        htmlFor={id}
      >
        <img className="mb-lg-5" src={imgSrc} alt={id} />
        <span className="plan-details">
          <p
            className="plan text-dark fw-bold"
            style={{ textTransform: "Capitalize" }}
          >
            {id}
          </p>
          <p className="price text-muted">
            ${isMonthly ? monthlyPrice + "/mo" : monthlyPrice * 10 + "/yr"}
          </p>
          {!isMonthly && <p className="two-months-free">2 months free</p>}
        </span>
      </label>
    </>
  );
};

export default Plan;