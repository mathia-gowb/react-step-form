export function Form(props){
  let currentForm;
   switch (props.formStep) {
    case "contact-info":
      /* makes the currentForm be the contact info form */
      currentForm= (
        <form onChange={props.handleInput} id="active-form">
        <label>Email</label>
        <br/>
        <input id="email" type="text"required  defaultValue={props.formInfo.email}/>
        <br/>
        <br/>
        <label>Phone Number</label>
        <br/>
        <input id="phoneNumber" type="number" required defaultValue={props.formInfo.phoneNumber}/>
        <br/>
        <br/>
        <label>Telephone Number</label>
        <br/>
        <input id="telephoneNumber" type="number"required defaultValue={props.formInfo.telePhoneNumber}/>
      </form> 
    );
    break;
   
    case "address":
      /* makes currentForm become the addressform */
      currentForm = (
        <form onChange={props.handleInput} id="active-form">
        <label>City</label>
        <br/>
        <input id="city" required defaultValue={props.formInfo.city}/>
        <br/>
        <br/>
        <label>Street Address</label>
        <br/>
        <input id="streetAddress"required defaultValue={props.formInfo.streetAddress}/>
      </form> 
    );
    break;

    default:
      /* outputs the names form which is the first form */
      currentForm = (
        <form onChange={props.handleInput} id="active-form">
        <label>First Name</label>
        <br/>
        <input id="firstName"required defaultValue={props.formInfo.firstName}/>
        <br/>
        <br/>
        <label>Last Name</label>
        <br/>
        <input id="lastName" required defaultValue={props.formInfo.lastName}/>
      </form> 
    );
    break
  }
  return currentForm
}
