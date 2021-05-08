import React from "react";
import '../styles/style.css';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            degree: '',
            school: '',
            start: '',
            end: '',
            edit: true,
        };
    };

    getInput = (e) => {
        e.preventDefault();

        // TODO: when i will add multile educations, i will have more than 1 of these values.
        // i need a way to select only the one referring to the right education to edit
        this.setState({
            degree: document.querySelector('.degreetitle').value,
            school: document.querySelector('.schoolName').value,
            start: document.querySelector('.startDate').value,
            end: document.querySelector('.endDate').value,
            edit: false,
        });
    };

    setEditMode = () => {
        this.setState({
            edit: true,
        });
    };

    render() {
        const { getInput, setEditMode } = this;
        const { degree, school, start, end, edit } = this.state;

        if (edit) {
            return (
                <div className='educationSection' id={this.props.id}>
                    <form onSubmit={getInput} className='educationForm' >
                        <input type='text' className='degreetitle' defaultValue={degree} placeholder='Degree Title'></input>
                        <input type='text' className='schoolName' defaultValue={school} placeholder='School Name'></input>
                        <input type="number" className="startDate" defaultValue={start} placeholder='From (eg 2018)'></input>
                        <input type="number" className="endDate" defaultValue={end} placeholder='To (eg 2022)'></input>
                        <input type='submit'></input>
                    </form>
                    <button onClick={this.props.deleteFunc}>Remov</button>
                </div>
            );
        } else {
            return (
                <div className='educationSection' id={this.props.id}>
                    <div className='educationForm'>
                        <p id='degreetitle'>{degree}</p>
                        <p id='schoolName'>{school}</p>
                        <p id="startDate">{start}</p>
                        <p id="endDate">{end}</p>
                    </div>
                    <button id='editBtn' onClick={setEditMode}>Edit</button>
                </div>
            );
        }
    };
};

export default Education;