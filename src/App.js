import React from "react";
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import UserImage from './components/UserImage';
import Contacts from './components/Contacts';
import Bio from './components/Bio';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eduComponents: [{ id: 0 }],
            expComponents: [{ id: 50 }],
        }
    }

    addEduComponent = () => {
        // if the user removes all the components, it will start from the beginning with id: 0.
        if (this.state.eduComponents.length === 0) {
            this.setState({
                eduComponents: this.state.eduComponents.concat({ id: 0 }),
            });
        } else {
            this.setState({
                // this concatenates a new 'id' object to the 'eduComponents' array.
                // To assign the new id, I get the id of the last object in the array (with '[this.state.eduComponents.length - 1].id') and add 1.
                eduComponents: this.state.eduComponents.concat({ id: this.state.eduComponents[this.state.eduComponents.length - 1].id + 1 }),
            });
        };
    };

    addExpComponent = () => {
        if (this.state.expComponents.length === 0) {
            this.setState({
                expComponents: this.state.expComponents.concat({ id: 50 }),
            });
        } else {
            this.setState({
                expComponents: this.state.expComponents.concat({ id: this.state.expComponents[this.state.expComponents.length - 1].id + 1 }),
            });
        };
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

    removeExpComponent = (componentId) => {
        const components = this.state.expComponents.filter(component => component.id !== componentId);
        this.setState({
            expComponents: components,
        });
    };

    render() {
        return (
            <>
                <Header />
                <div id='resume'>
                    <div id='backgroundShape'></div>
                    <div id='personalInfo'>
                        <GeneralInfo />
                        <UserImage />
                        <Contacts />
                        <Bio />
                    </div>

                    <div id='eduAndExpInfo'>
                        <div id='educationContainer'>
                            <p id='educationHeading'>Education</p>

                            {this.state.eduComponents.map(component => (
                                <Education
                                    key={component.id}
                                    id={component.id}
                                    removeComponent={this.removeEduComponent}
                                />
                            ))}

                            <button onClick={this.addEduComponent}>Add Education</button>
                        </div>

                        <div id='experienceContainer'>
                            <p id='experienceHeading'>Experience</p>

                            {this.state.expComponents.map(component => (
                                <Experience
                                    key={component.id}
                                    id={component.id}
                                    removeComponent={this.removeExpComponent}
                                />
                            ))}

                            <button onClick={this.addExpComponent}>Add Experience</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

export default App;
