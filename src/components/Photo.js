import React from "react";
import '../styles/style.css';
import userImage from '../images/user.svg'

class Photo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: userImage,
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
            <div id='photo'>
                <img src={this.state.imgSrc} alt='this-is-me'></img>
                <form>
                    <input type="file" accept='image/*' id="fileInput" onChange={this.getInput}></input>
                    <label htmlFor="fileInput">Choose an image</label>
                </form>
            </div>
        );
    };
};

export default Photo;