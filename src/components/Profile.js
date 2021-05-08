import React from "react";
import '../styles/style.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: '',
            edit: true,
        }
    }

    getInput = (e) => {
        e.preventDefault();

        this.setState({
            bio: document.querySelector('#bio').value,
            edit: false,
        });
    };

    setEditMode = () => {
        this.setState({
            edit: true,
        });
    }

    render() {
        const { getInput, setEditMode } = this;
        const { bio, edit } = this.state;

        if (edit) {
            return (
                <div>
                    <h2 id='profileTitle'>Profile</h2>
                    <form onSubmit={getInput} id='profile'>
                        <input type='text' id='bio' defaultValue={bio} placeholder='Write a brief personal bio'></input>
                        <input type='submit'></input>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <h2 id='profileTitle'>Profile</h2>
                    <div id='profile'>
                        <p id='bio'>{bio}</p>
                        <button id='editBtn' onClick={setEditMode}>Edit</button>
                    </div>
                </div>
            );
        }
    }
};

export default Profile;