import React, { Component } from 'react';
// 引入store
import store from '../../redux/store';

export default class File extends Component {
    // 当使用了redux的时候 需要在这个生命钩子中写store.subscribe 来重新渲染
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         // this.forceUpdate()
    //         this.setState({})  // 以上两者都可以触发 , 但是只能监听一个组件/建议写在index.js中
    //     })
    // }
    handleClick = ()=>{
        store.dispatch({type:'imcrement',data:1})
    }
  render() {
      console.log('file',store);
      // store.getState() 获取状态
    return (
        <div>
            <div>
                {store.getState()}
                <button onClick={this.handleClick}>+</button>
            </div>
        </div>
    )
  }
}
