export function Form(props){
  console.log(props.formInfo,'ui was refresshed')
  let currentForm;
   switch (props.formStepId) {
    case "contact-info":
      /* makes the currentForm be the contact info form */
      currentForm= (
        <form onChange={props.handleInput} id="active-form">
        <label>Email</label>
        <br/>
        <input id="email" type="text"required  value={props.formInfo.email}/>
        <br/>
        <br/>
        <label>Phone Number</label>
        <br/>
        <input id="phoneNumber" type="number" required value={props.formInfo.phoneNumber}/>
        <br/>
        <br/>
        <label>Telephone Number</label>
        <br/>
        <input id="telephoneNumber" type="number"required value={props.formInfo.telephoneNumber}/>
      </form> 
    );
    break;
   
    case "address":
      /* makes currentForm become the addressform */
      currentForm = (
        <form onChange={props.handleInput} id="active-form">
        <label>City {props.formInfo.city}</label>
        <br/>
        <input id="city" required value={props.formInfo.city}/>
        <br/>
        <br/>
        <label>Street Address</label>
        <br/>
        <input id="streetAddress" required value={props.formInfo.streetAddress}/>
      </form> 
    );
    break;

    default:
      /* outputs the names form which is the first form */
      currentForm = (
        <form onChange={props.handleInput} id="active-form">
        <label>First Name</label>
        <br/>
        <input id="firstName"required value={props.formInfo.firstName}/>
        <br/>
        <br/>
        <label>Last Name</label>
        <br/>
        <input id="lastName" required value={props.formInfo.lastName}/>
      </form> 
    );
    break
  }
  return currentForm
}
