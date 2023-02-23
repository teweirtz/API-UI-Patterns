import React, {Component, useState} from 'react';
import './App.css';
import Info from './Components/Info';
import Tabs from './Components/Tabs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [{}],
        };
    }
    componentDidMount() {
        let url = "https://swapi.dev/api/films";
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.setState({films: res.results});
            // console.log(this.state.films);
        });
    }
    showFilm = () => {
        var films = this.state.films
       var foundFilm =  films.find(film => film.title === this.state.idSelected)        
          return this.setState({film: foundFilm})
      };
    handleClick = (e) => {
        // console.log(e.target.innerText);
        this.setState({ 
            idSelected: e.target.innerText }, () => {
          this.showFilm();
        });
      };

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
