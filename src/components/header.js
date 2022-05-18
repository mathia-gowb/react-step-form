export function Header(props){
    return(
        <header>
        <div id="check-point">
          <div className="check-point-item">
            <h2>Names</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
          <div className="check-point-item">
            <h2>Contact Info</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check" ></i>
            </div>
          </div>
          <div className="check-point-item">
            <h2>Addres</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
          <div className="check-point-item">
            <h2>Verify</h2>
            <div className="icon-container">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
        </div>
        <div id="path">
          <div className="path-indicator"></div>
          <div className="path-indicator"></div>
          <div className="path-indicator"></div>
        </div>      
      </header>
    )
}