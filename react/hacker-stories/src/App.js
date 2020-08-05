import React from 'react';
import './App.css';

// const title = 'React'
// const welcome = {
//   greeting: 'Hey',
//   title: 'React'
// }

// function getTitle(title) {
//   return title
// }

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState)

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

const List = ({list}) =>
  list.map(item => <Item key={item.objectID} item={item} />)

const Item = ({item}) => (
  <div>
    <span>
       <a href={item.url}>{item.title}</a>
     </span>
     <span>{item.author}</span>
     <span>{item.num_comments}</span>
     <span>{item.points}</span>
  </div>
)

// const Search = props => {
//   const {search, onSearch} = props
//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input 
//       id="search" 
//       type="text" 
//       value={search}
//       onChange={onSearch}/>
//     </div>
//   )}

  const Search = ({search, onSearch}) => (
    <div>
        <label htmlFor="search">Search: </label>
        <input 
        id="search" 
        type="text" 
        value={search}
        onChange={onSearch}/>
      </div>
  )

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search', 
    'React'
  )
  
  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (

    // do something in between 
    <div>
      <h1>
       {/* {welcome.greeting} {welcome.title} */}
       {/* Hello {getTitle('React')} */}
       My Hacker Stories
      </h1>
      <Search search={searchTerm} onSearch={handleSearch}/>
      <hr />

      <List list={searchedStories}/>

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
    </div>
  );
}

export default App;
