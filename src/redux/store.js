/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore，专门用于创建redux中最为核心的store对象
// 如果使用异步action 不需要使用中间件 npm i redux-thunk
import {createStore,applyMiddleware} from 'redux'
// 引入 reducer
import countReducer from './reducers/count_reducer'
// 默认暴露
import thunk from 'redux-thunk'
// 使用中间件applyMiddleware作为createStore第二个参数且调用传入thunk
const store = createStore(countReducer,applyMiddleware(thunk))
export default store