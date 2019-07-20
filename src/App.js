import React from 'react';
import Todos1 from './components/Todos1';
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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo';
import Todos2 from './Todos2';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos1: [
  //       {
  //         id: 1,
  //         title: 'Take out the garbage',
  //         completed: false
  //       },
  //       {
  //         id: 2,
  //         title: 'Eat dinner',
  //         completed: false
  //       },
  //       {
  //         id: 3,
  //         title: 'Do taxes',
  //         completed: false
  //       }
  //     ]
  //   };
  // }

  state = {
    todos2: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Play Mario'}
    ]
  }
  deleteTodo = (id) => {
    // console.log(id);
    const todos2 = this.state.todos2.filter(todo2 => {
      return todo2.id !== id
    })
    this.setState({
      todos2: todos2
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos2 todos2={this.state.todos2} deleteTodo={this.deleteTodo}/>
        <PortalDemo />
        <FRParentInput />
        <FocusInput />
        <RefsDemo />
        {/* <ParentComp /> */}
        <Table />
        <FragmentDemo />
        {/* <LifecycleA /> */}
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
        <Todos1 />
      </div>
    );
  }
}

export default App;
