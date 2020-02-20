import React, { Component } from "react";
import TabbedImages from '../components/tabbedImages.jsx'
import Header from './Header.jsx'
import Contents from './Contents.jsx'
import "@babel/polyfill";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        // let images = <TabbedImages images={[<img src='./assets/pineapple.png' className={"image"}></img>,<img src='./assets/trees.jpg' className={"image"}></img>,<img src='./assets/seth-rogen-premiere-this-is-the-end-04-copy.png' className={"image"}></img>]}></TabbedImages>
        let images = <TabbedImages images={{0: {path: './assets/pineapple.png'}}, {1: {path: './assets/apple.jpg'}}}></TabbedImages>

        return (
            <div className="App">
                <Header/>
                <Contents/>
            </div>
        )
        
    }
}