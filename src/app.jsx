const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios')
import {Deets} from './itemDeets.jsx'
import {Options} from './optionsAndCart.jsx'
import {Rating} from './rating.jsx'
import {Shipping} from './shippingAndReturns.jsx'
import {Header} from './productHeader.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    
    this.clickHandle = this.clickHandle.bind(this)
  }
clickHandle(){
  console.log("CLICK BABY!")
}
componentDidMount(){
    axios.get("/items")
    .then(results => {
      this.setState({
        items: results.data
      })
    })
    .then(idk => {
      console.log('------------------------------------');
      console.log(this.state.items[0]["storeName"]);
      console.log('------------------------------------');
    })
    .catch(err => {
      if(err){
        console.log('------------------------------------');
        console.log("err in app.jsx")
        console.log(err)
        console.log("err", err)
        console.log('------------------------------------');
      }
    })
}

  render() {
    return (
      <div>
      <Rating storeName={this.state.items[0]["storeName"]} 
      // stars={this.state.stars} numStars={this.state.numStars} 
      /> 
      {/* <Header itemtitle={} itemprice={} messageseller={this.clickHandle} />
      <Options quantity={} options={} peoplewantthis={} cartclick={this.clickHandle} /> 
      <Deets description={} /> 
      <Shipping shipprice={} location={}  />  */}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("tjn-root"))
//what is going on