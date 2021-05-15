import React, { useState } from 'react';

const GeneralInfo = () => {
    const [info, setInfo] = useState({
        name: 'John Smith',
        work: 'Software Developer',
        edit: false
    });

    const getInput = (e) => {
        e.preventDefault();

        setInfo({
            name: e.target[0].value,
            work: e.target[1].value,
            edit: false,
        });
    };

    if (info.edit) {
        return (
            <form onSubmit={getInput} id='name'>
                <input type='text' id='fullName' defaultValue={info.name} placeholder='Full name'></input>
                <input type='text' id='profession' defaultValue={info.work} placeholder='Profession'></input>
                <input type='submit'></input>
            </form>
        );
    } else {
        return (
            <div id='name' onClick={() => setInfo({ ...info, edit: true, })}>
                <p id='fullName'>{info.name}</p>
                <p id='profession'>{info.work}</p>
            </div>
        );
    }
};
export default GeneralInfo;
