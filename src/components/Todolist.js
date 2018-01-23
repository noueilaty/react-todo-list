import React, { Component } from 'react';
import { Todoitem } from './Todoitem'

export class Todolist extends Component {

    constructor(props) {
      super(props)
      this.addTask = this.addTask.bind(this);
      this.state = {
        tasks: []
      }
    }

    addTask() {
      let tasks = this.state.tasks;
      tasks.push({
        title:this._inputElement.value
      })
      this.setState({
        tasks: tasks
      })
      this._inputElement.value = '';
    }

  render() {
    return (
      <div>
        <input type="text" ref={(a) => this._inputElement = a}></input>
        <button onClick={this.addTask}>Add</button>

        <Todoitem task={this.state.tasks}/>
      </div>
    );
  }
}
