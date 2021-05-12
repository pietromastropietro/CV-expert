import React from "react";

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'John Smith',
            work: 'Software Developer',
            edit: false,
        }
    }

    getInput = (e) => {
      e.preventDefault();

      this.setState({
        name: document.querySelector('#fullName').value,
        work: document.querySelector('#profession').value,
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
                    <input type='text' id='profession' defaultValue={work} placeholder='Profession'></input>
                    <input type='submit'></input>
                </form>
            );
        } else {
            return (
                <div id='name' onClick={setEditMode}>
                    <p id='fullName'>{name}</p>
                    <p id='profession'>{work}</p>
                </div>
            );
        }
    }
};

export default GeneralInfo;
