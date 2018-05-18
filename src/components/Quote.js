import React from "react";

class Quote extends React.Component {
  
  // componentDidMount(){
  //   this.props.getRandom()
  // }
    
  render(){
  
    return(
      <div className="quote-box">
        <h3 className="text">{this.props.quote}</h3>
        <h6 className="author">{this.props.author}</h6>
        <button className="new-quote" onClick={this.props.getRandom}>New Quote</button>
        <p>{this.props.key}</p>
      </div>
    )
  }
}

export default Quote;