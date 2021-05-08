import React from "react";
import '../styles/style.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            phone: '',
            email: '',
            edit: true,
        };
    };

    getInput = (e) => {
        e.preventDefault();

        this.setState({
            city: document.querySelector('#city').value,
            phone: document.querySelector('#phone').value,
            email: document.querySelector('#email').value,
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
        const { city, phone, email, edit } = this.state;

        if (edit) {
        return (
            <form onSubmit={getInput} id='contacts'>
                <input type='text' id='city' defaultValue={city} placeholder='City'></input>
                <input type="tel" id="phone" defaultValue={phone} placeholder='Phone number'></input>
                <input type='email' id='email' defaultValue={email} placeholder='Email address'></input>
                <input type='submit'></input>
            </form>
        );
        } else {
            return (
                <div id='contacts'>
                    <p id='city'>{city}</p>
                    <p id="phone">{phone}</p>
                    <p id='email'>{email}</p>
                    <button id='editBtn' onClick={setEditMode}>Edit</button>
                </div>
            );
        }
    };
};

export default Contacts;