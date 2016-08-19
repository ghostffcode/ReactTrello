var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
          <article className="card">
            <header>{this.props.header}</header>
          </article>
    )
  }
});
