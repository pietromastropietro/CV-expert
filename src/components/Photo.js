import React from "react";
import '../styles/style.css';

const Photo = (props) => {
    return (
        <div id='photo'>
            <img src='' alt='this-is-me'></img>
            <input type="file" id="myfile" name="myfile"></input>
        </div>
    );
};

export default Photo;