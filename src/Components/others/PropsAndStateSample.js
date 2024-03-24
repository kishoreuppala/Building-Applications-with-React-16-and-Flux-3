import React, { Component } from "react";
//Props
function Avatar(props) {
    return < img src={"images/" + props.username} />;
}

<>
<Avatar username="kishore" />
<Avatar username={username} />
</>



//State Example
class Example extends Component {
    constructor(props) {
        super(props);
        this.state={ name: "" };
    }
    onChange(event) {
        this.setState({name: event.target.value });
    }
    render() {
        return <input onChange={this.onChange} value={this.state.value} />
    }
}

//State Example2
class Example2 extends Component {
    state = { name: "" };

    onChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return <input onChange={this.onChange} value={this.state.name} />;
    }
}