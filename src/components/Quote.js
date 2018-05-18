import React from "react";

class Quote extends React.Component {
    
  render(){
    // console.log(this.props.author)
    // console.log(this.props.quote)
    return(
      <div className="quote-box">
        <h3 className="text">{this.props.quote}</h3>
        <h6 className="author">{this.props.author}</h6>
        <button className="new-quote" onClick={this.props.getQuote}>New Quote</button>
      </div>
    )
  }
}

export default Quote;