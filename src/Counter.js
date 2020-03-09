import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      anotherthing: 'example'
    }
  }
  inc=(event)=> {
    this.setState({    // everytime this.setState is called render is called
      counter: this.state.counter + 1
    })
  }
  dec=(event)=> {
    this.setState( (state) => { // this (state) is just a placeholder. It could be named anything. were not actually calling from our state here.
      return{
        counter: state.counter - 1
      }
    }
      // counter: this.state.counter - 1 
      // both of these functions will work 
    )
  }
  render() {
    const { fontSize, color } = this.props
    return (
      <div style={{color: color, fontSize: fontSize}}>
        <button onClick={this.dec}>-</button>
        {this.state.counter}
        <button onClick={this.inc}>+</button>
      {this.state.anotherthing}
        <hr/>
        <br/>
      </div>
    )
  }
}

export default Counter;