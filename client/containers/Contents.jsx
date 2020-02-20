import React, { Component } from "react";
import "../styles.css"
import ImageUpload from "../components/ImageUpload.jsx"
export default class Contents extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        

        return (
            <div className="contents">
                <ImageUpload />
            </div>
        )
        
    }
}