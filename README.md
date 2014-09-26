react-starter
=============

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>React Starter</title>
  <script src="http://fb.me/react-0.11.2.js"></script>
  <script src="http://fb.me/JSXTransformer-0.11.2.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/jsx">
    /** @jsx React.DOM */

    var HelloComponent = React.createClass({
      render: function() {
        return (
          <div>Hello, {this.props.name} !</div>
        );
      }
    });

    React.renderComponent(
      <HelloComponent name="React" />,
      document.getElementById('app')
    );

  </script>
</body>
</html>
```