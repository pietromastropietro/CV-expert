import React from "react";
import defaultImage from '../images/user.svg'

class UserImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: defaultImage,
        }
    };

    getInput = (e) => {
        const newSrc = URL.createObjectURL(e.target.files[0]);

        this.setState({
            imgSrc: newSrc,
        });

    };

    render() {
        return (
            <div id='userImageContainer'>
                <img src={this.state.imgSrc} alt='this-is-me'></img>
                <form>
                    <input type="file" accept='image/*' id="fileInput" onChange={this.getInput}></input>
                    <label htmlFor="fileInput">Choose an image</label>
                </form>
            </div>
        );
    };
};

export default UserImage;