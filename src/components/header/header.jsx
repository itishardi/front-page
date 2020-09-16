import React, { Component } from 'react'
import logo from '../../logo.svg';
import './header.scss'

export default class HeaderComponent extends Component {

  render() {
    return (
      <header className="top-header">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="title">吟游词人</div>
      </header>
    )
  }
}
