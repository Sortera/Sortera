import React, { Component } from "react";
import TabbedImages from '../components/TabbedImages.jsx'
import Header from './Header.jsx'
import Contents from './Contents.jsx'
import "@babel/polyfill";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
    
  render () {
    const images = [
      <img src='./assets/pineapple.png' className={"image"}></img>,
      <img src='./assets/trees.jpg' className={"image"}></img>,
      <img src='./assets/seth-rogen-premiere-this-is-the-end-04-copy.png' className={"image"}></img>
    ];
    return (
      <div className="App">
        <Header/>
        <Contents/>
        <TabbedImages images={images}></TabbedImages>
      </div>
    );
  }
}