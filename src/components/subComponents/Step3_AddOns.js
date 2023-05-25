let AddOn = (props) => {
  let { id, addOnName, addOnDetail, monthlyPrice, checked, modifyAddOns } =
    props;

  return (
    <div className="add-on d-flex flex-row border rounded-2 p-3 my-2">
      <input
        className="mx-auto mx-sm-3"
        type="checkbox"
        id={id}
        defaultChecked={checked}
        onClick={(event)=>{modifyAddOns(id, event.target.checked)}}
      />
      <label
        className="add-ons-label d-flex align-items-center flex-row justify-content-between mx-3 lg-3 mx-sm-5"
        htmlFor={id}
      >
        <div className="add-ons-details">
          <p className="add-ons-name my-1 fs-5">{addOnName}</p>
          <p className="text-muted">{addOnDetail}</p>
        </div>
        <span className="add-ons-price">+${monthlyPrice}/mo</span>
      </label>
    </div>
  );
};

export default AddOn;
