import React, { Component } from "react";
import Editable from "./Editable";
import RentalFileUpload from "./../form/RentalFileUpload";

export default class EditableInput extends Editable {
  handleChange = image => {
    this.setState({
      value: image
    });
    this.update();
  };
  render() {
    const { isActive, value } = this.state;
    return (
      <div>
        {!isActive && (
          <React.Fragment>
            <img
              src={value}
              alt="img detail"
              style={{ height: "360px", width: "550px" }}
            />
            <button
              onClick={this.enableEdit}
              className="btn btn-warning "
              type="button"
            >
              تعديل
            </button>
          </React.Fragment>
        )}
        {isActive && (
          <React.Fragment>
            <button
              onClick={this.disableEdit}
              className="btn btn-warning"
              type="button"
            >
              اغلاق
            </button>
            <RentalFileUpload onChange={this.handleChange}></RentalFileUpload>
          </React.Fragment>
        )}
      </div>
    );
  }
}
