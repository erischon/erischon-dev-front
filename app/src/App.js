import React, { Component } from 'react'
import axios from 'axios'

const apiBlog = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/blog/',
  auth: {
    username: 'erischon',
    password: 'erischon2021'
  }
})

class App extends Component {
  state = {
    blog: []
  }

  componentDidMount() {
    this.getBlog()
  }

  getBlog() {
    apiBlog
    .get('/')
    .then(res => {
      this.setState({blog: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1> Blog </h1>
        {this.state.blog.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
