import React from 'react'

class Counter extends React.Component {

    state = {
        count: 0
    }
    Incr = () => {
        //this.state.count = this.state.count + 1;
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Incr}>Increment</button>
                <button onClick={this.Decre}>Decrement</button>
            </div>
        )


    }
    Decre = () => {
        this.setState({ count: this.state.count - 1 });
    }


}
export default Counter;