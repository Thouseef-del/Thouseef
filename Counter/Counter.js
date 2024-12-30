import React, { Component } from 'react'

class Counter extends Component {
    state={count:0}
    handleAdd=()=>{
        this.setState({count:this.state.count+1})
    }
    handleSub=() =>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <center>
        <h1>Welcome to counter</h1>
        <button onClick={this.handleAdd}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleSub}>-</button>
        </center>
      </div>
    )
  }
}

export default Counter