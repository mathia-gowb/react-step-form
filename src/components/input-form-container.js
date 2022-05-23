
import { ActionButtons } from "./action-buttons";
import { FinalInfo } from "./final-info";
import { Form } from "./forms";


export function InputFormContainer(props){
    
    return (
      <div className="form-wrapper">
        <div className="form-header">
        {props.stepName}
        </div>
        {
          props.stepNumber<3?
          <Form handleInput={props.handleInput} formInfo={props.formInfo} formStepId={props.formStepId}></Form>:
          <FinalInfo formInfo={props.formInfo}/>
        }
        <ActionButtons handleBack={props.handleBack} handleNext={props.handleNext} stepNumber={props.stepNumber}/>

      </div>
    )
}