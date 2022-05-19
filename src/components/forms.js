export function Form(props){
  let currentForm;
   switch (props.formStep) {
    case "contact-info":
      /* makes the currentForm be the contact info form */
      currentForm= (
        <form>
        <label>Email</label>
        <br/>
        <input type="text"required  value={props.formInfo.email}/>
        <br/>
        <br/>
        <label>Phone Number</label>
        <br/>
        <input type="number"required value={props.formInfo.phoneNumber}/>
        <br/>
        <br/>
        <label>Telephone Number</label>
        <br/>
        <input type="number"required value={props.formInfo.telePhoneNumber}/>
      </form> 
    );
    break;
   
    case "address":
      /* makes currentForm become the addressform */
      currentForm = (
        <form>
        <label>City</label>
        <br/>
        <input required value={props.formInfo.city}/>
        <br/>
        <br/>
        <label>Street Address</label>
        <br/>
        <input required value={props.formInfo.streetAddress}/>
      </form> 
    );
    break;

    default:
      /* outputs the names form which is the first form */
      currentForm = (
        <form>
        <label>First Name</label>
        <br/>
        <input required value={props.formInfo.firstName}/>
        <br/>
        <br/>
        <label>Last Name</label>
        <br/>
        <input required value={props.formInfo.lastName}/>
      </form> 
    );
    break
  }
  return currentForm
}
