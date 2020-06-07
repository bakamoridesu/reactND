import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddPanel from './AddPanel.js'
import DeletePanel from './DeletePanel.js'
import ShowItemsPanel from './ShowItemsPanel.js'
class App extends React.Component {
  state = {
    items: []
  };

  addItem = (value) => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<AddPanel addItem={this.addItem}/>
		<DeletePanel onDelete = {this.deleteLastItem} itemsFound={this.noItemsFound}/>
		<ShowItemsPanel items = {this.state.items}/>
      </div>
    );
  }
}

export default App;
