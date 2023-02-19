import React, {Component} from 'react';
import "./Info.css";

class Info extends Component{
    constructor() {
        super();
        this.state = {
            films: []
        };
    }
    componentDidMount() {
        this.getFilms();
    }
    getFilms = () => {
        let url = "https://swapi.dev/api/films"
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            this.setState({ films: res});
            console.log(this.state);
        });
    };
    render() {
        if (!this.state.films.length) {
            return null;
        } else {
            return (
                <div>

                </div>
            );
        }
    }
}

export default Info;