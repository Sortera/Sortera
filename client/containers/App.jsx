import React, { Component } from "react";
import TabbedImages from '../components/TabbedImages.jsx'
import Header from './Header.jsx'
import Contents from './Contents.jsx'
import "../../assets/styles.css"
import "@babel/polyfill";
import Login from "./Login.jsx";
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from "react-router-dom";

const mapStateToProps = state => ({
  images: state.images,
  state: state,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (e) => { 
    e.preventDefault();
    dispatch(actions.addImage(e.target.files));
  },
  sendToReducer: (formData) => {
    dispatch(actions.addTabbedImagesAsync(formData))
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }
    
  render () {

    return (
      <div className="App" style={{height:"100vh"}}>
          <Router>
            <div>
              <Route exact path="/">
                <Header/>
                <Contents/>
              </Route>
              <Route path="/signin">
                <Login />
              </Route>
            </div>
          </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
