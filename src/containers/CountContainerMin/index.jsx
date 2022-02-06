
 // 将UI组件 跟容器组件整合一个文件(开发者建议这样使用)
// import Count from '../../components/Count'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    createAsyncIncrementAction,
    createIncrementAction
} from '../../redux/actions/countAction'
// ui组件
class Count extends Component {
    handleClick = ()=>{
        this.props.add(1)
    }
    handleClick1 =() =>{
        this.props.asyncAdd(1,500)
    }
  render() {
    console.log(this.props);
    return (
        <div>
            <div>
                <div>{this.props.count}</div>
                <button onClick={this.handleClick}>+</button>&nbsp;
                <button onClick={this.handleClick1}>异步+</button>
            </div>
        </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return {
        count:state
    }
}
const mapDispatchToProps = {
    add:createIncrementAction,
    asyncAdd:createAsyncIncrementAction,
}
// 容器组件
const CountContainerMin = connect(mapStateToProps,mapDispatchToProps)(Count)

export default CountContainerMin