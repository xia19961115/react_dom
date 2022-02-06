/*
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接到两个参数，分别为:之前的状态(preState)，动作对象(action)
*/ 
import {INCREMENT} from '../constant'
const initState = 0 // 初始化数据根据业务来
export default function countReducer(preState = initState,action) {
    // console.log(preState,action); // 初始化的情况 type: "@@redux/INIT7.k.1.f.d.3"
    // 初始化的时候preState 为undefined
    // if (preState === undefined) preState = 0 // 一般用函数默认值的方式
    // 从action对象中获取: type、data
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT: // 加法
        console.log('-------');
            return preState + data
        case 'decrement':
            return preState - data
        default: // 初始化的情况
            return preState
    }
}