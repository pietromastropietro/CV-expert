import React from "react";

class Bio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehende.',
            edit: false,
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
                <div id='bioContainer'>
                    <p id='profileHeading'>Profile</p>
                    <form onSubmit={getInput}>
                        <textarea rows='4' id='bio' defaultValue={bio} placeholder='Write a brief personal bio.'></textarea>
                        <input type='submit'></input>
                    </form>
                </div>
            );
        } else {
            return (
                <div id='bioContainer'>
                    <p id='profileHeading'>Profile</p>
                    <div onClick={setEditMode}>
                        <p id='bio'>{bio}</p>
                    </div>
                </div>
            );
        }
    }
};

export default Bio;