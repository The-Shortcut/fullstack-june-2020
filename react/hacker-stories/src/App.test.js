import React from 'react';
import { 
  render,
  screen,
  fireEvent,
  act
} from '@testing-library/react';
import App, { storiesReducer, SearchForm, InputWithLabel, List, Item } from './App';

const storyOne = {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }

const storyTwo =  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }

const stories = [storyOne, storyTwo]

//// Test suites and test cases examples
// describe('App Component', () => {
//   it('removes an item when clicking the dismiss', () =>{

//   })

//   it('requests some initial stories from an API', () => {

//   })
// })

// describe('something truthy and falsy', () => {
//   test('true to be true', () => {
//     expect(true).toBeTruthy()
//   })

//   test('false to be false', () => {
//     expect(false).toBeFalsy()
//   })
// })

// // Function unit test with Jest
// describe('storiesReducer', () => {
//   test('removes a story from all stories', () => {
//     const action = { type: 'REMOVE_STORY', payload: storyOne}
//     const state = {data: stories, isLoading: false, isError: false}

//     const newState = storiesReducer(state, action)

//     const expectedState = {data: [storyTwo], 
//       isLoading: false, 
//       isError: false
//     }

//     expect(newState).toStrictEqual(expectedState)
//   })
// })

// // Item component unit test
// describe('Item', () => {
//   test('renders all properties' ,() => {
//     render(<Item item={storyOne} />)

//     expect(screen.getByText('Jordan Walke')).toBeInTheDocument()
//     expect(screen.getByText('React')).toHaveAttribute(
//       'href',
//       'https://reactjs.org/' 
//     )
//   })

//   // test('renders a clickable dismiss button', () => {
//   //   render(<Item item={storyOne} />)

//   //   expect(screen.getByRole('span').toBeInTheDocument())
//   // })

//   test('clicking the dismiss button calls callback handler', () => {
//     const handleRemoveItem = jest.fn()

//     render(<Item item={storyOne} onRemoveItem={handleRemoveItem} />)

//     fireEvent.click(screen.getByRole('button'))

//     expect(handleRemoveItem).toHaveBeenCalledTimes(1)
//   })
// })

// SearchFrom component using InputWithLabel as child component
describe('SearchForm', () => {
  const searchFormProps = {
    searchTerm: 'React',
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn()
  }

  test('renders the input field with its value', () => {
    render(<SearchForm {...searchFormProps} />)

    expect(screen.getByDisplayValue('React')).toBeInTheDocument()
  })

  test('renders the correct label', () => {
    render(<SearchForm {...searchFormProps } />)

    expect(screen.getByLabelText(/Search/)).toBeInTheDocument()
  })

  test('calls onSearchInput on the input field change', () => {
    render(<SearchForm {...searchFormProps} />)

    fireEvent.change(screen.getByDisplayValue('React'), {
      target: {value: 'Redux'}
    })

    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1)
  })

  test('calls onSearchSubmit on button submit click', () => {
    render(<SearchForm {...searchFormProps} />)

    fireEvent.submit(screen.getByRole('button'))

    expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1)
  })

  test('renders snapshot', () => {
    const { container } = render(<SearchForm {...searchFormProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})