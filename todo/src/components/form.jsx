import React from 'react'
const { Component } = React;

class Form extends Component {
  render() {
    return (
      <form>
        <input type='text' name='task-add'></input>
        <button type="button">Adicionar</button>
      </form>
    )
  }
}

export default Form;