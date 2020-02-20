import React, { Component } from "react";
import "../styles.css"

export default class Contents extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        

        return (
            <div className="contents">
                <div className="center">
                <form onSubmit={this.props.onSubmit}>
                <input type="file" multiple="multiple" required></input>
                <br/> <br/>
                <button className="active" type="submit" >
                    <p>upload file</p>
                    <div className="loading"></div>
                    <div className="fa fa-check"></div>
                </button>
                </form>
                </div>
            </div>
        )
        
    }
}