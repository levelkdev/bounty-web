import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import css from './App.scss'

export default class App extends Component {
  render () {
    return (
      <div className={css.app}>
        <Link to={'/home'}>Home</Link>
        {this.props.children}
      </div>
    )
  }
}
