import { ActionButtons } from "./action-buttons";
import { Form1, Form2, Form3 } from "./forms";

export function InputFormContainer(props){
    return (
        <div className="form-wrapper">
        <div className="form-header">
        {props.stepName}
        </div>
        <Form2/>
        <ActionButtons/>

      </div>
    )
}