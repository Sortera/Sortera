import React, { Component } from 'react';

export default class ZipForm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log(this.props.zippedFile)
    // if (this.props.zippedFile) let button = <form method="get" action="../../server/zippedFile.zip">
    // //   <button type="submit">Download!</button>
    // //   </form>;
    // let button = <form method="get" action="../../server/controllers/zippedFile.zip">
    //   <button type="submit">Download!</button>
    //   </form>;
  }
  render() {
    let button = <button id="zipButton">
    Zip Files
    <i id="zipIcon" className="far fa-file-archive"></i>
    </button>;
    if (this.props.zippedFile) {button = <form method="get" action="../../server/controllers/zippedFile.zip">
      <button type="submit" id="download-btn">Download!</button>
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
