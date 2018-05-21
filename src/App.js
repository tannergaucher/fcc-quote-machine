import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from "./components/Quote";

class App extends Component {
  
  state = {
    quotes: {},
    currentQuote: ""
  }
  
  loadQuotes = () =>{
      fetch('http://quotes.stormconsultancy.co.uk/quotes.json')
      .then(response => response.json())
      //set quotes state    
      .then(data => {
        this.setState({
          quotes: data
        })
      })
      //set currentQuotes state 
      .then(this.randomQuote)    
    }

  randomQuote = () => {
    let randNum =  Math.floor(Math.random() * this.state.quotes.length);
    let randQuote = this.state.quotes[randNum];
    this.setState({currentQuote: randQuote})
  }
  
  componentDidMount(){
    this.loadQuotes();
  }

  randomColor = () => {
    let colors = ["#F79256", "#1B1B3A", "#CC3937", "#068B9D", "#3F0D12", "#EDA428", "#00B7A5", "#2176AE", "#265D93", "#754529", "#13304C", "#CC3937", "#3B1F2B", "#870D1D"];
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  }
  
  render() {
    
    return (
      <div className="wrapper, noselect">
        <div className="App">
          <Quote
            quote={this.state.currentQuote.quote}
            author={this.state.currentQuote.author}
            randomQuote={this.randomQuote}
            randomColor={this.randomColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
