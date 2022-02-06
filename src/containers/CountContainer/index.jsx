
// 容器组件(才能调用react-redux上的api,再通过props传递给UI组件(子组件)) 创建需要借助react-redux

// 引入UI组件
import Count from '../../components/Count'
// 从react-redux 引入connect (分别暴露) 用于链接UI组件与redux
import {connect} from 'react-redux'
import {
    createAsyncIncrementAction,
    createIncrementAction
} from '../../redux/actions/countAction'
// connect第一次调用 第一次调用传入2个方法,react-redux会帮我们回调
/**
 * 	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
 */
const mapStateToProps = (state) =>{
    return {
        count:state.he
    }
}
/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
    4.mapDispatchToProps 传递的是一个对象  value 必须是一个action
*/
// mapDispatchToProps 一般写法
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         add:(val) => dispatch(createIncrementAction(val)),
//         asyncAdd:(val,dely) => dispatch(createAsyncIncrementAction(val,dely)),
//     }
// }

// mapDispatchToProps 简写 (提供action既可)
// react-redux 的api优化 会自动调用dispatch方法
const mapDispatchToProps = {
    add:createIncrementAction,
    asyncAdd:createAsyncIncrementAction,
}
// connect第二次调用 第二次调用传入UI组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(Count)
// const CountContainer = connect(
//     state => ({count:state}),
//     {
//         add:createIncrementAction,
//         asyncAdd:createAsyncIncrementAction, 
//     }
// )(Count)
export default CountContainer