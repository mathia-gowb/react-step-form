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
    </div>
  );
}

const globalStyle={
  background:globalColors.gradient,
}
export default App;
