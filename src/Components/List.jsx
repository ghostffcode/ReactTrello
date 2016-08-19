var React = require('react');
var Card = require('./Card');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      cards: []
    }
  },
  AddCard: function (e) {
    e.preventDefault();
    var header = e.target.cardVal.value;
    this.setState({
      List: this.state.cards.push({"header": header})
    });
    e.target.cardVal.value = '';
  },
  render: function () {
    var cards = [];
    if (this.state.cards.length > 0) {
      this.state.cards.forEach(function (v, i) {
        cards.push(<Card key={i} header={v.header} />)
      });
    } else {
      cards = "No Cards Added Yet";
    }
    return (
      <div className="col-md-3 col-sm-4 col-xs-4">
        <section className="list col-md-12 col-sm-12 col-xs-12">
          <header>{this.props.name}</header>
            {cards}
          <article className="card">
            <form action="#" onSubmit={this.AddCard}>
              <input type="text" className="form-control" id="cardVal" placeholder="Add Card..." />
            </form>
          </article>
        </section>
      </div>
    )
  }
});
