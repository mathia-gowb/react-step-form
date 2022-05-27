export function Header(props){
    return(
        <header>
        <div id="check-point">
          <div className={`check-point-item ${props.stepNumber>0?'completed':''}`}>
            <h2>Names</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
          <div className={`check-point-item ${props.stepNumber>1?'completed':''}`}>
            <h2>Contact Info</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check" ></i>
            </div>
          </div>
          <div className={`check-point-item ${props.stepNumber>2?'completed':''}`}>
            <h2>Address</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
          <div className={`check-point-item ${props.stepNumber>3?'completed':''}`}>
            <h2>Verify</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
        </div>
        <div id="path">
          <div className={`path-indicator ${props.stepNumber>0?'completed-path':''}`}></div>
          <div className={`path-indicator ${props.stepNumber>1?'completed-path':''}`}></div>
          <div className={`path-indicator ${props.stepNumber>2?'completed-path':''}`}></div>
        </div>      
      </header>
    )
}