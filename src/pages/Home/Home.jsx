import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount() {
        this.props.fetchList();
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <h1>home</h1>
                {
                    list.map(num => {
                        return (
                            <h3 key={num}>{num}</h3>
                        )
                    })
                }
            </div>
        );
    }
}