var React = require('react');

var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    handleClick: function () {
        this.setState({counter: this.state.counter + 1});
    },
    render: function () {
        return (
            <span onClick={this.handleClick}>Counter: {this.state.counter}</span>
        );
    }
});

module.exports = Counter;