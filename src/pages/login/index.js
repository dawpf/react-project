import React from "react"
import './index.less'

class Login extends React.Component {
  componentDidMount(){
    console.log('this.props.location',this.props.location);
  }


  loginClick () {
    console.log('点击了login传递的数据为:', );
    this.props.history.push({ pathname: '/user', state: { name: 'login页面传递过去的' } })
  }

  render () {
    return (
      <div className='login_container'>
        <h2>这是login页面</h2>
        <button className='login_btn' onClick={this.loginClick.bind(this)}>login页面的按钮</button>
      </div>
    )
  }
}

export default Login