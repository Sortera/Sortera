import React, { Component } from 'react';
import '../../assets/buttonStyles.css';
import ImageUpload from '../components/ImageUpload.jsx';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import ZipForm from '../components/ZipForm.jsx';

const mapStateToProps = state => ({
  zippedFile: state.zippedFile,
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
  }
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
        <ZipForm zippedFile={this.props.zippedFile}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
