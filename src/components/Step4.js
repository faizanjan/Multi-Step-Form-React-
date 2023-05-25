let Step4 = () => {
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
            <h5 id="plan-name" className="fw-bold mb-2"></h5>
            <a href="plan.html" className="text-muted">
              Change
            </a>
          </div>
          <span id="plan-price" className="fw-bold"></span>
        </div>
        <hr />
        <div id="add-ons-summary" className="mt-3"></div>
      </div>

      <div
        id="total-container"
        className="my-4 w-100 m-auto d-flex flex-row justify-content-between px-3"
      >
        <p id="total"></p>
        <h4 id="total-summary-price"></h4>
      </div>
    </form>
  );
};

export default Step4;
