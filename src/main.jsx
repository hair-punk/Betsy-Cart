const React = require('react');

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item: null
    }
  }
  render() {
    return(
      <div><h1>I love dumplings</h1></div>
    );
  }
}

module.exports = Main