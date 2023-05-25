let Input = ({id, type, placeholder, labelName})=>{
    return <>
    <label
          id={"label-for-"+id}
          className="text-dark mt-3 mb-1 d-flex flex-row justify-content-between"
          htmlFor={id}
        >
          <span>{labelName}</span>
          <span className="field-required text-danger">This field is required</span>
        </label>
        <input
          className="p-2 w-75 border rounded-2"
          type={type}
          id={id}
          placeholder={placeholder}
          required
        />
    </>
}

export default Input;