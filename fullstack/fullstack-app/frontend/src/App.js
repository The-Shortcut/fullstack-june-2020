import React from 'react';
import Login from './pages/Dashboard'
import { Container } from 'reactstrap'
import Routes from './routes'
import './App.css';

function App() {
  return (
    <Container>
      <h1>Best Fitness Events</h1>
      <Routes />
    </Container>
  );
}

export default App;
