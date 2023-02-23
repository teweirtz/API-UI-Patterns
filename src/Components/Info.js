import React, {Component} from 'react';
import "./Info.css";

class Info extends Component{
    render() {
        const {film} = this.props;
        return (
            <div>
            <h1 className="title">{film.title}</h1>
            <p className="summary">{film.opening_crawl}</p>
            </div>
        );
    }
}

export default Info;