import React from "react";
import '../styles/style.css';

class Work extends React.Component {
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

        this.setState({
            job: document.querySelector('.jobTitle').value,
            company: document.querySelector('.companyName').value,
            description: document.querySelector('.jobDescription').value,
            start: document.querySelector('.jobStartDate').value,
            end: document.querySelector('.jobEndDate').value,
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
                <div id='experienceSection'>
                    <form onSubmit={getInput} className='experienceForm' id={this.props.id}>
                        <input type='text' className='jobTitle' defaultValue={job} placeholder='Job Title'></input>
                        <input type="number" className="jobStartDate" defaultValue={start} placeholder='From (eg 2018)'></input>
                        <input type="number" className="jobEndDate" defaultValue={end} placeholder='To (eg 2022)'></input>
                        <input type='text' className='companyName' defaultValue={company} placeholder='Company Name'></input>
                        <input type='text' className='jobDescription' defaultValue={description} placeholder='Job Description'></input>
                        <input type='submit'></input>
                    </form>
                </div>
            );
        } else {
            return (
                <div id='experienceSection'>
                    <div className='experienceForm' id={this.props.id}>
                        <p className='jobTitle'>{job}</p>
                        <p className="jobStartDate">{start}</p>
                        <p className="jobEndDate">{end}</p>
                        <p className='companyName'>{company}</p>
                        <p className='jobDescription'>{description}</p>
                    </div>                    
                    <button id='editBtn' onClick={setEditMode}>Edit</button>
                </div>
            );
        }
    };
};

// const Work = (props) => {
//     return (
// <div id='experienceSection'>
//     <h2 id='experienceTitle'>Experience</h2>
//     <form id='experienceForm'>
//         <input type='text' className='jobTitle' placeholder='Job Title'></input>
//         <input type="number" className="jobStartDate"placeholder='From (eg 2018)'></input>
//         <input type="number" className="jobEndDate" placeholder='To (eg 2022)'></input>
//         <input type='text' className='companyName' placeholder='Company Name'></input>
//         <input type='text' className='jobDescription' placeholder='Job Description'></input>
//         <input type='submit'></input>
//     </form>
// </div>
//     );
// };

export default Work;