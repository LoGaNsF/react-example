var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/hello');
var Clock = require('./components/clock');
var Counter = require('./components/counter');

ReactDOM.render(<Hello name="LoGaNsF" />, document.getElementById('hello'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Counter initial={10} />, document.getElementById('counter'));