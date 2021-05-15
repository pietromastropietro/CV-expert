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
            city: e.target[0].value,
            phone: e.target[1].value,
            email: e.target[2].value,
            edit: false,
        });
    };

    render() {
        const { getInput } = this;
        const { city, phone, email, edit } = this.state;

        if (edit) {
            return (
                <form onSubmit={getInput} id='contacts'>
                    <input type='text' defaultValue={city} placeholder='City'></input>
                    <input type="tel" defaultValue={phone} placeholder='Phone number'></input>
                    <input type='email' defaultValue={email} placeholder='Email address'></input>
                    <input type='submit'></input>
                </form>
            );
        } else {
            return (
                <div id='contacts' onClick={() => this.setState({ edit: true })}>
                    <div>
                        <img src={positionIcon} alt='position-icon'></img>
                        <p>{city}</p>
                    </div>
                    <div>
                        <img src={phoneIcon} alt='phone-icon'></img>
                        <p>{phone}</p>
                    </div>
                    <div>
                        <img src={emailIcon} alt='mail-icon'></img>
                        <p>{email}</p>
                    </div>
                </div>
            );
        }
    };
};

export default Contacts;