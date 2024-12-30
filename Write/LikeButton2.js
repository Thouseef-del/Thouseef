
import React, { Component } from 'react';

class LikeButton2 extends Component {
  state = {
      isLoggedIn: false
    };
  

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    const buttonStyle = {
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: this.state.isLoggedIn ? 'red' : 'green',
      color: 'white',
      border: 'none'
    };

    return (
      <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', width: '250px', margin: '20px auto' }}>
        {this.state.isLoggedIn ? (
          <div>
            <h3>Welcome, User!</h3>
            <button style={buttonStyle} onClick={this.toggleLogin}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button style={buttonStyle} onClick={this.toggleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default LikeButton2;


