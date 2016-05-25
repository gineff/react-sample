/**
 * Created by Андрей on 25.05.2016.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'

class App extends Component {
  render() {
    const {todos, actions} = this.props;
    return <div>
      <Header actions={actions.addTodo}/>
    </div>
  }
}




function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
