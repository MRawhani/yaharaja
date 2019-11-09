import React from "react";

export const RenderInput = ({
  input,
  label,
  type,
  className,
  sympol,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div className={"input-group"}>
      {sympol && (
        <div className="input-group-prepend">
          <div className="input-group-text">{sympol}</div>
        </div>
      )}
      <input {...input} type={type} className={className} />
    </div>
    {touched && (error && <div className="alert alert-danger">{error}</div>)}
  </div>
);
