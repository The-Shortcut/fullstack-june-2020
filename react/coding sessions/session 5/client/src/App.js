import React,{ useEffect, useState} from 'react';
import './App.css';
import AddSkill from './components/AddSkill';
import skillServices from './services/skills'

const App = () => {
 const [skills, setSkills] = useState(null)
  
  useEffect(() => {
   skillServices.getAll().then(result => setSkills(result))
  }, [skills])

  return (
    <div className="App">
      <h1>my skills app</h1>
      <AddSkill skills={skills} />
    </div>
  );
}

export default App;
