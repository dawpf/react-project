import React from "react"

class Home extends React.Component {

  render () {
    return (
      <div>这是home页面
        {this.props.children}
      </div>
    )
  }
}

export default Home