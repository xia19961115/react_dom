/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-10-07 11:57:19
 * @LastEditTime: 2023-10-07 12:13:33
 */
import React from 'react'

export default function S(props) {
    const handleChange = function () {
        console.log('调用');
        props.onChange && props.onChange('无敌')
    }
    console.log(props);
  return (
    <>
        <div>{props.fName}</div>
        <button onClick={handleChange}>常规</button>
    </>
  )
}
