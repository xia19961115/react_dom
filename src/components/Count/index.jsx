import React, { Component } from 'react';

export default class Count extends Component {
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
