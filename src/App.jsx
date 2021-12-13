import React, { Component } from 'react'
import Hello from './components/Hello'

export default class App extends Component {
  state = {
    name:'yunmu'
  }
  // 接受子组件回调的参数
  add=(value)=>{
    console.log('7777');
    this.setState({name:value})
  }
  render() {
    const {name} = this.state
    return (
      <div>
        {name}
        <Hello add={this.add}/>
      </div>
    )
  }
}

