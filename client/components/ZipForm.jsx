import React, { Component } from 'react';

export default class ZipForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="zipFormContainer">
        <input id="zipInput" type="text" />
        <button id="zipButton">Zip Files</button>
      </div>
    );
  }
}
