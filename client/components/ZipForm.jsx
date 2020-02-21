import React, { Component } from 'react';

export default class ZipForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let button = <button id="zipButton">
    Zip Files
    <i id="zipIcon" className="far fa-file-archive"></i>
    </button>;
    if (this.props.zippedFile) {button = <form method="get" action="../../server/controllers/zippedFile.zip">
      <button type="submit">Download!</button>
      </form>;
    }
    
    return (
      <div id="zipFormContainer">
        <input id="zipInput" type="text" />
        {button}
      </div>
    );
  }
}
