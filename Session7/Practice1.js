import React, { Component } from 'react'
import Practice2 from './Practice2'

export class Practice1
 extends Component {
    state ={name:" "}
    handleUpdate=(e) =>{
        this.setState({name:e.target.value})
    }

    
  render() {
    return (
      <div><h1>Hi Iam Thouseef </h1>
      <input onChange={this.handleUpdate}></input>
      <Practice2 ex={this.state.name}/>

      
    

      </div>
    )
  }
}

export default Practice1
