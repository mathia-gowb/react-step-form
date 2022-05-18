function Form1(){
    return (
        <form>
        <label>First Name</label>
        <br/>
        <input required />
        <br/>
        <br/>
        <label>First Name</label>
        <br/>
        <input required/>
      </form> 
    )
}
function Form2(){
    return (
        <form>
        <label>Email</label>
        <br/>
        <input type="text"required />
        <br/>
        <br/>
        <label>Phone Number</label>
        <br/>
        <input type="number"required/>
        <br/>
        <br/>
        <label>Telephone Number</label>
        <br/>
        <input type="number"required/>
      </form> 
    )
}
function Form3(){
    return (
        <form>
        <label>City</label>
        <br/>
        <input required />
        <br/>
        <br/>
        <label>Street Address</label>
        <br/>
        <input required/>
      </form> 
    )
}
export {Form1,Form2,Form3}