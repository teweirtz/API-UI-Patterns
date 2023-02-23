import React, {Component} from 'react';
import "./Info.css";

class Info extends Component{
    render() {
        const {film} = this.props;
        return (
            <div className="body">
            <div className="wrapper">
                <p className="summary">{film.opening_crawl}</p>
            </div>
            </div>
        );
    }
}

export default Info;