import React, { Component } from 'react';
import '../../CSS/App.css';

class CategoriesHeader extends Component {
    render() {
        return (
            <div className="App-header2">
                <p> categories : <span className="opt">option1</span> <span className="opt">option2</span> <span className="opt">option2</span> <span className="opt">option2</span></p>
            </div>
        );
    }
}
export default CategoriesHeader;
