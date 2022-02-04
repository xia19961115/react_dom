/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT} from './constant'
// 箭头函数直接返回对象时 要加() 不然会当作返回体来返回
export const createIncrementAction =data => ({ type:INCREMENT, data }) 