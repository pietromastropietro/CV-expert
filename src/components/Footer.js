import React from "react";
import githubLogo from '../images/git.png';

class Footer extends React.Component {
    print = () => {
    };

    render() {
        return (
            <footer>
                <div id="github">
                    <p>Follow me on GitHub</p>
                    <a href="https://github.com/pietromastropietro" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="github-logo" id="githubLogo"></img>
                    </a>
                </div>
                <div>Icons by
                    <a href="https://freeicons.io/profile/730" target="_blank" rel="noreferrer"> Anu Rocks </a>
                    on <a href="https://freeicons.io" target="_blank" rel="noreferrer">Freeicons</a>.
                </div>
            </footer>
        );
    }
};

export default Footer;