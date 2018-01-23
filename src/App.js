import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './components/Todolist';
import {Todoitem} from './components/Todoitem';

class App extends Component {
  render() {
    return (
      <div>
        <Todolist />
        <Todoitem />
      </div>
    );
  }
}

export default App;
