/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-10-07 11:52:11
 * @LastEditTime: 2023-10-07 12:12:37
 */
import React, { Component } from 'react'
import S from './S'

export default class index extends Component {
    handleChange =  () => {
        console.log('调用');
        this.props.onClick && this.props.onClick('无敌')
    }
  render() {
    console.log(this.props,'????');
    return (
      <>
        <S {...this.props}/>
        {/* <button onClick={this.handleChange}>常规1</button> */}
      </>
    )
  }
}
