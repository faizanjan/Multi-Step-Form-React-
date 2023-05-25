let Aside = ({step}) => {
  return (
    <aside className="d-flex rounded-lg-3 m-lg-3 pt-lg-5 px-lg-4 h-lg-100">
      <ol className="d-flex flex-row flex-lg-column mx-auto mx-lg-0">
        <li
          className="step active-step d-flex flex-row w-100 justify-content-space-around pt-3 m-3"
          step="1"
        >
          <a className="d-none d-lg-inline">
            <p className="text-light text-opacity-75">Step 1</p>
            <p className="text-light fw-bold">YOUR INFO</p>
          </a>
        </li>
        <li
          className="step d-flex flex-row w-100 justify-content-space-around pt-3 m-3"
          step="2"
        >
          <a className="d-none d-lg-inline">
            <p className="text-light text-opacity-75">Step 2</p>
            <p className="text-light fw-bold">SELECT PLAN</p>
          </a>
        </li>
        <li
          className="step d-flex flex-row w-100 justify-content-space-around pt-3 m-3"
          step="3"
        >
          <a className="d-none d-lg-inline">
            <p className="text-light text-opacity-75">Step 3</p>
            <p className="text-light fw-bold">ADD-ONS</p>
          </a>
        </li>
        <li
          className="step d-flex flex-row w-100 justify-content-space-around pt-3 m-3"
          step="4"
        >
          <a className="d-none d-lg-inline">
            <p className="text-light text-opacity-75">Step 4</p>
            <p className="text-light fw-bold">SUMMARY</p>
          </a>
        </li>
      </ol>
    </aside>
  );
};

export default Aside;
