import { Component } from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import React from 'react'
import ReactDOMServer from 'react-dom/server';
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
  let images = document.getElementsByClassName('image')
  let taggedImages = [];
  const imageTagger = async (images) => {
    for (let i = 0; i < images.length; i += 1) {
      let image = images[i];
      console.log(image)
      await predictImage(image);
      taggedImages.push(
        <div>
          {image}
          <label> {predictions[0].className + '.png'} </label>
        </div>
        ) 
      }
  }
  imageTagger(images);
  // images = images.forEach(async (image) => {
  //   console.log(image)
  // //call predictImage on each image tag, and push the new labelled image to array for render
  // image = ReactDOMServer.renderToStaticMarkup(image);
  // console.log(image)
  // await predictImage(image);
  // taggedImages.push(
  //   <div>
  //     {image}
  //     <label> {predictions[0].className + '.png'} </label>
  //   </div>
  //   ) 
  // })
  //need to dispatch filenames to states
}
render() {
  let taggedImages =  taggedImages || this.props.images;


  return (
    <div>
       {taggedImages}
    </div>
   
    )
}


}