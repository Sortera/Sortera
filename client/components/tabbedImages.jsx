import { Component } from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import React from 'react'
import ReactDOMServer from 'react-dom/server';
export default class TabbedImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taggedImages: []
    };
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
    const imageTagger = async (images) => {
      let newTaggedImages = [...this.state.taggedImages];
      for (let i = 0; i < images.length; i += 1) {
        let image = images[i];
        console.log(images)
        await predictImage(image);
        let newImageUrl = [predictions[0].className.split(' ').join('').split(',').join('')] + '.' + image.src.split('.')[1];
        console.log(newImageUrl)
        console.log('before' , this.state.taggedImages)
        newTaggedImages.push((<div>
          <img src={this.props.images[i].path} className={'image'}></img>
          <label> {newImageUrl} </label>
        </div>));
        console.log('after', this.state.taggedImages)
      }
      this.setState({
        taggedImages: newTaggedImages
      });
    }
    imageTagger(images);
    //need to dispatch new array to state, also new fileNames
  }

  render() {
    let originalImages = this.props.images;
    console.log('in tabbedImages', originalImages);
    // let values = Array.entries(originalImages);
    // console.log('values', values)
    const imageElements = originalImages.map(image => {
      return <img src={image.path} className={'image'}></img>
    });
    return (
      <div>
        {(this.state.taggedImages.length > 0) ? this.state.taggedImages : imageElements}
      </div>
    );
  }
}