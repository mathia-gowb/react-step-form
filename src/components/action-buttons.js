export function ActionButtons(props){
    return (
        <div className="form-buttons " id={`step-${props.stepNumber}`}>
            <button className="back-button" onClick={props.handleBack}>Back</button>
            <button className="foward-button" onClick={props.handleNext}>Continue</button>
        </div>
    )
}