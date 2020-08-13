import React, { useState } from 'react';
import Quotes from './QuotesDatabase';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState(Quotes[0].quote)
  const [author, setAuthor] = useState(Quotes[0].author)

  const handleClick = () => {
    console.log('Button Click')
    const rand =Math.floor(Math.random()* Quotes.length)
    console.log('Random Number is ', rand)
    setQuote(Quotes[rand].quote)
    setAuthor(Quotes[rand].author)
  }
 
  
  return(
    <div className="container">
        <div className="wrappers w3-animate-top">
          <p className="quote">{quote}</p>
          {author ? <p className="author">- {author}</p> : <p className="author">- Unknown</p>}
        </div>
        <button className="button-main" onClick={handleClick}>Generate Quote</button>
    </div>
  )
}

export default App;
