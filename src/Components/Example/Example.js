import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Example extends Component {

    state = {
        message: ''
    }

    componentDidMount() {
        axios.get('Examples/hello/-1')
            .then(response => console.log(response));
    }

    messageHandler = () => {
        axios.get('Examples/hello/-1')
            .then(response => {
                const data = response
                this.setState({ message: data });
                console.log(response);
            })
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.messageHandler}>PRESS ME!</button>
                <h1>{this.state.message}</h1>
            </Fragment>
        )
    }
}

export default Example;