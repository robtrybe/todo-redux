import React, { Component } from 'react'
import '../styles/Form.css';
import { ImAddressBook } from 'react-icons/im';

class Form extends Component {
  render() {
    return (
      <>
        <h1>Lista de Tarefas</h1>
        <form className="form-task content">
        <input type="text" name="task" />
        <button type="button"><ImAddressBook /></button> 
        </form>
      </>
    )
  }
}

export default Form;
