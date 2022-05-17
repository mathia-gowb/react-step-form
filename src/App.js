import logo from './logo.svg';
import './App.css';
import { globalColors } from './global-colors';

function App() {
  return (
    <div className="App" style={globalStyle}>
      <header>
        <div id="check-point">
          <div class="check-point-item">
            <h2>Names</h2>
            <div class="icon-container">
              <i class="fa-solid fa-circle-check" style={{color:globalColors.purpleLight}}></i>
            </div>
          </div>
          <div class="check-point-item">
            <h2>Contact Info</h2>
            <div class="icon-container">
              <i class="fa-solid fa-circle-check" style={{color:globalColors.purpleLight}}></i>
            </div>
          </div>
          <div class="check-point-item">
            <h2>Addres</h2>
            <div class="icon-container">
              <i class="fa-solid fa-circle-check" style={{color:globalColors.purpleLight}}></i>
            </div>
          </div>
          <div class="check-point-item">
            <h2>Complete</h2>
            <div class="icon-container">
              <i class="fa-solid fa-circle-check" style={{color:globalColors.purpleLight}}></i>
            </div>
          </div>
        </div>
        <div id="path">
          <div class="path-indicator"></div>
          <div class="path-indicator"></div>
          <div class="path-indicator"></div>
        </div>      
      </header>
      <div class="form-wrapper">
        <div class="form-header">
          Names
        </div>
{/*         <form>
          <label>First Name</label>
          <br/>
          <input required />
          <br/>
          <br/>
          <label>First Name</label>
          <br/>
          <input required/>
        </form> */}
        <div class="final-info">
          <h1>please verify your info before submiting</h1>
          <ul class="final-info-list">
              <li><p class="info-title">First Name :</p><p class="info-detail">Name</p></li>
              <li><p class="info-title">First Name : </p><p class="info-detail">Name</p></li>
              <li><p class="info-title">First Name : </p><p class="info-detail">Name</p></li>
              <li><p class="info-title">First Name : </p><p class="info-detail">Name</p></li>
              <li><p class="info-title">First Name : </p><p class="info-detail">Name</p></li>
          </ul>
        </div>
        <div class="form-buttons " id="step-1">
          <button class="back-button">Back</button>
          <button class="foward-button">Continue</button>
        </div>
      </div>
    </div>
  );
}

const globalStyle={
  background:globalColors.gradient,
}
export default App;
