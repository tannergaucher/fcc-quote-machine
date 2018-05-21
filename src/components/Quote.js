import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';

class Quote extends React.Component {
  
  render(){
    
    let style = {
      background: `${this.props.randomColor()}`,
    }
    
    return(
      <div className="quote-box" style={style}>
        <div className="content">
          <p className="text">
            <FontAwesomeIcon className="quote" icon={faQuoteLeft}/>
            {this.props.quote}
          </p>
          <div className="attribute">
            <p className="author">{this.props.author}</p>
            <a id="tweet-link" href={`https://twitter.com/intent/tweet?text=${this.props.quote + " - " + this.props.author}`} target="_blank">
              <FontAwesomeIcon className="icon" icon={faTwitter}/>
            </a>
          </div>
        </div>
        <div className="controls">
          <button className="new-quote" onClick={this.props.randomQuote} style={style}>New Quote</button>
        </div>
      </div>
    )
  }
}
export default Quote;