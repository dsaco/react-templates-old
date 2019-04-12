import React, { Component } from 'react';

// const src = require('Assets/test.jpg');
import src from 'Assets/test.jpg';

export default class extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <img src={src} />
            </div>
        )
    }
}