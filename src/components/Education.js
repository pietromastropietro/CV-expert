import React, { useState } from "react";

const Education = (props) => {
    const [education, setEducation] = useState({
        degree: 'Computer Science Degree',
        school: 'University of London',
        start: '2016',
        end: '2020',
        edit: false,
    });

    const getInput = (e) => {
        e.preventDefault();

        setEducation({
            degree: e.target[0].value,
            school: e.target[1].value,
            start: e.target[2].value,
            end: e.target[3].value,
            edit: false,
        });
    };

    if (education.edit) {
        return (
            <div id={props.id}>
                <form onSubmit={getInput} className='education'>
                    <input type='text' className='degreetitle' defaultValue={education.degree} placeholder='Degree Title'></input>
                    <input type='text' className='schoolName' defaultValue={education.school} placeholder='School Name'></input>
                    <input type="number" className="startDate" defaultValue={education.start} placeholder='From'></input>
                    <input type="number" className="endDate" defaultValue={education.end} placeholder='To'></input>
                    <input type='submit'></input>
                </form>
            </div>
        );
    } else {
        return (
            <div id={props.id}>
                <div className='education' onClick={() => setEducation({ ...education, edit: true })}>
                    <p className='degreetitle'>{education.degree}</p>
                    <p className='schoolName'>{education.school}</p>
                    <p className="startDate">{education.start}</p>
                    <div className='eduDash'></div>
                    <p className="endDate">{education.end}</p>
                </div>
                <button className='removeBtn' onClick={() => props.removeComponent(props.id)}>Remove</button>
            </div>
        );
    }
};
export default Education;