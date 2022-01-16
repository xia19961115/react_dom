import React, { Component } from 'react'
import PubSub from 'pubsub-js';
export default class List extends Component {
    Click() {
        console.log(this);
        console.log('77777');
        // 发布者 (通过订阅发布给兄弟组件通讯)
        // 第一个参数 事件名称 (订阅这也接受整个事件名), 
        // 第二个参数 参数
        PubSub.publish('listPublish','李四')
    }
    render() {
        return (
            <div>
                <button onClick={this.Click.bind(this)}>点击</button>
            </div>
        )
    }
}
