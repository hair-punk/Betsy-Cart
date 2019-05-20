const React = require('react');
const ReactDOM = require('react-dom');
import {Deets} from './itemDeets.jsx'
import {Options} from './optionsAndCart.jsx'
import {Rating} from './rating.jsx'
import {Shipping} from './shippingAndReturns.jsx'
import {Header} from './productHeader.jsx'

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
      <div><Deets /> <Options /> <Rating /> <Shipping /> <Header /></div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("tjn-root"))
//what is going on