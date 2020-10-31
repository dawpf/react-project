import React from "react"

class User extends React.Component {
  render () {
    return (
      <div className='user_container'>
        <h1>这是home页面的子页面 user 页面</h1>
        <button>login页面的按钮</button>
      </div>
    )
  }
}

export default User