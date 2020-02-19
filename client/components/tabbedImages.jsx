import { Component } from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import React from 'react'

export default class TabbedImages extends Component {
    constructor(props) {
        super(props);

    }

componentDidMount() {
  let predictions;
  const predictImage = async (image) => {
    console.log("Model loading...");
    const model = await mobilenet.load();
    console.log("Model is loaded!")
    predictions = await model.classify(image);
    console.log('Predictions: ', predictions);
    
   
      
  }
  let images = this.props.images;
  let taggedImages = [];
  
  images = images.forEach(async (image) => {
  //call predictImage on each image tag, and push the new labelled image to array for render
  await predictImage(image);
  taggedImages.push(
    <div>
      {image}
      <label> {predictions[0].className + '.png'} </label>
    </div>
    ) 
  })
  //need to dispatch filenames to states
}
render() {
  let taggedImages =  this.props.images;


  return (
    <div>
       {taggedImages}
    </div>
   
    )
}


}