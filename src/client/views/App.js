import React, { Component } from 'react'
import css from './App.scss'

export default class App extends Component {
  render () {
    return (
      <div className={css.app}>
        {this.props.children}
      </div>
    )
  }
}
