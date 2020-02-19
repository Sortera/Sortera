import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        //if (this.state.imageList) {
            //let images = <tabbedImages images={this.state.imageList}></tabbedImages>
        //}

        let images = <tabbedImages images={[<img src='./assets/pineapple.png'></img>,<img src='./assets/trees.jpg'></img>,<img src='./assets/seth-rogen-premiere-this-is-the-end-04-copy.png'></img>]}></tabbedImages>

        return (
            <div>
            <p>test</p> 
            {images}
        </div>
        
        )
        
    }
}