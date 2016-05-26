/**
 * Created by Андрей on 25.05.2016.
 */
var React = require('react');
import classnames from 'classnames';

export default React.createClass({
  getInitialState: function () {
    return {text: this.props.text || ''}
  },
  handleSubmit: function (e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSubmit(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  },
  handleChange(e) {
    this.setState({ text: e.target.value })
  },
  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSubmit(e.target.value)
    }
  },
  render: function () {
    return (<input
      className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
      type="text"
      placeholder={this.props.placeholder}
      autoFocus="true"
      value={this.state.text}
      onBlur={this.handleBlur}
      onChange={this.handleChange}
      onKeyDown={this.handleSubmit}
    />)
  }
})