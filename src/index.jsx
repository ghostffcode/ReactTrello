var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./Components/List');

// Our Board App
var Board = React.createClass({
  getInitialState: function () {
    return {
      list: []
    }
  },
  AddBoard: function (e) {
    var name = e.target.value;
    if (e.keyCode == 13 || e.which == 13) {
      this.setState({
        List: this.state.list.push({"name": name})
      });
      e.target.value = '';
    }
  },
  render: function() {
      var list = [];
      if (this.state.list.length > 0) {
        this.state.list.forEach(function (v, i) {
          list.push(<List key={i} name={v.name} />)
        });
      } else {
        list = "No Boards Yet";
      }
      return (
          <div className="row col-md-12 col-sm-12 col-xs-12">
            <div className="col-md-12 col-sm-12 col-xs-12 boardForm">
                  <input type="text" onKeyUp={this.AddBoard} className="form-control newboard" placeholder="New Board..." />
            </div>
            <div className="row col-md-12 col-sm-12 col-xs-12">
              {list}
            </div>
          </div>
      );
  }
});

ReactDOM.render(<Board />, document.querySelector('#app'));
