var React = require('react');

var Counter = React.createClass({
    propTypes: {
        initial: React.PropTypes.number
    },
    getDefaultProps: function () {
        return {
            initial: 0
        };
    },
    getInitialState: function () {
        return {
            count: this.props.initial || 0
        };
    },
    handleClick: function () {
        this.setState({count: this.state.count + 1});
    },
    render: function () {
        return (
            <span onClick={this.handleClick}>Counter: {this.state.count}</span>
        );
    }
});

module.exports = Counter;