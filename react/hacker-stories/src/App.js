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
const initialStories = [
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

// const storiesReducer = (state, action) => {
//   if (action.type === 'SET_STORIES') {
//     return action.payload
//   } else if (action.type === 'REMOVE_STORY') {
//     return state.filter(
//       story => action.payload.objectID !== story.objectID
//     )
//   } else {
//     throw new Error()
//   }
// }

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STORIES':
      return action.payload;
    case 'REMOVE_STORY':
      return state.filter(
        story => action.payload.objectID !== story.objectID
      );
    default:
      throw new Error();
  }
};

const getAsyncStories = () => 
  new Promise (resolve => 
    setTimeout(
      () => resolve ({data: {stories: initialStories}}),
      2000
    )
  )

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState)

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

const List = ({list, onRemoveItem}) =>
  list.map(item => 
    <Item 
      key={item.objectID} 
      item={item} 
      onRemoveItem={onRemoveItem}
    />
    )

// const Item = ({item, onRemoveItem}) => {
//   function handleRemoveItem() {
//     onRemoveItem(item)
//   }
//   return (
//     <div>
//       <span>
//          <a href={item.url}>{item.title}</a>
//        </span>
//        <span>{item.author}</span>
//        <span>{item.num_comments}</span>
//        <span>{item.points}</span>

//        <span>
//          <button type="button" onClick={handleRemoveItem}>
//            Dismiss
//          </button>
//        </span>
//     </div>
//   )
// }

// Dismiss using inline handler with JS bind method
// const Item = ({item, onRemoveItem}) => (
//     <div>
//       <span>
//          <a href={item.url}>{item.title}</a>
//        </span>
//        <span>{item.author}</span>
//        <span>{item.num_comments}</span>
//        <span>{item.points}</span>

//        <span>
//          <button type="button" onClick={onRemoveItem.bind(null, item)}>
//            Dismiss
//          </button>
//        </span>
//     </div>
//   )

const Item = ({item, onRemoveItem}) => (
  <div>
    <span>
       <a href={item.url}>{item.title}</a>
     </span>
     <span>{item.author}</span>
     <span>{item.num_comments}</span>
     <span>{item.points}</span>

     <span>
       <button type="button" onClick={() => onRemoveItem(item)}>
         Dismiss
       </button>
     </span>
  </div>
)

  // const Search = ({search, onSearch}) => (
  //   <div>
  //       <label htmlFor="search">Search: </label>
  //       <input 
  //       id="search" 
  //       type="text" 
  //       value={search}
  //       onChange={onSearch}/>
  //     </div>
  // )

    const InputWithLabel = ({id, label, value, type="text", onInputChange, isFocused, children}) => {
      const inputRef = React.useRef()

      React.useEffect(() => {
        if(isFocused && inputRef.current) {
          inputRef.current.focus()
        }
      }, [isFocused])
      return (
    <>
        <label htmlFor={id}>{children} </label>
        <input 
        ref={inputRef}
        id={id} 
        type={type} 
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}/>
    </>
  )}


const App = () => {

  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search', 
    'React'
  )

  // const [stories, setStories] = React.useState([])
  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    []
  );
  const [isLoading, setIsLoading] = React.useState(false)

  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    
    getAsyncStories()
    .then(result => {
      dispatchStories({
        type: 'SET_STORIES',
        payload: result.data.stories,
      });
      setIsLoading(false);
    })
    .catch(() => setIsError(true));
}, []);
  
  const handleRemoveStory = item => {
    dispatchStories({
      type: 'SET_STORIES',
      payload: item,
    })
  }
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
      {/* <Search search={searchTerm} onSearch={handleSearch}/> */}

      <InputWithLabel 
        id="search"
        label="Search"
        value={searchTerm}

        isFocused

        onInputChange={handleSearch}
      > 
        <strong>Search: </strong>
      </InputWithLabel>
      <hr />
      
      {isError && <p>Something went wrong...</p>}
      
      {isLoading ? (
        <p>Loading...</p>
        ) : (
          <List 
            list={searchedStories} 
            onRemoveItem={handleRemoveStory}/>
      )}
      

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
