import React from 'react';
import { Container } from 'reactstrap'
import Routes from './routes'
import './App.css';
import { ContextWrapper } from './user-context';

function App() {
  return (
    <ContextWrapper>
      <Container>
        <h1>Best Fitness Events</h1>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </ContextWrapper>
  );
}

export default App;
