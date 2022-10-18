import React, { Component } from 'react'
import { TbEdit } from 'react-icons/tb';
import { MdDeleteForever } from 'react-icons/md';

class Tasks extends Component {
  render() {
    return (
      <div className="tasks-container content">
        <h2>Tarefas a realizar</h2>
        <div className="task-container">
          <div className="task">Tomar café</div>
          <div className="btn-container">
            <button type="button" className="edit"><TbEdit /></button>
            <button type="button" className='delete'><MdDeleteForever /></button>
          </div>
        </div>
        <div className="task-container">
          <div className="no-task">Nenhum tarefa a realizar no momento</div>
        </div>
      </div>
    )
  }
}

export default Tasks;
