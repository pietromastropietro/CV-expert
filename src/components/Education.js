import React from "react";
import '../styles/style.css';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            degree: 'Computer Science Degree',
            school: 'University of London',
            start: '2016',
            end: '2020',
            edit: false,
        };
    };

    getInput = (e) => {
        e.preventDefault();

        this.setState({
            degree: e.target[0].value,
            school: e.target[1].value,
            start: e.target[2].value,
            end: e.target[3].value,
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
                    <form onSubmit={getInput} className='educationForm'>
                        <input type='text' className='degreetitle' defaultValue={degree} placeholder='Degree Title'></input>
                        <input type='text' className='schoolName' defaultValue={school} placeholder='School Name'></input>
                        <input type="number" className="startDate" defaultValue={start} placeholder='From (eg 2018)'></input>
                        <input type="number" className="endDate" defaultValue={end} placeholder='To (eg 2022)'></input>
                        <input type='submit'></input>
                    </form>
                </div>
            );
        } else {
            return (
                <div className='educationSection' id={this.props.id}>
                    <div className='educationForm' onClick={setEditMode}>
                        <p className='degreetitle'>{degree}</p>
                        <p className='schoolName'>{school}</p>
                        <p className="startDate">{start}</p>
                        <p className="endDate">{end}</p>                    
                    </div>                        
                    <button className='removeBtn' onClick={() => this.props.removeComponent(this.props.id)}>Remove</button>
                </div>
            );
        }
    };
};

export default Education;