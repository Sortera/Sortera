import React, { Component } from "react";
import TabbedImages from '../components/TabbedImages.jsx'
import Header from './Header.jsx'
import Contents from './Contents.jsx'
import "../../assets/styles.css"
import "@babel/polyfill";
import Login from "./Login.jsx";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  images: state.images,
  state: state,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (e) => { 
    e.preventDefault();
    dispatch(actions.addImage(e.target.files));
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }
    
  render () {
    console.log('app props', this.props)
    console.log('state', this.props.state)
    let images = <TabbedImages images={this.props.images}></TabbedImages>

    return (
      <div className="App" style={{height:"100vh"}}>
        <Header/>
        <Contents/>
        <Login/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
