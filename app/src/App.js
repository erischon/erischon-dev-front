import React, { Component } from 'react'
import axios from 'axios'

import { Post } from "./components/blog/blog.post";

const apiBlog = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/blog/',
  // baseURL: 'http://142.93.98.156:1337/api/v1/blog/',
  auth: {
    username: 'erischon',
    password: 'erischon2021'
  }
})

class App extends Component {
  constructor() {
    super();

    this.state = {
      blog: []
    }
  }

  componentDidMount() {
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
        {this.state.blog.map(item => (
          <Post item = { item }/>
        ))}
      </div>
    );
  }
}

export default App;
