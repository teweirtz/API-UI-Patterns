import React, {Component, useState} from 'react';
import './App.css';
import Info from './Components/Info';
import Tabs from './Components/Tabs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
    showFilm = () => {
        console.log(this.state.idSelected);
        return (this.state.idSelected
          ? this.state.films.map(film => {
              if (film.id === this.state.idSelected) {            
                this.setState({film: film})
              }
          })
          : "");
      };
    handleClick = (e) => {
        console.log(e.target.id);
        this.setState({ 
            idSelected: e.target.id }, () => {
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
