export function ActionButtons(props){
    const fowardButtonType=props.stepNumber>=3?<button className="foward-button" onClick={props.handleNext} >Submit Info</button>:<button className="foward-button" onClick={props.handleNext}>Continue</button>
        return (
            <div className={`form-buttons ${props.stepNumber>=4?"form-complete":""}`} id={`step-${props.stepNumber}` }>
                <button className="back-button" onClick={props.handleBack}>Back</button>
                {fowardButtonType}
            </div>
        )
}