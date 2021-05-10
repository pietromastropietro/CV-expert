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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eduComponents: [{ id: 0 }],
      workComponents: [{ id: 50 }],
    }
  }

  addEduComponent = () => {
    this.setState({
      // this concatenates a new 'id' object to the 'eduComponents' array.
      // To assign the new id, I get the id of the last object in the array (with '[this.state.eduComponents.length - 1].id') and add 1.
      eduComponents: this.state.eduComponents.concat({ id: this.state.eduComponents[this.state.eduComponents.length - 1].id + 1 }),
    })
  };

  addWorkComponent = () => {
    this.setState({
      workComponents: this.state.workComponents.concat({ id: this.state.workComponents[this.state.workComponents.length - 1].id + 1 }),
    })
  };

  removeEduComponent = (componentId) => {
    // I filter the 'eduComponents' array to create a new 'components' array with all the 'id' objects 
    // of 'eduComponents' expect the one I want to delete.
    const components = this.state.eduComponents.filter(component => component.id !== componentId);
    // Then I assign this new array to 'eduComponents'. Changing the state makes the page re-render with 
    // the new components.
    this.setState({
      eduComponents: components,
    });
  };

  removeWorkComponent = (componentId) => {
    const components = this.state.workComponents.filter(component => component.id !== componentId);
    this.setState({
      workComponents: components,
    });
  };

  render() {
    return (
      <div id='main'>

        <Header />
        <div id='resume'>
          <div id='backgroundShape'></div>

          <div id='personalInfo'>
            <Name />
            <Photo />
            <Contacts />
            <Profile />
          </div>

          <div id='skills'>
            <div id='eduSection'>
              <p id='educationTitle'>Education</p>

              {this.state.eduComponents.map(component => (
                <Education
                  key={component.id}
                  id={component.id}
                  removeComponent={this.removeEduComponent}
                />
              ))}

              <button onClick={this.addEduComponent}>Add Education</button>
            </div>

            <div id='workSection'>
              <p id='experienceTitle'>Experience</p>

              {this.state.workComponents.map(component => (
                <Work
                  key={component.id}
                  id={component.id}
                  removeComponent={this.removeWorkComponent}
                />
              ))}

              <button onClick={this.addWorkComponent}>Add Work</button>
            </div>

          </div>

        </div>
      </div>
    );
  }
};

export default App;
