import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button>{this.props.children}</button>
        );
    }
}