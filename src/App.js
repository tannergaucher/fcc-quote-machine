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

  componentDidMount = () =>{
    this.loadQuotes()
  }
  
  // getQuote = () => {
  //   let quote = this.state.quotes;
  //   //iterate through this.state.quotes.length
  //   let length = quote.length;
  //   //get random num from 0 to length
  //   let rand = Math.floor(Math.random() * length);
  //   //get quote of index rand
  //   let quoteText = quote[rand].quote;
  //   let quoteAuthor = quote[rand].author
  // }
  
  render() {
    return (
      
      <div className="App">
        {Object.keys(this.state.quotes).map(key => (

          <Quote
            key={key}
            index={key}
            author={this.state.quotes[key].author}
            quote={this.state.quotes[key].quote}
          />

        ))}
      </div>
    );
  }
}

export default App;
