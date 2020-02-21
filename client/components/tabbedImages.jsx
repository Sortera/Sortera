import { Component } from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { addTabbedImages } from "../actions/actions";

export default class TabbedImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taggedImages: []
    }
  }
  componentDidUpdate() {
    let newTaggedImages = [...this.state.taggedImages]; 
    let newUrls = [];
    if (newTaggedImages.length === 0) {
      let predictions;  
      const predictImage = async (image) => {
        console.log("Model loading...");
        const model = await mobilenet.load();
        console.log("Model is loaded!")
        predictions = await model.classify(image);
        console.log('Predictions: ', predictions);
      }
      let images = document.getElementsByClassName('image');
      const imageTagger = async (images) => {
        for (let i = 0; i < images.length; i += 1) {
          let image = images[i];
          // console.log('in component did mount tabbedimages', images)
          await predictImage(image);
          // console.log('img.src', image.src);
          let newImageUrl = [predictions[0].className.split(' ').join('').split(',').join('')] + '.' + this.props.images[i].name.split('.')[1];
          newUrls.push(newImageUrl);
          // console.log(newImageUrl);
          // console.log('before' , this.state.taggedImages);
          newTaggedImages.push((<div>
            <img src={image.src} className={'image'}></img>
            <label> {newImageUrl} </label>
          </div>));
          console.log('after', this.state.taggedImages);
        }
        
        this.setState({
          taggedImages: newTaggedImages
        });
        //need to dispatch new array to state, also new fileNames
        let formData = new FormData();
        console.log(this.props.images)
        this.props.images.forEach((image, i) => {
          formData.append(newUrls[i], image)
        });
        for (var key of formData.entries()) {
          console.log(key[0] + ', ' + key[1]);
        }
        this.props.sendToReducer(formData);
        // console.log('sending this to reducer', images, newUrls)
      }
      // console.log('before calling imageTagger')
      imageTagger(images);
    }
  }

  render() {
    let originalImages = this.props.images;
    console.log('in tabbedImages', originalImages)
    // let values = Array.entries(originalImages);
    // console.log('values', values);
    const imageElements = originalImages.map((image, index) => {
      return <img key={index} src={URL.createObjectURL(image)} className={'image'}></img>
    });
    console.log('is there taggedimages', this.state.taggedImages);
    return (
      <div>
        {(this.state.taggedImages.length > 0) ? this.state.taggedImages : imageElements} 
      </div>
    );
  }
}