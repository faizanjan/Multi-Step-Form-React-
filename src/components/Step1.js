let Step1 = () => {
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

        <label
          id="label-for-name"
          className="text-dark mt-3 mb-1 d-flex flex-row justify-content-between"
          htmlFor="name"
        >
          <span>Name</span>
          <span className="field-required text-danger">This field is required</span>
        </label>
        <input
          className="p-2 w-75 border rounded-2"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          required
        />

        <label
          id="label-for-email"
          className="text-dark mt-3 mb-1 d-flex flex-row justify-content-between"
          htmlFor="email"
        >
          <span>Email Address</span>
          <span className="field-required text-danger">This field is required</span>
        </label>
        <input
          className="p-2 w-75 border rounded-2"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          required
        />

        <label
          id="label-for-number"
          className="text-dark mt-3 mb-1 d-flex flex-row justify-content-between"
          htmlFor="phone-number"
        >
          <span>Phone Number</span>
          <span className="field-required text-danger">This field is required</span>
        </label>
        <input
          className="p-2 w-75 border rounded-2"
          type="number"
          id="phone-number"
          placeholder="e.g. +1 234 567 890"
          required
        />
      </form>
    </>
  );
};

export default Step1;
