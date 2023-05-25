let Step3 = () => {
  return (
    <form
      className="px-3 py-4 p-sm-5 mx-auto d-flex flex-column bg-light rounded-4"
      action=""
    >
      <h1 className="fs-1 my-2 text-dark fw-bolder">Pick add-ons</h1>
      <p className="text-muted my-2 mb-3">
        Add-ons help enhance your gaming experience
      </p>

      <div className="add-on d-flex flex-row border rounded-2 p-3 my-2">
        <input
          className="mx-auto mx-sm-3"
          type="checkbox"
          id="online-service"
          checked
        />
        <label
          className="add-ons-label d-flex align-items-center flex-row justify-content-between mx-3 lg-3 mx-sm-5"
          htmlFor="online-service"
        >
          <div className="add-ons-details">
            <p className="add-ons-name my-1 fs-5">Online service</p>
            <p className="text-muted">Access to multiplayer games</p>
          </div>
          <span className="add-ons-price">+$1/mo</span>
        </label>
      </div>

      <div className="add-on d-flex flex-row border rounded-2 p-3 my-2">
        <input
          className="mx-auto mx-sm-3"
          type="checkbox"
          id="larger-storage"
          checked
        />
        <label
          className="add-ons-label d-flex align-items-center flex-row justify-content-between mx-3 lg-3 mx-sm-5"
          htmlFor="larger-storage"
        >
          <div className="add-ons-details">
            <p className="add-ons-name my-1 fs-5">Larger storage</p>
            <p className="text-muted">Extra 1TB of cloud save</p>
          </div>
          <span className="add-ons-price">+$2/mo</span>
        </label>
      </div>

      <div className="add-on d-flex flex-row border rounded-2 p-3 my-2">
        <input className="mx-auto mx-sm-3" type="checkbox" id="custom-profile" />
        <label
          className="add-ons-label d-flex align-items-center flex-row justify-content-between mx-3 lg-3 mx-sm-5"
          htmlFor="custom-profile"
        >
          <div className="add-ons-details">
            <p className="add-ons-name my-1 fs-5">Customizable profile</p>
            <p className="text-muted">Custom theme on your profile</p>
          </div>
          <span className="add-ons-price">+$2/mo</span>
        </label>
      </div>
    </form>
  );
};

export default Step3;
