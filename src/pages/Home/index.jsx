import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('HomeStore')
@observer
export default class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.HomeStore.getUsers}>getUsers</button>
                {
                    this.props.HomeStore.list.map(a => <p key={a}>{a}</p>)
                }
            </div>
        )
    }
}
