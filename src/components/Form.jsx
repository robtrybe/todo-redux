import React, { Component } from 'react'
import '../styles/Form.css';
import { ImAddressBook } from 'react-icons/im';
import { MdEditNote } from 'react-icons/md';

class Form extends Component {
  render() {
    return (
      <>
        <h1>Lista de Tarefas</h1>
        <form className="form-task content">
        <input type="text" name="task" placeholder='Adicione um tarefa' />
        <button type="button"><ImAddressBook /></button>
        <button type="button" className='edit'><MdEditNote /></button>
        </form>
      </>
    )
  }
}

export default Form;
