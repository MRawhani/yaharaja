import React, { Component } from "react";
import Editable from "./Editable";

export default class EditableText extends Editable {
  renderInput = () => {
    const { isActive, value } = this.state;
    const { className, rows, cols } = this.props;
    if (isActive) {
      return (
        <React.Fragment>
          <textarea
            onChange={this.handleChange}
            value={value}
            className={className}
            rows={rows}
            cols={cols}
          ></textarea>
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
        <React.Fragment>
          <span className={className}>{value}</span>
          <button
            onClick={this.enableEdit}
            className="btn btn-warning"
            type="button"
          >
            تعديل
          </button>
        </React.Fragment>
      );
    }
  };
  render() {
    return this.renderInput();
  }
}
