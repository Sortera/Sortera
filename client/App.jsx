import React, { Component } from "react";
import TabbedImages from './components/tabbedImages.jsx'
import "@babel/polyfill";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        //if (this.state."image"List) {
            //let "image"s = <tabbed"Image"s "image"s={this.state."image"List}></tabbed"Image"s>
        //}

        let images = <TabbedImages images={[<img src='./assets/pineapple.png' className={"image"}></img>,<img src='./assets/sunset.jpg' className={"image"}></img>,<img src='./assets/apple.jpg' className={"image"}></img>]}></TabbedImages>

        return (
            <div>
            <p>test</p> 
            {images}
        </div>
        
        )
        
    }
}