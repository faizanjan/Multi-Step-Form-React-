let Input = ({id, type, value, placeholder, labelName, handlePersonalInfo})=>{
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
          onChange={(event)=>{handlePersonalInfo(id, event.target.value)}}
          value={value}
          required
        />
    </>
}

export default Input;