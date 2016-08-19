var React = require('react');

module.exports = function (props) {
    return (
          <article className="card">
            <header>{props.header}</header>
          </article>
    );
};
