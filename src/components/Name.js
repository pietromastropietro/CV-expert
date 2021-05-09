import React from "react";
import '../styles/style.css';

class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'John Ross',
            work: 'Software Developer',
            edit: false,
        }
    }

    getInput = (e) => {
      e.preventDefault();

      this.setState({
        name: document.querySelector('#fullName').value,
        work: document.querySelector('#workTitle').value,
        edit: false,
      });
    };

    setEditMode = () => {
        this.setState({
            edit: true,
          });
    }

    render() {
        const { getInput, setEditMode } = this;        
        const { name, work, edit } = this.state;

        if (edit) {
            return (
                <form onSubmit={getInput} id='name'>
                    <input type='text' id='fullName' defaultValue={name} placeholder='Full name'></input>
                    <input type='text' id='workTitle' defaultValue={work} placeholder='Work title'></input>
                    <button type='submit'>Submit</button>
                </form>
            );
        } else {
            return (
                <div id='name' onClick={setEditMode}>
                    <p id='fullName'>{name}</p>
                    <p id='workTitle'>{work}</p>
                </div>
            );
        }
    }
};

export default Name;
