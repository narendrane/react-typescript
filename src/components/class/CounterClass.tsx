import { Component } from "react";
type CountProps = {
    message: String
}

type StateProps = {
    count: number
}
export class CounterClass extends Component <CountProps, StateProps>{
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState((prevState) =>  ({count: prevState.count+1}))
    }
    render(){

        return <div>
            {this.props.message}
            <button onClick={this.handleClick}>Increment</button>
             [{this.state.count}]
        </div>
    }
}