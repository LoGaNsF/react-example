'use strict';

var React = require('react');

var Clock = React.createClass({
    getInitialState: function () {
        return {
            date: new Date().toLocaleString()
        };
    },

    handleClock: function () {
        this.setState({date: new Date().toLocaleString()});
    },

    componentDidMount: function () {
        this.interval = setInterval(this.handleClock, 1000);
    },

    componentWillUnmout: function () {
        clearInterval(this.interval);
    },

    render: function () {
        return <div className="clock">{this.state.date}</div>;
    }
});

module.exports = Clock;