import React, { Component } from "react";
import getTasks from '../services/tasksApi';

class Tasks extends Component {
  state = { 
    tasks: [],
  };

  componentDidMount() {
    const tasks = getTasks();
    this.setState({
      tasks,
    })
  }

  render() {
    const { tasks } = this.state;
    return(
      <>
      <ol>
      { tasks.map((texto) => <li>{ texto }</li>) }
      </ol>
      </>
    )
  }
}

export default Tasks;