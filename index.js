/** @jsx React.DOM */
var React = require('react');

var HelloComponent = React.createClass({
  render: function() {
    return (
      <div>Hello, {this.props.name} !</div>
    );
  }
});

React.renderComponent(
  <HelloComponent name="React + Browserify" />,
  document.getElementById('app')
);
