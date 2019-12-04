import React, { Component } from "react";
import {connect} from 'react-redux'
import helper from "./../../helpers/index";
import EditableSelect from "../shared/editable/EditableSelect";
import {updateRental} from './../../actions'
import EditableInput from "../shared/editable/EditableInput";
class BookingEditable extends Component {
    editRental = rentalData => {
        
        debugger
        this.props.updateRental(this.props.urlId,rentalData)
      };
  render() {
    const { className, rental } = this.props;
    return (
      <div>
          <EditableInput  entity={rental}
          entityValue={"price"}
          className={className}
          updateEntity={this.editRental}
          type='number'
          />
    <br/>
        <EditableSelect
          entity={rental}
          entityValue={"coin"}
          className={className}
          updateEntity={this.editRental}
          options={helper.getCoinsArray()}
        />
        <br />
      </div>
    );
  }
}

export default connect(null,{updateRental})(BookingEditable)