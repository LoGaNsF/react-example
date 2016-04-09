var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/hello');
var Clock = require('./components/clock');
var Counter = require('./components/counter');

var App = React.createClass({
	render: function () {
		return (
			<div>
				<Hello name="LoGaNsF" />
				<Clock />
				<Counter initial={10} />
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('container'));