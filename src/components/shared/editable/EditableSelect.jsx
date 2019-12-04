import React, { Component } from "react";
import Editable from "./Editable";

export default class EditableSelect extends Editable {
  renderOptions = options => {
    return options.map((option, i) => {
      return <option value={option.value}>{option.text}</option>;
    });
  };
  renderInput = () => {
    const { isActive, value } = this.state;
    const { className, options } = this.props;
    if (isActive) {
      return (
        <React.Fragment>
          <select
            onChange={this.handleChange}
            value={value}
            className={className}
          >
            {this.renderOptions(options)}
          </select>
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
