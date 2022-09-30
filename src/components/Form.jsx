import React from "react";
const pessoa = 'Robson';

class Form extends React.Component {
  render() {
    return(
      <form>
        <input type="text" name="taskAdd"></input>
        <button type="button">Adicionar</button>
      </form>
    )
  }
}

export default Form;