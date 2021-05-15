import React, { useState } from "react";
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import UserImage from './components/UserImage';
import Contacts from './components/Contacts';
import Bio from './components/Bio';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
    const [eduComponents, setEduComponents] = useState([{ id: 0 }]);
    const [expComponents, setExpComponents] = useState([{ id: 50 }])

    const addComponent = (e) => {
        // Use the id name of the 'add' button to know which component to add
        if (e.target.id === 'addEdu') {
            // if the user previously removed all the components, start again assigning
            // the default value to eduComponents (id: 0).
            if (eduComponents.length === 0) {
                setEduComponents([{ id: 0 }])
            } else {
                // Concatenate the new 'id' object to the 'eduComponents' array.
                // To get the new id, get the id of the last object in the array (with '[eduComponents.length - 1].id') and add 1.
                setEduComponents(
                    [...eduComponents, { id: eduComponents[eduComponents.length - 1].id + 1 }]
                );
            };
        } else {
            if (expComponents.length === 0) {
                setExpComponents([{ id: 50 }]);
            } else {
                setExpComponents(
                    [...expComponents, { id: expComponents[expComponents.length - 1].id + 1 }]
                );
            };
        }
    };

    const removeComponent = (componentId) => {
        // The ids of the 'expComponents' array start from 50, so by checking the id number I'm able to know 
        // if I'm working on the 'edu' or 'exp' array.
        if (componentId < 50) {
            // I filter the 'eduComponents' array to get a new version 
            // with all the previous 'id' objects except the one I want to delete.
            setEduComponents(
                eduComponents.filter(component => component.id !== componentId)
            );
        } else {
            setExpComponents(
                expComponents.filter(component => component.id !== componentId)
            );
        }
    };

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

                        {eduComponents.map(component => (
                            <Education
                                key={component.id}
                                id={component.id}
                                removeComponent={removeComponent}
                            />
                        ))}

                        <button id='addEdu' onClick={addComponent}>Add Education</button>
                    </div>

                    <div id='experienceContainer'>
                        <p id='experienceHeading'>Experience</p>

                        {expComponents.map(component => (
                            <Experience
                                key={component.id}
                                id={component.id}
                                removeComponent={removeComponent}
                            />
                        ))}

                        <button id='addExp' onClick={addComponent}>Add Experience</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default App;