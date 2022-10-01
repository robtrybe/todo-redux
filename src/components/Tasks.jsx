import React, { Component } from "react";
import { connect } from 'react-redux';

class Tasks extends Component {

  render() {
    const { tasks } = this.props;
    return(
      <>
      <ol>
      { tasks.map((texto,index) => <li key={ index }>{ texto }</li>) }
      </ol>
      </>
    )
  }
}

const mapStateToProps = (state) => ({tasks:state.tasks})

export default connect(mapStateToProps)(Tasks);