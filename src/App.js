import './App.css'
import NavBar from './components/navBar.jsx'
import Animation from './components/animation.jsx'
import Body from './components/body.jsx'

function App() {
  return (
    <div style={{width: '100%', height: '200vh', position: 'absolute'}}> 
      <NavBar/>
      <Animation/>
      <Body/>
    </div>
  );
}

export default App;
