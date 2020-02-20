import React, { Component } from 'react';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.props.onSubmit}>
          <input
            id="chooseFiles"
            type="file"
            multiple="multiple"
            onChange={this.props.onChange}
            required
          ></input>
          <br /> <br />
          <button className="active" type="submit">
            <p>
              upload file
              <i id="uploadIcon" class="fas fa-arrow-circle-up"></i>
            </p>

            <div className="loading"></div>
            <div className="fa fa-check"></div>
          </button>
        </form>
      </div>
    );
  }
}
