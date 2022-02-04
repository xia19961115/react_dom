import React, { Component } from 'react';
// 引入store
import store from '../../redux/store';
import {createIncrementAction,createAsyncIncrementAction} from '../../redux/countAction'

export default class File extends Component {
    // 当使用了redux的时候 需要在这个生命钩子中写store.subscribe 来重新渲染
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         // this.forceUpdate()
    //         this.setState({})  // 以上两者都可以触发 , 但是只能监听一个组件/建议写在index.js中
    //     })
    // }
    handleClick = ()=>{
        store.dispatch(createIncrementAction(1))
        /** 
         *  dispatch中传入action 
         *      1.action 为Object(普通对象) 为同步action
         *      2.action 为function(函数) 为异步action
         * */ 
    }
    handleClick1 =() =>{
        store.dispatch(createAsyncIncrementAction(1,1000))
    }
  render() {
      console.log('file',store);
      // store.getState() 获取状态
    return (
        <div>
            <div>
                {store.getState()}
                <button onClick={this.handleClick}>+</button>&nbsp;
                <button onClick={this.handleClick1}>异步+</button>
            </div>
        </div>
    )
  }
}
