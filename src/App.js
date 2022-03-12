import './App.css';

import {useState} from 'react';
import Homepage from './pages/home/Homepage';
function App() {

  const [ lightMode, setLightMode ] = useState(false)

  return (
    <div className="App">
      <button onClick={()=>setLightMode(prev => !prev)}>Toogle</button>
      <Homepage lightMode={lightMode}/>
    </div>
  );
}

export default App;
