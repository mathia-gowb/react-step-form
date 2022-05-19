import {useState} from 'react';
import './App.css';
import { Header } from './components/header';
import {InputFormContainer } from './components/input-form-container';

function App() {
  const [formValues,setFormValues]=useState({
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      telephoneNumber:"",
      city:"",
      streetAddress:"",
  })
  return (
    <div className="App" >
      <Header/>
      <InputFormContainer formInfo={formValues} formStep={"names"} stepName={"Names"}/>
    </div>
  );

}

export default App;
