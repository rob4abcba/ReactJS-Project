import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Message from './components/Message';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    todos: [
      {
        id: 1,
        title: 'Take out the garbage',
        completed: false
      },
      {
        id: 2,
        title: 'Eat dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Do taxes',
        completed: false
      }
    ]
  };
}
  render() {
  return (
    <div className="App">
      <Message />
      <Todos />
    </div>
  );
  }
}

export default App;
