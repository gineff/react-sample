/**
 * Created by Андрей on 25.05.2016.
 */
import React, {Component} from 'react';
import TextInput from './TextInput';

export  default class Header extends Component {
  handleSubmit(text){
    this.props.addTodo(text);
  }
  render() {
    return (<header className="header">
      <h1>Todos</h1>
      <TextInput onSubmit={this.handleSubmit.bind(this)}/>
    </header>)
  }
}




