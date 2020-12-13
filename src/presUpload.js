import React, { Component } from "react"; 
// import Prescription from "./photo/DefaultPrescribe.png"
class DisplayImage extends Component {

    upload(e){
      console.warn(e.target.files)
      const files = e.target.files
      const formData = new FormData();
      fetch('./photo/DefaultPrescribe.png', {
        method
      }) 
    }
  render() {
    return(
      <div>
        <h1>
          Upload your Prescription Here
        </h1>
        <input type="file" onChange={(=>this.upload(e)} name="prescription" />
      </div>
    )
  }