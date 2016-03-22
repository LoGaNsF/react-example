var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/hello');
var Clock = require('./components/clock');

ReactDOM.render(<Hello name="LoGaNsF" />, document.getElementById('hello'));
ReactDOM.render(<Clock />, document.getElementById('clock'));