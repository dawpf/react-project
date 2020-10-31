import React from "react"
import './index.less'

class User extends React.Component {
  componentDidMount(){
    console.log('this.props.location',this.props.location);
  }
  userClick(){
    console.log('点击了');
    this.props.history.push({ pathname: '/login', state: { name: 'user页面传递过去的' } })
  }
  render() {
    return (
      <div className='user_container'>
        <h2>这是home页面的子页面 user 页面</h2>
        <button className='user_btn' onClick={this.userClick.bind(this)}>login页面的按钮</button>
      </div>
    )
  }
}

export default User