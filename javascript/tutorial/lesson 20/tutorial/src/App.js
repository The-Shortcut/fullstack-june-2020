import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  let users = [
    {name: 'Pete', isDeveloper: true},
    {name: 'John', isDeveloper: false}
  ]

const showUsers = false

return ( 
  <div>
    {showUsers ? (
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    ) : null}
  </div>
)
// if(!showUsers) {
//   return null
// }

// return (
//   <ul>
//     {user
//     //.filter(user => user.isDeveloper)
//     .map(user => <li>{user.name}</li>
//     )}
//   </ul>
// )
}


export default App;
