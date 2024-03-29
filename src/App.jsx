import React, { Component } from 'react'
import {Link,NavLink,Route} from 'react-router-dom'
// import { Button } from 'antd';
import 'antd/dist/antd.css';
import Hello from './components/Hello'
import List from './components/List'
import Test from './components/Test'
import Demo from './components/Demo'
import File from './components/File'
import MyButton from './components/Button';
import Hooks from './components/Hooks';
import CountContainer from './containers/CountContainer';
import CountContainerMin from './containers/CountContainerMin'
import F from './components/F'
// import store from './redux/store';
// 通过npm i axios  引入
// import axios from 'axios'
// console.log(axios);

export default class App extends Component {
  state = {
    name:'yunmu',
    arr:[],
    isShow:!false,
    fName: 'zhang'
  }
  // 接受子组件回调的参数
  add=(value)=>{
    console.log('7777');
    this.setState({name:value})
  }
  // componentDidMount() {
  //   // 直接代理到api1上的了
  //   axios.get('http://localhost:3000/api1/member',{
  //     params:{
  //       name:'zhangsan'
  //     },
  //     headers:{
  //       token:'xxxxxx'
  //     }
  //   }).then(res => this.setState({arr:res.data.list}))
  // }
  componentDidMount() {
    // 直接代理到api1上的了
    // axios.post (url,data(请求提),options(设置请求头等....))
    // axios.post('https://www.imooc.com/api/http/search/suggest',{
    //   data:{}
    // },{
    //   params:{
    //     name:'zhangsan'
    //   },
    //   headers:{
    //     token:'xxxxxxabc'
    //   }
    // }).then(res => this.setState({arr:res.data.list}))
    // axios('https://www.imooc.com/api/http/search/suggest',{
    //   method: 'POST',
    //   params:{
    //     name:'zhangsan'
    //   },
    //   data: {
    //     sex:"female"
    //   },
    //   headers:{
    //     token:'xxxxxx'
    //   }
    // })
  }
  render() {
    console.log(process.env);
    const {name,arr,isShow} = this.state
    console.log(arr);
    return (
      <div>
        {arr.join()}
        {name}
        {/* 给子组件 传递方法 在this.props中可以调用 */}
        <Hello add={this.add}/>
        <List />
        {
          isShow ? <Test /> :
          <Demo />
        }
          <Link></Link>
          <NavLink activeClassName='xxx'  to="/demo"> 到哪我 </NavLink>
          <Route path="/demo" component={Demo} />
          {/* <Button type="primary">Primary Button</Button> */}
          <MyButton 
            disabled ={this.state.isShow === true ? false : true}
            type="primary" 
            children="点我" />
          {/* <Routes>
            <Route path="/demo" element={<Demo />} />
          </Routes> */}
          <File />
          <div>--react-redux---</div>
          {/* store 通过props的形式传递给容器组件 如果APP标签被包裹了 Provider标签且传递了store 则不需要再传递store*/}
          <CountContainer a={1} />
          <div>--react-redux 优化后再一个文件中(建议使用这样的)---</div>
          <CountContainerMin />
          <div>--------------------------hooks</div>
          <Hooks />
          <div>-----------------------------------</div>
          {/* 在react组件中  onChange(事件) 传递的是属性 不会自动触发(只要props传递, 多少层 都可以触发) */}
          {/* 在reactHTML元素中中  onChange(事件) 会在适当的时间段自动触发 */}
          <F fName={this.state.fName} onChange={e => {
            console.log(e,'eeeeeeeeeeeeeeeeeee');
            this.setState({
              fName: e
            })
          }}/>
      </div>

    )
  }
}

