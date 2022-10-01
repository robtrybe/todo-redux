import React from "react";
import { connect } from 'react-redux';
import { thunkTask } from '../redux/actions/index';

class Form extends React.Component {
  state = {
    taskAdd:'',
  }

  handlerChange = ({ target }) => {
    const { name , value} = target;
    this.setState({[name]: value});
  }

  render() {
    const { taskAdd } = this.state;
    const { dispatch } = this.props;
    return(
      <form>
        <input
          type="text"
          name="taskAdd"
          onChange={ this.handlerChange }
          value={ taskAdd }
          ></input>
        <button
          type="button"
          onClick={() => dispatch(thunkTask(taskAdd))}
          >Adicionar</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(Form);
