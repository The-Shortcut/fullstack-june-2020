import React from 'react'
import { StyledItem, StyledColumn } from './App'
import { ReactComponent as Check} from './check.svg'


const List = ({ list, onRemoveItem }) =>
  list.map(item => (
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
    />
  ));

const Item = ({ item, onRemoveItem }) => (
  <StyledItem>
    <StyledColumn width="40%">
      <a href={item.url}>{item.title}</a>
    </StyledColumn>
    <StyledColumn width="30%">{item.author}</StyledColumn>
    <StyledColumn width="10%">{item.num_comments}</StyledColumn>
    <StyledColumn width="10%">{item.points}</StyledColumn>
    <StyledColumn width="10%">
      <button 
        type="button" 
        onClick={() => onRemoveItem(item)}
        >
          <Check height="18px" width="18px" />
      </button>
    </StyledColumn>
  </StyledItem>
);

export default List