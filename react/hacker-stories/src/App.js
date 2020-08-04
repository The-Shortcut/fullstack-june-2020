import React from 'react';
import logo from './logo.svg';
import './App.css';

const title = 'React'
// const welcome = {
//   greeting: 'Hey',
//   title: 'React'
// }

// function getTitle(title) {
//   return title
// }

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const List = () => {
  return list.map(item => {
    return( 
    <div key={item.objectID}>
     <span>
       <a href={item.url}>{item.title}</a>
     </span>
     <span>{item.author}</span>
     <span>{item.num_comments}</span>
     <span>{item.points}</span>
    </div>)
    })
}


const App = () => {
  const handleChange = event => {
    console.log(event.target.value)
  }
  return (

    // do something in between 
    <div>
      <h1>
       {/* {welcome.greeting} {welcome.title} */}
       {/* Hello {getTitle('React')} */}
       My Hacker Stories
      </h1>

      <hr />

      <List />

      {/* Created a separate list component */}
      {/* {list.map(function(item) {
        return( 
        <div key={item.objectID}>
         <span>
           <a href={item.url}>{item.title}</a>
         </span>
         <span>{item.author}</span>
         <span>{item.num_comments}</span>
         <span>{item.points}</span>
        </div>)
      })} */}

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
