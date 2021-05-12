import React from "react";
import positionIcon from '../images/position.svg';
import phoneIcon from '../images/phone.svg';
import emailIcon from '../images/mail.svg';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: 'London, UK',
            phone: '+44 07892-123-456',
            email: 'johnsmith@example.com',
            edit: false,
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
                <div id='contacts' onClick={setEditMode}>
                    <div>
                        <img src={positionIcon} alt='position-icon'></img>
                        <p id='city'>{city}</p>
                    </div>
                    <div>
                        <img src={phoneIcon} alt='phone-icon'></img>
                        <p id="phone">{phone}</p>
                    </div>
                    <div>
                        <img src={emailIcon} alt='mail-icon'></img>
                        <p id='email'>{email}</p>
                    </div>
                </div>
            );
        }
    };
};

export default Contacts;