var React = require('react');

class MovieTitle extends React.Component {
  render() {
    return (
      <h1 className="movie-row__title">
        {this.props.Title} 
      </h1>
    );
  }
}

module.exports = MovieTitle;
