/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore，专门用于创建redux中最为核心的store对象
// 如果使用异步action 不需要使用中间件 npm i redux-thunk
import {createStore,applyMiddleware} from 'redux'
// 引入 reducer
// import countReducer from './reducers/count_reducer'
// 将汇总的reducer 引入
import allReducer from './reducers/index'
// 默认暴露
import thunk from 'redux-thunk'
// 使用redux开发工具 npm i redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// combineReducers 可以将多个reducer状态整合成一个对象
// const allReducer = combineReducers({
// 	he:countReducer
// })
// 使用中间件applyMiddleware作为createStore第二个参数且调用传入thunk
// 使用开发者工具composeWithDevTools 作为第二个参数调用 如果没用使用中间件 createStore(allReducer,composeWithDevTools()) 固定写法
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store