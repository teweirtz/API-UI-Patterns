import React, {Component, useState} from 'react';
import './App.css';
import Info from './Components/Info';
import Tabs from './Components/Tabs';

class App extends Component {
    constructor() {
        super();
        this.state = {
            films: null,
            idSelected: null,
            film: null,
        };
    }
    componentDidMount() {
        let url = "https://swapi.dev/api/films";
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.setState({films: res});
            console.log(this.state.films);
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Tabs clicker={this.handleClick} />
                    {this.state.film ? <Info film={this.state.film}/> : ""}
                </div>
            </div>
        );
    }
}

export default App;
