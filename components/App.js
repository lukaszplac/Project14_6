var counters = [
  {
    id: 1,
    name: 'counter 1'
  },
  {
    id: 2,
    name: 'counter 2'
  },
  {
    id: 3,
    name: 'counter 3'
  },
  {
    id: 4,
    name: 'counter 4'
  },
  {
    id: 5,
    name: 'counter 5'
  }
];

var App = React.createClass({
	render: function() {
		return (React.createElement('div', {className: 'app'},
					React.createElement(CountersList, {items: counters}, {})
					)
		);
	}
});