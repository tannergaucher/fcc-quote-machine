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
    let colors = ["#F79256", "#1B1B3A", "#CC3937", "#068B9D", "#3F0D12"];
    let rand = Math.floor(Math.random() * colors.length);
    console.log(colors[rand]);
  }

  render() {
    
    return (
      <div className="wrapper">
        <div className="App">
          <Quote
            quote={this.state.currentQuote.quote}
            author={this.state.currentQuote.author}
            randomQuote={this.randomQuote}
          />
        </div>
      </div>
    );
  }
}

export default App;
