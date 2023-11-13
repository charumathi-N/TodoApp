import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadInput  from './Component/ReadInput';

function App() {
  return (
    <Container>
      <h2>Todo</h2>
      <ReadInput/>
    </Container>
  );
}

export default App;
