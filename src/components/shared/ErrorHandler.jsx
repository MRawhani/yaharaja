import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default function ErrorHandler(props) {
  debugger;
  const handleErrors = () => {
    const { errors } = props;
    if (errors && errors.length > 0) {
      if (errors[0].detail === "jwtExpired") {
        return (
          <Redirect
            to={{ pathname: "/login", state: { tokenExoired: true } }}
          />
        );
      } else {
        return toast.error(errors[0].detail);
      }
    }
  };
  const { errors, resetErrors } = props;

  debugger;
  return (
    <React.Fragment>
      {errors && errors.length > 0 && errors[0].detail === "jwt expired" && (
       <>
        <Redirect to={{ pathname: "/login", state: { tokenExoired: true } }} />
        resetErrors()
       </>
      )}
      {errors && errors.length > 0 ? toast.error(errors[0].detail) : null}
    </React.Fragment>
  );
}
