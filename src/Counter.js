import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0 
    }
  }
  inc=(event)=> {
    // this.state.counter++
    this.setState({    // everytime this.setState is called render is called
      counter: this.state.counter + 1
    })
  }
  dec=(event)=> {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {

    return (
      <div>
        <button onClick={this.dec}>-</button>
        {this.state.counter}
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Counter;