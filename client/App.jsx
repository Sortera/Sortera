import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        if (this.state.imageList) {
            let images = <tabbedImages images={this.state.imageList}></tabbedImages>
        }
        return (
            <div>
            <p>test</p> 
            {images}
        </div>
        
        )
        
    }
}