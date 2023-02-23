import React, {Component} from 'react';
import "./Info.css";

class Info extends Component{
    render() {
        const {films} = this.props;
        return (
            <div>
            <h1 className="title">{films.title}</h1>
            <p className="summary">{films.opening_crawl}</p>
            </div>
        );
    }
}

export default Info;