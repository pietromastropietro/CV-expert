import React, { useState } from 'react';
import defaultImage from '../images/user.svg'

const UserImage = () => {
    const [imgSrc, setImgSrc] = useState(defaultImage)

    const getInput = (e) => {
        const newSrc = URL.createObjectURL(e.target.files[0]);
        setImgSrc(newSrc)
    };

    return (
        <div id='userImageContainer'>
            <img src={imgSrc} alt='this-is-me'></img>
            <form>
                <input type="file" accept='image/*' id="fileInput" onChange={getInput}></input>
                <label htmlFor="fileInput">Choose an image</label>
            </form>
        </div>
    );
};
export default UserImage;