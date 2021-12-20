import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// npm i prop-types 下载props限制
import propTypes  from 'prop-types'
export default class Hello extends Component {
    state ={
        name:'zhangsan'
    }
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
    componentDidMount() {
        // 接受者
        PubSub.subscribe('listPublish',(_,data)=>{
            console.log(data)
            this.setState({name:data})
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" onKeyUp={this.handleInput}/>
                <div>{this.state.name}</div>
            </div>
        )
    }
}
