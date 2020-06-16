import React from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import ConnectedTodos from "todos"
import ConnectedGoals from "goals"

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    if (this.props.loading) {
      return <h3>Loading data...</h3>
    }
    return (
      <div>
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
