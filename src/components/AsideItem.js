
let AsideItem = ({title, itemStep, isActive})=>{
    let classes="step d-flex flex-row w-100 justify-content-space-around pt-3 m-3"
    return <li
          className={isActive? classes + " active-step": classes}
          step={itemStep+1}
        >
          <a className="d-none d-lg-inline">
            <p className="text-light text-opacity-75">Step {itemStep+1}</p>
            <p className="text-light fw-bold">{title}</p>
          </a>
        </li>
}

export default AsideItem;