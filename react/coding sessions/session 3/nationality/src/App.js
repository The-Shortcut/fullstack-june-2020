import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import lookup from 'country-code-lookup';


const App = () => {
  const [result, setResult] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(()=>{
    fetchingData()
  },[name])

  //pending fulfilled rejected
  const fetchingData =  async ()=>{
      if(name){
    const data = await axios.get(`https://api.nationalize.io?name=${name}`)
    console.log('data is ', data)
    setResult(data.data.country)
    console.log('result is ', data.data.country)
    }else{
      console.log('No name to fetch')
    }
  }

  const handleClick = () => {
    setError('')
    console.log('button clicked')
    console.log('Country names ', result)
    const value = document.getElementById('input-box').value
    if(value){
      setName(document.getElementById('input-box').value)
    }else{
      setError('Please enter a name.')
    }
   
  document.getElementById('input-box').value = ''
  }

  return(
    <div className="container">
      <h1>Predict the nationality by entering the name...</h1>
      <hr/>
      <div className="wrapper">
        <input type="text" placeholder="please enter name..." id="input-box" required/>
        <button onClick={handleClick}>Check Nationlaity</button>
      </div>
      
      <Display  result={result} error={error}/>
  
      
    </div>
  )
}

const Display = ({error, result}) =>{
  return(
    <div className="display-country">
      {result && (result.length >0 ? 
      result.map((r, i)=> <ConvertToCountry key={i} r={r}/>)
      :
      <p>No result found</p>
           
          )}
        {error && <p className="error">{error}</p>}

    </div>
  )
}
const ConvertToCountry = ({ r}) => {
  const res = lookup.byIso(r.country_id)
  console.log('res is country name ', res.country)
  const prob = r.probability.toFixed(2);
  console.log('new prob ', prob)
  return(
    <div className="Result">
      <p>{res.country} {prob}</p>
    </div>
  )
}
export default App;
