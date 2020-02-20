import React, { Component } from 'react';
import '../styles.css';
import ImageUpload from '../components/ImageUpload.jsx';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import ZipForm from '../components/ZipForm.jsx';

const mapStateToProps = store => ({});

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
      <div className="contents">
        <ImageUpload
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
        />
        <ZipForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
