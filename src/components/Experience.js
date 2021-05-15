import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            job: 'Software Developer',
            company: 'Megacorp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

    render() {
        const { getInput } = this;
        const { job, company, description, start, end, edit } = this.state;

        if (edit) {
            return (
                <div id={this.props.id}>
                    <form onSubmit={getInput} className='experience'>
                        <input type='text' className='jobTitle' defaultValue={job} placeholder='Job Title'></input>
                        <input type="number" className="jobStartDate" defaultValue={start} placeholder='From'></input>
                        <input type="number" className="jobEndDate" defaultValue={end} placeholder='To'></input>
                        <input type='text' className='companyName' defaultValue={company} placeholder='Company Name'></input>
                        <textarea rows='9' className='jobDescription' defaultValue={description} placeholder='Job Description'></textarea>
                        <input type='submit'></input>
                    </form>
                </div>
            );
        } else {
            return (
                <div id={this.props.id}>
                    <div className='experience' onClick={() => this.setState({ edit: true })}>
                        <p className='jobTitle'>{job}</p>
                        <p className="jobStartDate">{start}</p>
                        <div className='jobDash'></div>
                        <p className="jobEndDate">{end}</p>
                        <p className='companyName'>{company}</p>
                        <p className='jobDescription'>{description}</p>
                    </div>
                    <button className='removeBtn' onClick={() => this.props.removeComponent(this.props.id)}>Remove</button>
                </div>
            );
        }
    };
};
export default Experience;