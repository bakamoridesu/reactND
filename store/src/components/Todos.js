import React from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodo
} from "../actions/todos"
import List from "./List";

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(this.input.value, () => {
      this.input.value = ''
    }))
  }
  removeItem = (todo) => {
    this.props.dispatch(handleRemoveTodo(todo))
  }
  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }

  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <input
          type='text'
          placeholder='Add todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add TODO</button>
        <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)