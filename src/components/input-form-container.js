
import { ActionButtons } from "./action-buttons";
import { Form } from "./forms";


export function InputFormContainer(props){


    return (
        <div className="form-wrapper">
        <div className="form-header">
        {props.stepName}
        </div>
        <Form handleInput={props.handleInput} formInfo={props.formInfo} formStep={props.formStep}></Form>
        <ActionButtons handleBack={props.handleBack} handleNext={props.handleNext} stepNumber={props.stepNumber}/>

      </div>
    )
}