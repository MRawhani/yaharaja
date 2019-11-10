import React, { Component } from "react";
import * as actions from './../../../actions'
export default class rentalFileUpload extends Component {
  constructor() {
    super();
    this.setupReader();
    this.state = {
      selectedFile: undefined,
      imageBase64: "",
      pending: false,
      status:'INIT'
    };
  }
  setupReader = () => {
    this.reader = new FileReader();
    this.reader.addEventListener("load", e => {
      this.setState({
        imageBase64: e.target.result
      });
    });
  };
  onChange = event => {
  
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.setState({
        selectedFile
      });
    }
    this.reader.readAsDataURL(selectedFile);
  
  };
  onSuccess=img=>{
    const {
      input: { onChange }
    } = this.props;
      onChange(img);
      this.setState({pending:false,status:'DONE'})
  }
  renderSpinning=()=>{
    const {pending} = this.state;
    if(pending){
     return(
      <div className="img-loading-overlay">
      <div className="img-spinning-circle">

      </div>
    </div>
     )
    }
  }
  renderImageStatus = ()=>{
    const { status} = this.state;
    debugger
    if(status==='DONE'){
      return <div className="alert alert-success">تم الرفع</div>
    }
    if(status==='FAIL'){
      return <div className="alert alert-fail">خطأ في الرفع</div>
    }
  }
  onError=err=>{
    this.setState({pending:false,status:'FAIL'})
  }
  uploadImage = () => {
    const { selectedFile} = this.state;
    if(selectedFile){
      this.setState({pending:true,status:'INIT'})
      actions.uploadImage(selectedFile).then(
        (uploadedImage)=> { 
          this.onSuccess(uploadedImage)},
        (error)=>{this.onError(error)}
      )
    }
  };
  render() {
    const {
      meta: { touched, error }
    } = this.props;
    const { selectedFile, imageBase64 } = this.state;
    return (
      <div>
        <div className="img-upload-container">
          <label className="img-upload btn bg-primary">
            <span className="upload-text">اختار صورة</span>
            <input
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={this.onChange}
            />
          </label>
          {selectedFile && (
            <button
              className="btn btn-success btn-upload"
              type="button"
              disabled={!selectedFile}
              onClick={this.uploadImage}
            >
              رفع
            </button>
          )}
          {touched &&
            (error && <div className="alert alert-danger">{error}</div>)}
          {imageBase64 && (
            <div className="img-preview-container">
              <div
                className="img-preview"
                style={{ backgroundImage: "url(" + imageBase64 + ")" }}
              ></div>
              {this.renderSpinning()}
            </div>

            
          )}
        </div>
        {this.renderImageStatus()}
      </div>
    );
  }
}
