import React, { Component } from "react";
import "../../assets/buttonStyles.css"
import ImageUpload from "../components/ImageUpload.jsx"
import * as actions from '../actions/actions'
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  });
  
  const mapDispatchToProps = dispatch => ({
    onSubmit: (images) => { dispatch(actions.addImage(images)) },
   
  });

class Contents extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        
        return (
            <div className="contents">
                <ImageUpload onSubmit={this.props.onSubmit}/>
            </div>
        )
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Contents);