import React from "react";
import '../styles/style.css';

class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            job: 'Software Developer',
            company: 'Megacorp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            start: '2019',
            end: '2021',
            edit: false,
        };
    };

    getInput = (e) => {
        e.preventDefault();

        this.setState({
            job: e.target[0].value,
            company: e.target[3].value,
            description: e.target[4].value,
            start: e.target[1].value,
            end: e.target[2].value,
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
        const { job, company, description, start, end, edit } = this.state;

        if (edit) {
            return (
                <div className='experienceSection' id={this.props.id}>
                    <form onSubmit={getInput} className='experienceForm'>
                        <input type='text' className='jobTitle' defaultValue={job} placeholder='Job Title'></input>
                        <input type="number" className="jobStartDate" defaultValue={start} placeholder='From (eg 2018)'></input>
                        <input type="number" className="jobEndDate" defaultValue={end} placeholder='To (eg 2022)'></input>
                        <input type='text' className='companyName' defaultValue={company} placeholder='Company Name'></input>
                        <input type='text' className='jobDescription' defaultValue={description} placeholder='Job Description'></input>
                        <input type='submit'></input>
                    </form>
                    <button onClick={() => this.props.removeComponent(this.props.id)}>Remove</button>
                </div>
            );
        } else {
            return (
                <div className='experienceSection' id={this.props.id}>
                    <div className='experienceForm'onClick={setEditMode}>
                        <p className='jobTitle'>{job}</p>
                        <p className="jobStartDate">{start}</p>
                        <p className="jobEndDate">{end}</p>
                        <p className='companyName'>{company}</p>
                        <p className='jobDescription'>{description}</p>
                    </div>                    
                </div>
            );
        }
    };
};

export default Work;