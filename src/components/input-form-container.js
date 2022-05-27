
import { ActionButtons } from "./action-buttons";
import { FinalInfo } from "./final-info";
import { Form } from "./forms";


export function InputFormContainer(props){
    
    return (
      <div className={`form-wrapper ${props.formStepId==='thank-you'?"form-complete-wrapper":""}`}>
        <div className="form-header">
        {props.stepName}
        </div>

        {
          props.stepNumber<3?
          <Form handleInput={props.handleInput} formInfo={props.formInfo} formStepId={props.formStepId}></Form>:
          <FinalInfo formInfo={props.formInfo}/>
        } 
        <div class="steps-complete">
          <h3>Thank you for completing this form</h3>
          <i class="fa-solid fa-circle-check"></i>
        </div>
        {<ActionButtons handleBack={props.handleBack} handleNext={props.handleNext} stepNumber={props.stepNumber}/>}

      </div>
    )
}