import React, { Component } from 'react'
import Registration2 from './Registration2'
class Registration extends Component {
    state={fn:"",ln:"",age:"",add:"",phn:""}
    
    nam =(e) =>{
        this.setState({fn:e.target.value})
    }
    lnam=(r) =>{
        this.setState({ln:r.target.value})
    }
    age=(p) =>{
        this.setState({age:p.target.value})
    }
    adr =(s) =>{
        this.setState({add:s.target.value})
    }
    no =(w) =>{
        this.setState({phn:w.target.value})
    }
    

  render() {
    return (
      <div>
        <center>
            <h1>Registration</h1>
        </center>
        <form>
            <table>
            <h3>First Name:</h3>
            <input onChange={this.nam}></input>
            <h3>Last Name</h3>
            <input onChange={this.lnam}></input>
            <h3>Age:</h3>
            <input onChange={this.age}></input>
            <h3>Address:</h3>
            <input onChange={this.adr}></input>
            <h3>Phone number:</h3>
            <input onChange={this.no}></input>
            <Registration2  n1={this.state.fn}/>
            <Registration2  n2={this.state.ln}/>
            <Registration2  n3={this.state.age}/>
            <Registration2  n4={this.state.add}/>
            <Registration2  n5={this.state.phn}/>

            </table>
            <button>Refresh</button>
            <br></br>
            <button>Home</button>
        </form>
      </div>
    )
  }
}

export default Registration