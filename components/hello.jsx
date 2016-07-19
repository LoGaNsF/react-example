'use strict';

var React = require('react');

var Hello = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },

    getDefaultProps: function () {
        return {
            name: "World"
        };
    },

    render: function () {
        return <h1>Hello {this.props.name}!</h1>;
    }
});

module.exports = Hello;
