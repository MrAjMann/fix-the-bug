import './App.css'

import React, { Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {timesClicked: 0}
  }
  

  
  
  handleClick = () =>{
    this.setState({ timesClicked: this.state.timesClicked + 1 })
  }
  
  
    render() {

      
      return (
        <>
        <p>You've clicked it {this.state.timesClicked} times</p>
        <button onClick={this.handleClick}>click me!</button>
      </>
    )
  }
}

export default App;
