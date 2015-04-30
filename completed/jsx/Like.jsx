var React = require('react');

class Like extends React.Component {
  constructor(props) {
  	super(props);
  	this.state =  {
  		like: false
  	}
  }
  handleLikeEvent(e) {
  	e.preventDefault();
    this.setState({like: true});
  } 
  render() {
  	var mytext;
  	if(this.state.like === true) {
  		mytext = ( 
  			<div>You Like This</div> 
  			);
  	}
  	else {
  		mytext = ( 
  			<div>You Don&acute;t Like This</div>
  			);
  	}
    return (
    	<div>
    	 {mytext} 
    	 <a onClick={this.handleLikeEvent.bind(this)} href='#'><i className="fa fa-thumbs-up"/></a>
    	</div>
    );
  }
}

module.exports = Like;
