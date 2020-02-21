import React, { Component } from 'react';
import '../../assets/buttonStyles.css';
import ImageUpload from '../components/ImageUpload.jsx';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import ZipForm from '../components/ZipForm.jsx';
import ImageContainer from '../components/ImageContainer.jsx';

const mapStateToProps = state => ({
  zippedFile: state.zippedFile,
  images: state.images,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    e.preventDefault();
    console.log(e.value);
    console.log('array of files?', e.target.files);
    dispatch(actions.addImage(e.target.files));
  },
  onSubmit: e => {
    e.preventDefault();
  },
  sendToReducer: (formData) => {
    dispatch(actions.addTabbedImagesAsync(formData))
  },
});

class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contents" style={{ height: '100%' }}>
        <ImageUpload
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
        />
        <ImageContainer zippedFile={this.props.zippedFile} sendToReducer={this.props.sendToReducer} images={this.props.images}></ImageContainer>
        <ZipForm zippedFile={this.props.zippedFile}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
