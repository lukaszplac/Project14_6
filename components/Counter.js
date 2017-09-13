var Counter = React.createClass({

    item: React.PropTypes.object.isRequired,

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        })
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('div', {className: 'counterTitle'}, 'Licznik ' + this.props.item.id),
            React.createElement('div', {className: 'counterState'}, 'Stan ' + this.state.counter),
            React.createElement('button', {type: 'button', onClick: this.increment}, ' + 1 '),
            React.createElement('button', {type: 'button', onClick: this.decrement}, ' - 1 ')
        );
    }
});