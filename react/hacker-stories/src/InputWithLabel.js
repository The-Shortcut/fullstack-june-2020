import React from 'react'
import { StyledLabel, StyledInput } from './App'

const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    isFocused,
    children,
  }) => {
    const inputRef = React.useRef();
  
    React.useEffect(() => {
      if (isFocused) {
        inputRef.current.focus();
      }
    }, [isFocused]);
  
    return (
      <>
        <StyledLabel htmlFor={id}>{children}</StyledLabel> 
        &nbsp;
        <StyledInput
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}
        />
      </>
    );
  };

  export default InputWithLabel