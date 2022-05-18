import logo from './logo.svg';
import './App.css';
import { globalColors } from './global-colors';
import { Header } from './components/header';
import {InputFormContainer } from './components/input-form-container';

function App() {
  return (
    <div className="App" style={globalStyle}>
      <Header/>
      <InputFormContainer/>
    </div>
  );
}

const globalStyle={
  background:globalColors.gradient,
}
export default App;
