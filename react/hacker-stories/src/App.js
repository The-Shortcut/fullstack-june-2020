import React from 'react';
import axios from 'axios'

import styled from 'styled-components'

import searchTerm from './SearchForm'
import List from "./List";

import { ReactComponent as Check} from './check.svg'


// import styles from './App.module.css'
// import cs from 'classnames'

// const initialStories = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

// A to fetch popular tech stories for a certain query
const API_ENDPOINT = 'http://hn.algolia.com/api/v1/search?query='


// const getAsyncStories = () =>
//   new Promise((resolve, reject) => setTimeout(reject, 2000) );

// Styled components
const StyledContainer = styled.div` 
height: 100vw;
padding: 20px;

background: #83a4d4;
background: linear-gradient(to left, #b6fbff, #83a4d4);

color: #171212`

const StyledHeadlinePrimary = styled.h1`
font-size: 45px;
font-weight: 300;
letter-spacing: 2px;
`

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`
const StyledColumn = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
  color: inherit;
  }

  width: ${props => props.width}
`

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  transition: all 0.1s ease-in;

  &:hover >svg > g {
  fill: #ffffff;
  stroke: #ffffff;
  }
`

const StyledButtonSmall = styled(StyledButton)`
  padding: 5px;
`

const StyledButtonLarge = styled(StyledButton)`
  padding: 10px;
`

const StyledSearchForm = styled.form`
  padding: 10px 0 20px 0;
  display: flex;
  align-items: baseline;
`

const StyledLabel = styled.label`
  border-top: 1px solid #171212;
  border-bottom-style: 1px solid #171212;
  padding-left: 5px;
  font-size: 24px;
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #171212;
  background-color: transparent;
  font-size: 24px;
`

// Function for app 

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
      isLoading: true,
      isError: false,
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
      isLoading: false,
      isError: false,
      data: action.payload,
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
      isLoading: false,
      isError: true,
      }
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          story => action.payload.objectID !== story.objectID
        )
      }
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );

  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${searchTerm}`
  )

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false , isError: false }
  );
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [isError, setIsError] = React.useState(false);

  // const handleFetchStories = React.useCallback(() => {
  //   dispatchStories({type: 'STORIES_FETCH_INIT'});

  //   fetch(url) // native browser's fetch API to make request
  //     .then(response => response.json()) // Translating into JSON

  //     .then(result => {
  //       dispatchStories({
  //         type: 'STORIES_FETCH_SUCCESS',
  //         payload: result.hits
  //       })
  //     })

  //     .catch(() => 
  //       dispatchStories({type: 'STORIES_FETCH_FAILURE'})
  //     )
  //   }, [url])

  const handleFetchStories = React.useCallback(async() => {
    dispatchStories({type: 'STORIES_FETCH_INIT'})

    try {
      const result = await axios.get(url)
      .then(result => {
        dispatchStories({
          type: 'STORIES_FETCH_SUCCESS',
          payload: result.data.hits
        })
      })

    } catch {
      dispatchStories({type: 'STORIES_FETCH_FAILURE'})
    }
  }, [url])
 
  React.useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchInput = event => {
    setSearchTerm(event.target.value)
  }

  const handleSearchSubmit = event => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }

  return (
    <StyledContainer>
      <StyledHeadlinePrimary>My Hacker Stories</StyledHeadlinePrimary>

      <SearchForm
        searchTerm = {searchTerm}  
        onSearchInput = {handleSearchInput}
        onSearchSubmit = {handleSearchSubmit}
      />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List
          list={stories.data}
          onRemoveItem={handleRemoveStory}
        />
      )}
    </StyledContainer>
  );
};

export default App;
export { storiesReducer, SearchForm, InputWithLabel, List, Item }
