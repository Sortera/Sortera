import React, { Component } from 'react';
import '../../assets/navbarStyles.css';
import '../../assets/pineapple.png';
import Logo from '../../assets/SorteraLogo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <input type="checkbox" id="check"></input>

        <div id="logoDiv">
          <h1>SORTERA</h1>
          <img id="logo" src={Logo} />
        </div>

        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <ul>
          <li>
            <a href="signin">Sign In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    );
  }
}
