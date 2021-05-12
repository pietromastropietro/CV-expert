import React from "react";

class Header extends React.Component {
    print = () => {
        window.print();
    };

    render() {
        return (
            <header>
                <p id='title'>CV Expert.</p>
                <div id='info'>
                    <p>Click on any text field to edit.</p>
                    <p>Click <button id='printBtn' onClick={this.print}>here</button> to print or save in PDF.</p>
                </div>
            </header>
        );
    }
};

export default Header;