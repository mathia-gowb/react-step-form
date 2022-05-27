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
  });
  const [formStep,setFormStep]=useState(0);
  const stepInfo=[
      {stepName:'Name',stepIdentifier:'name'},
      {stepName:'Contact Info',stepIdentifier:'contact-info'},
      {stepName:'address',stepIdentifier:'address'},
      {stepName:"Verify info",stepIdentifier:'verification'},
      {stepName:'Thank You!',stepIdentifier:"thank-you"}
    ];

  function handleNext(){
    setFormStep(prev=>prev+1);
    console.log('next')
  }
  function handleBack(){
    setFormStep(prev=>prev-1)
  }

  function handleInput({target}){
    setFormValues((prev)=>{
      return {...prev,[target.id]:target.value}
    })
  }


  return (
    <div className="App" >
      <Header stepNumber={formStep}/>
      <InputFormContainer 
        formInfo={formValues} 
        formStepId={stepInfo[formStep].stepIdentifier} 
        stepNumber={formStep}
        stepName={stepInfo[formStep].stepName} 
        handleInput={handleInput}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  );

}

export default App;
