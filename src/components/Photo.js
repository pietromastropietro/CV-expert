import React from "react";
import '../styles/style.css';
import userImage from '../images/user.svg'

const Photo = (props) => {
    return (
        <div id='photo'>
            <img src={userImage} alt='this-is-me'></img>
            {/* <input type="file" id="myfile" name="myfile"></input> */}
        </div>
    );
};

export default Photo;