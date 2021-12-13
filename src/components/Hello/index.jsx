import React, { Component } from 'react'

export default class Hello extends Component {
    handleInput=(event) =>{
        const {keyCode,target} = event
        if (keyCode !== 13) return
        if (target.value.trim() ==='') return
        // 接受props 传递的函数 并且调用
        this.props.add(target.value)
        target.value = ''
    }
    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handleInput}/>
            </div>
        )
    }
}
