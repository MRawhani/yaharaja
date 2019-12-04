import React from "react";
import RentalAssets from "./RentalAssets";
import EditableInput from "../../shared/editable/EditableInput";
import {toast,Toastify, ToastContainer} from 'react-toastify'
import { connect } from "react-redux";
import { updateRental, resetRentalErrors } from "./../../../actions";
import EditableText from "../../shared/editable/EditableText";
import EditableSelect from "../../shared/editable/EditableSelect";
import helper from "./../../../helpers/index";
import ErrorHandler from "../../shared/ErrorHandler";
class RentalDetailUpdate extends React.Component {
  resetErrors = () => {
    debugger
    this.props.resetRentalErrors();
  };
  updateRental = (id,rentalData) => {
    debugger;
    this.props.updateRental(id, rentalData);
  };
  render() {
    const { rental, colorClassname, errors } = this.props;
    
    return (
      <>
      {errors && errors.length>0 &&  <ErrorHandler errors={errors} resetErrors={this.resetErrors} />
    }
        <div className="rental">
          <EditableInput
            entity={rental}
            entityValue={"city"}
            className={`rental-type ${colorClassname}`}
            updateEntity={this.updateRental}
            errors={errors}
            resetErrors={this.resetErrors}
          />
          <br></br>
          <EditableInput
            entity={rental}
            entityValue={"street"}
            className={`rental-type ${colorClassname}`}
            updateEntity={this.updateRental}
            errors={errors}
            resetErrors={this.resetErrors}
          />
          <br></br>
          <div className="rental-owner">
            <img
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt="owner"
            />
            <span>{rental.user && rental.user.username}</span>
          </div>

          <EditableInput
            entity={rental}
            entityValue={"title"}
            className="rental-title"
            updateEntity={this.updateRental}
            errors={errors}
            resetErrors={this.resetErrors}
          />
          <br />
          <EditableSelect
            entity={rental}
            entityValue={"category"}
            className={`rental-city  ${colorClassname}`}
            updateEntity={this.updateRental}
            options={helper.getCategoriesArray()}
            errors={errors}
            resetErrors={this.resetErrors}
          />
          <br /><br/>

          <EditableText
            entity={rental}
            entityValue={"description"}
            className="rental-description"
            updateEntity={this.updateRental}
            rows={6}
            cols={16}
            errors={errors}
            resetErrors={this.resetErrors}
          />

          <hr></hr>
          <RentalAssets rentals={rental} />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(null, {  resetRentalErrors })(
  RentalDetailUpdate
);
