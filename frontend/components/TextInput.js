/**
 * Created by Андрей on 25.05.2016.
 */
var React = require('react');

export default React.createClass({
  getInitialState: function () {
    return {text: this.props.text || ''}
  },
  handleChange: function (e) {
    var text = e.target.value;
    if(e.keyCode ==! 13) return;

    this.props.onSubmit(text);
    if(this.props.newTodo) this.setState({text: ''})
  },
  render: function () {
    return (<input
      value={this.state.text}
      onKeyDown= {this.handleChange}
    />)
  }
})