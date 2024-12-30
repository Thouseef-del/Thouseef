import React, { Component } from 'react'

class Task1 extends Component {
    state={name:""}
    handleUpdate = (e) =>{
this.setState({name:e.target.value})
    }
  render() {
    return (
      <div>
        <h1>Task1</h1>
        <input onChange={this.handleUpdate}></input>
        <h1>{this.state.name}</h1>
        
      </div>
    )
  }
}

export default Task1