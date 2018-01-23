import React, { Component } from 'react';

export class Todoitem extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    let task = '';

    if (this.props.task) {
      task = this.props.task.map((item) => <li>{item.title}</li>)
    }

    return (
      <div>
        <ul>
          {task}
        </ul>
      </div>
    );
  }
}
