import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTasksThunks, finishTaskThunk } from '../redux/actions/index';
import './Tasks.css';

class Tasks extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getTasksThunks());
  }

  render() {
    const { tasks, dispatch } = this.props;
    return(
      <>
      <ol>
      { tasks.map((task, index) => <li
        className="task"
        data-index={ index }
        key={ index }
        onClick={ (event) => dispatch(finishTaskThunk(event)) }
        >
        { task.name }
        <button
          type="button"
          onClick={() => console.log('Remover')}
          >x</button>
        </li>)
        }
      </ol>
      </>
    )
  }
}

const mapStateToProps = (state) => ({tasks:state.tasks})

export default connect(mapStateToProps)(Tasks);