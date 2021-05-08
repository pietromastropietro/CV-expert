import React from "react";
import './styles/style.css';
import Header from './components/Header';
//import Page from './components/Page';
import Name from './components/Name';
import Photo from './components/Photo';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import Education from './components/Education';
import Work from './components/Work';


// TODO: fix the education and work components

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eduarr: [],
      eduComponentCount: 1,
      workComponentCount: 1,
      eduIdToRemove: '',
    }
  }

  addEduComponent = () => {
    this.setState({
      eduComponentCount: this.state.eduComponentCount + 1,
    })
  };

  addWorkComponent = () => {
    this.setState({
      workComponentCount: this.state.workComponentCount + 1,
    })
  };

  // deleteCompo = (e) => {
  //   console.log(e.target.parentElement.className);
  //   console.log(e.target.parentElement.id);

  //   this.setState({
  //     eduIdToRemove: e.target.parentElement.id,
  //   })

  // }

  render() {
    // const { eduSectionNum } = this.state;
    let eduComponents = [];
    let workComponents = [];
    
    function deleteCompo (e) {
      console.log(e.target.parentElement.className);
      console.log(e.target.parentElement.id);

      eduComponents.splice(e.target.parentElement.id, 1);
    };

    for (let i = 0; i < this.state.eduComponentCount; i++) {
      eduComponents.push(<Education key={i} id={i} deleteFunc={deleteCompo} />)
    };
    for (let i = 0; i < this.state.workComponentCount; i++) {
      workComponents.push(<Work key={i} id={i} />)
    }

    if (this.state.eduIdToRemove !== '') {
      eduComponents.splice(this.state.eduIdToRemove, 1);
    }

    // this.setState({
    //   eduIdToRemove: '',
    // });

    return (
      <div>
        <Header />
        <div id='page'>
          <div id='resume'>
            <Name />
            <Photo />
            <Contacts />
            <Profile />

            <h2 id='educationTitle'>Education</h2>
            {eduComponents}
            <button onClick={this.addEduComponent}>Add Education</button>

            <h2 id='experienceTitle'>Experience</h2>
            {workComponents}
            <button onClick={this.addWorkComponent}>Add Work</button>
          </div>
        </div>
      </div>
    );
  }
};


/*
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }
  
  getInput = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  addTask = (e) => {
    // so the page doesnt refresh when clickin submit btn
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      // reset the task
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.addTask}>
          <label htmlFor="taskInput">Write a task</label>
          <input
            // everytime the input field changes (the users inputs a char), this function gets called
            onChange={this.getInput}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
};
*/

export default App;
