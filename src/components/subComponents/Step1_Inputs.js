import { useState } from "react";

let Input = ({id, type, value, placeholder, labelName, handlePersonalInfo})=>{
    
    let [firstFocused, setFirstFocus] = useState(false);
    let classesForInput = "p-2 w-75 border rounded-2";

    return <>
    <label
          id={"label-for-"+id}
          className="text-dark mt-3 mb-1 d-flex flex-row justify-content-between"
          htmlFor={id}
        >
          <span>{labelName}</span>
          <span 
            className="field-required text-danger"
            style={{display: `${(firstFocused && !value)? "inline": "none"}`}}
            >
              This field is required</span>
        </label>
        <input
          className= {(firstFocused && !value)? classesForInput + " border-danger": classesForInput}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={(event)=>{handlePersonalInfo(id, event.target.value)}}
          value={value}
          onFocus={()=>{setFirstFocus(true)}}
          required
        />
    </>
}

export default Input;