import React from "react";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'

class Quote extends React.Component {
  
  render(){
  
    return(
      <div className="quote-box">
        <div className="content">
          <h3 className="text">{this.props.quote}</h3>
          <div className="attribute">
            <h6 className="author">{this.props.author}</h6>
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </div>
        </div>
        <div className="controls">
          <button className="new-quote" onClick={this.props.randomQuote}>New Quote</button>
        </div>
      </div>
    )
  }
}
export default Quote;