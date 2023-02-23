import React, {Component, useState} from 'react';
import "./Info.css"; 

class Info extends Component{
    render() {
        const {film} = this.props;
        return (
            <div className="wrapper">
                    <p className="summary">{film.opening_crawl}</p>
            </div>
        );
    }
}

export default Info;