import React, { Component } from "react";
import "../../assets/buttonStyles.css"
import ImageUpload from "../components/ImageUpload.jsx"
import * as actions from '../actions/actions'
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  zippedFolder: null,
});
  
const mapDispatchToProps = (dispatch, props) => ({
  onChange: (e) => { 
    e.preventDefault();
    console.log(e.value)
    console.log('array of files?', e.target.files)
    dispatch(actions.addImage(e.target.files)) 
  },
  onSubmit: (e) => {
    e.preventDefault();
    // set uploaded files to the server

    // fetch('/zip')
    // .then(res => res.json())
    // .then(zippedFolder => {
    //   console.log('zippedFolder: ', zippedFolder);
    // });

    console.log('event: ', event.target.files);

    var zip_file_path = '/sorteraSortedPhotos'; //put inside "" your path with file.zip
    var zip_file_name = '/zippedFile.zip'; //put inside "" file name or something
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = zip_file_path;
    a.download = zip_file_name;
    a.click();
    document.body.removeChild(a);
  },
  getData: () => {
    fetch('/zip')
    .then(res => res.json())
    .then(zippedFolder => {
      console.log('zippedFolder: ', zippedFolder);
    })
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
