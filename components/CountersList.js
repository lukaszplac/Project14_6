var CountersList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var counters = this.props.items.map(function(counter) {
        return React.createElement(Counter, {item: counter, key: counter.id});
    });

    return (
      React.createElement('div', {className: 'counters'}, counters)
    );
  }
});