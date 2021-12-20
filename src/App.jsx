import React, { Component } from 'react'
import Hello from './components/Hello'
import List from './components/List'
// 通过npm i axios  引入
import axios from 'axios'
console.log(axios);

export default class App extends Component {
  state = {
    name:'yunmu',
    arr:[]
  }
  // 接受子组件回调的参数
  add=(value)=>{
    console.log('7777');
    this.setState({name:value})
  }
  // componentDidMount() {
  //   // 直接代理到api1上的了
  //   axios.get('http://localhost:3000/api1/member',{
  //     params:{
  //       name:'zhangsan'
  //     },
  //     headers:{
  //       token:'xxxxxx'
  //     }
  //   }).then(res => this.setState({arr:res.data.list}))
  // }
  render() {
    const {name,arr} = this.state
    console.log(arr);
    return (
      <div>
        {arr.join()}
        {name}
        <Hello add={this.add}/>
        <List />
      </div>
    )
  }
}

