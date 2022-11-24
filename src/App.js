import './App.css'
import React, {useState} from 'react'
import NavBar from './components/navBar.jsx'
import Animation from './components/animation.jsx'
import Body from './components/body.jsx'

function App() {
  const [colourful, setColourful] = useState(false)
  return (
    <div style={{width: '100%', height: '200vh', position: 'absolute'}}> 
      <NavBar colourful={colourful} setColourful={setColourful}/>
      <Animation/>
      <Body colourful={colourful}/>
    </div>
  );
}

export default App;
