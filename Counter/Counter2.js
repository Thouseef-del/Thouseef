import React, { Component } from 'react'
class Counter2 extends Component {
    state={data:"jeevani"}
    handleName=() =>{
        this.setState({data:"illi"})
    }
    Change=() =>(
        this.setState({data:"hi"})
    )
  render() {
    return (
      <div>
        <center>
            <h1>
                {this.state.data}
            </h1>
            <button onClick={this.handleName}>Update</button>
        </center>
      </div>
    )
  }
}

export default Counter2