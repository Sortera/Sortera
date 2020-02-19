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
<<<<<<< HEAD:client/App.jsx
        //if (this.state."image"List) {
            //let "image"s = <tabbed"Image"s "image"s={this.state."image"List}></tabbed"Image"s>
        //}

        let images = <TabbedImages images={[<img src='./assets/pineapple.png' className={"image"}></img>,<img src='./assets/sunset.jpg' className={"image"}></img>,<img src='./assets/apple.jpg' className={"image"}></img>]}></TabbedImages>
=======
        let images = <TabbedImages images={[<img src='./assets/pineapple.png' className={"image"}></img>,<img src='./assets/trees.jpg' className={"image"}></img>,<img src='./assets/seth-rogen-premiere-this-is-the-end-04-copy.png' className={"image"}></img>]}></TabbedImages>
>>>>>>> master:client/containers/App.jsx

        return (
            <div className="App">
                <Header/>
                <Contents/>
            </div>
        )
        
    }
}