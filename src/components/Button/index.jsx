import React, { Component } from 'react'
import { Button } from 'antd';
export default class MyButton extends Component {
    render() {
        return (
            <div>
                <Button {...this.props}></Button>
            </div>
        )
    }
}
