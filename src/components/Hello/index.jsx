import React, { Component } from 'react'
// npm i prop-types 下载props限制
import propTypes  from 'prop-types'
export default class Hello extends Component {
    static propTypes={
        add:propTypes.func.isRequired
    }
    handleInput=(event) =>{
        const {keyCode,target} = event
        if (keyCode !== 13) return
        if (target.value.trim() ==='') return
        // 接受props 传递的函数 并且调用
        this.props.add(target.value)
        target.value = ''
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" onKeyUp={this.handleInput}/>
            </div>
        )
    }
}
