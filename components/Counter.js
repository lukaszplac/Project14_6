var Counter = React.createClass({

    item: React.PropTypes.object.isRequired,

    getInitialState: function() {
    	console.log('Ustawiam domyslny stan licznika...');
        return {
            counter: 0,
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

	getDefaultProps: function() {
		console.log('Ustawiam domyslne propsy...');
	},
	
	componentWillMount: function() {
		console.log('Za chwile komponent sie zamontuje. Mozna usawiac stany jednak nie spowoduje to renderingu komponentow...');
	},
	
	componentDidMount: function() {
		console.log('Komponent wstawiony na strone. Od teraz kazda zmiana setState powoduje uaktualnienie komponentu i render()...');
	},
	
	componentWillReceiveProps: function(newProps) {
		console.log('componentWillReceiveProps uruchomi sie w przypadku otrzymania nowych wlasciwosci - propsow');
	},
	
	shouldComponentUpdate: function(newProps, newState) {
		console.log('shouldComponentUpdate? Zwraca true, lub flase jesli komponent powinien sie uaktalnic');
		return newState != this.state.counter ? true : false;
	},
	
	componentWillUpdate: function(newProps, newState) {
		console.log('Component sie zaktualizuje. Nowy stan: ', newState.counter);
	},
	
	componentDidUpdate: function(prevProps, prevState) {
		console.log('Component sie zaktualizowal - koniec fazy aktualizacji. Wczesniejszy stan: ', prevState.counter);
	},
	
    render: function() {
		console.log('Renderuje komponent');
        return React.createElement('div', {className: 'counter'},
            React.createElement('div', {className: 'counterTitle'}, 'Licznik ' + this.props.item.id),
            React.createElement('div', {className: 'counterState'}, 'Stan ' + this.state.counter),
            React.createElement('button', {type: 'button', onClick: this.increment}, ' + 1 '),
            React.createElement('button', {type: 'button', onClick: this.decrement}, ' - 1 ')
        );
    }
});