import React, { Component } from 'react'
import { Propsadata2 } from './Propsadata2'

class Propsadata1 extends Component {
    state={name:"Welcome"}
    handleChange=() =>(
        this.setState({name:"Students"})
    )
  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Update</button>
        <Propsadata2 data={this.state.name}/>
      </div>
    )
  }
}

export default Propsadata1