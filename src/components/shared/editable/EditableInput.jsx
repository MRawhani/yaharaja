import React, { Component } from "react";
import Editable from "./Editable";

export default class EditableInput extends Editable {

  renderInput = () => {
    const { isActive, value } = this.state;
    const { className,type='text' } = this.props;
    if (isActive) {
      return (
        <React.Fragment>
          <input
            onChange={this.handleChange}
            value={value}
            className={className}
            type={type}
          />
            <button
            onClick={this.update}
            className="btn btn-success"
            type="button"
          >
            حفظ
          </button>
          <button
            onClick={this.disableEdit}
            className="btn btn-warning"
            type="button"
          >
            اغلاق
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <span className={className}>{value}</span>
          <button
            onClick={this.enableEdit}
            className="btn btn-warning"
            type="button"
          >
            تعديل
          </button>
        </div>
      );
    }
  };
  render() {
    return this.renderInput();
  }
}
