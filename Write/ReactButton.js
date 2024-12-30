import React, {Component} from 'react';

class ReactButton extends Component {
    state = {
        reacts: 0,
        reacted: false
    };
    toggleReact=() => {
        this.setState((prevState)=>({
            reacts : prevState.reacted ? prevState.reacts-1 : prevState.reacts+1,
            reacted : !prevState.reacted
        }));
    };
    render() {
        return(
           <div style={{textAlign:'center', border:'2px solid black',padding:'20px',maxWidth:'200px',margin:'20px auto'}}>
            <p>Reacts: {this.state.reacts}</p>
            <button onClick={this.toggleReact}>
                {this.state.reacted ? 'UnReact': 'React'}
            </button>
           </div>
        );
    }
}
export default ReactButton;