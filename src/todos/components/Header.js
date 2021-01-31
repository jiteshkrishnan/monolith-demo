import React, {  Component } from 'react'
import TodoTextInput from './TodoTextInput'
import PropTypes from 'prop-types'

export default class Header extends Component {

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="What needs to be done?" />
      </header>
    )
  }
}
  Header.propTypes = {
    addTodo: PropTypes.func.isRequired
  }