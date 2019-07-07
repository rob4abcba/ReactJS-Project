import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import MyGreet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'

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
        <LifecycleA />
        <Form />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline />
        <Stylesheet primary={true} />
        <NameList />
        <UserGreeting />
        <ParentComponent />
        <MyGreet name="Clark" heroName="Superman">
          <p>Optional p section</p>
        </MyGreet>
        <MyGreet name="Bruce" heroName="Batman">
          <button>Awesome button</button>
        </MyGreet>
        <Welcome name="Clark" heroName="Superman">
          <p>Optional p section</p>
        </Welcome>
        <Welcome name="Bruce" heroName="Batman" />
        <Hello />
        <Counter />
        <Message />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <Todos />
      </div>
    );
  }
}

export default App;
