import React, { PureComponent } from 'react'
import PubSub from 'pubsub-js';
export default class List extends PureComponent {
    state ={
        name:'ersan',
        num: 1,
        ar: []
    }
    Click() {
        console.log(this);
        console.log('77777');
        // 发布者 (通过订阅发布给兄弟组件通讯)
        // 第一个参数 事件名称 (订阅这也接受整个事件名), 
        // 第二个参数 参数
        PubSub.publish('listPublish','李四')
    }
    band = () => {
        // 在PureComponent 组件中 要修改引用地址
        // const obj = this.state
        // obj.name= 'xxx'
        // console.log(obj === {...obj})
        this.setState({name:'aaa'})
    }
    add = () => {
        setTimeout(()=>{
            // setState 使用函数方法 可接受(state,prop)
            this.setState((state)=>{
                console.log(state)
            })
        })
        // this.setState((state)=>({num:state.num+1}))
        // console.log(this.state.num);
        // React 内部将同一事件响应函数中的多个setState进行合并，减少setState的调用次数，也就能减少渲染的次数，提高性能。
        // setState调用是异步的 ,   再外层套个setTimeout 则为同步
        // 在原生事件、setTimeout中使用setState，就不归 React 管理了，写了几次setState，就会调用几次setState。
        this.setState({num:this.state.num+3})
        console.log(this.state.num);
        this.setState({num:this.state.num+1})
    }
    arr =() => {
        // 复杂数据修改, 对象同理
        /** 如
         *  let obj = this.state.obj
         *  obj.xxx = 'aa'
         *  this.setState({obj})
         */
        let ar = this.state.ar
        ar = [1,2,3]
        this.setState({ar},()=>{
            console.log(this.state.ar);
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.Click.bind(this)}>点击</button>
                <div onClick={this.band}>{this.state.name}</div>
                <button onClick={this.add}>加1</button>
                <button onClick={this.arr}>数组</button>
            </div>
        )
    }
}
