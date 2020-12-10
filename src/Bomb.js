// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrement = () => {
        this.setState({ secondsLeft: this.state.initialCount - 1})
    }

    render() {
        let sec = this.state.secondsLeft
        return (
            <div>
                {sec > 0 ? (
                   <div>
                   {this.state.secondsLeft} seconds left before I go boom!</div>
                ): "Boom!" }
            </div>
        );
    }
}

export default Bomb;