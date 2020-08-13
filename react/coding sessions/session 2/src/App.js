import React, { useState } from 'react';
import quotes from './QuotesDatabase';
import './App.css';
const App = () => {

const [quote, setQuote] = useState(quotes[0].quote)
const [author, setAuthor] = useState(quotes[0].author)

  const randomNumber = () => {
    const random =Math.floor(Math.random()*quotes.length)
    console.log('random num ', random)

    setQuote(quotes[random].quote)
    setAuthor(quotes[random].author)
  }
  
return (
 
  <div className='container'>
    <div className="wrapper">
    <p className="quote">{quote}</p>
    <p className="author">- {author? author : 'Unknown'}</p>
    <button onClick={randomNumber}>Generate Quote</button>
    </div>
  </div>
)
}


export default App;
