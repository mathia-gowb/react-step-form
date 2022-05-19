
import { ActionButtons } from "./action-buttons";
import { Form } from "./forms";

export function InputFormContainer(props){

    return (
        <div className="form-wrapper">
        <div className="form-header">
        {props.stepName}
        </div>
        <Form formInfo={props.formInfo} formStep={props.formStep}></Form>
        <ActionButtons/>

      </div>
    )
}