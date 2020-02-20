import React, { Component } from "react";
import "../../assets/buttonStyles.css"
import ImageUpload from "../components/ImageUpload.jsx"
import * as actions from '../actions/actions'
import { connect } from 'react-redux';

const mapStateToProps = store => ({
});
  
const mapDispatchToProps = dispatch => ({
  onChange: (e) => { 
    e.preventDefault();
    console.log(e.value)
    console.log('array of files?', e.target.files)
    dispatch(actions.addImage(e.target.files)) 
  },
  onSubmit: (e) => {
    e.preventDefault();
    // set uploaded files to the server
  }
});

class Contents extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className="contents">
        <ImageUpload onSubmit={this.props.onSubmit} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
