import React, { Component } from 'react'
// import { Button } from 'antd';
import { Button } from './style';
export default class MyButton extends Component {
    render() {
        return (
            <div>
                <Button  {...this.props}></Button>
            </div>
        )
    }
}
