import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from "./components/Quote"

class App extends Component {
  
  state = {
    quotes: {},
    currentQuote: ""
  }

  loadQuotes = () =>{
    fetch('http://quotes.stormconsultancy.co.uk/quotes.json')
    .then(response => response.json())    
    .then(data => {
      this.setState({
        quotes: data
      })
    })    
  }
  
  //filter this.state.quotes for a random index
  getRandom = () => {
    let randNum =  Math.floor(Math.random() * this.state.quotes.length);
    let randQuote = this.state.quotes[randNum];
    this.setState({currentQuote: randQuote})
  }
  
  componentDidMount = () => {
    this.loadQuotes()
  }
  

  
  render() {
    
    return (
      <div>
        <Quote
          quote={this.state.currentQuote.quote}
          author={this.state.currentQuote.author}
          getRandom={this.getRandom}
        />
      </div>
    );
  }
}

export default App;
