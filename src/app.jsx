const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./main.jsx')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {}
    }
  }

  componenetDidMount(){};

  render() {
    return (
      <Main />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("tjn-root"))
//what is going on