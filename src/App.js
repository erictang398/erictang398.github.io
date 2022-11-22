import './App.css'
import './Animation.css'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div style={{width: '100%', height: '100%', position: 'absolute'}}> 
      <NavBar style={{zIndex: '100'}}>
      </NavBar>
      <div class="animation">
      </div>
      <div class="box">
        <ul>
          <li></li><li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
