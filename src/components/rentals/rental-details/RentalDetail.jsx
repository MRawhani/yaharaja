import React, { Component } from "react";
import { connect } from "react-redux";
import RentalMap from "./RentalMap";
import { fetchRentalById,updateRental } from "../../../actions";
import helper from "./../../../helpers";
import Booking from "../../booking/Booking";
import RentalDetailInfo from "./RentalDetailInfo";
import RentalDetailUpdate from "./RentalDetailUpdate";
import EditableImage from "./../../shared/editable/EditableImage";
class RentalDetail extends Component {
  constructor() {
    super();
    this.state = {
      bookingEditable: false
    };
  }
  componentDidMount() {
    // const rentaId= parseInt(this.props.match.params.id,10);
    const { isUpdate } = this.props.location.state || false;

    isUpdate && this.bookingUpdate();
    this.props.fetchRentalById(this.props.match.params.id);
  }
  bookingUpdate = () => {
    this.setState({
      bookingEditable: true
    });
  };
   updateRentalData = (id,rentalData) => {
    debugger;
    this.props.updateRental(id, rentalData);
  };
  renderDetails = (rental, colorClassname, errors) => {
    const { isUpdate } = this.props.location.state || false;

    return isUpdate ? (
      <React.Fragment>
        <RentalDetailUpdate
          rental={rental}
          colorClassname={colorClassname}
          updateRental={this.updateRentalData}
          errors={errors}
        />
      </React.Fragment>
    ) : (
      <RentalDetailInfo rental={rental} colorClassname={colorClassname} />
    );
  };

  render() {
    const { isUpdate } = this.props.location.state || false;
    const { rental, errors } = this.props;
    const colorClassname = helper.getCategoryEnglish(`${rental.category}`);
    if (rental._id) {
      return (
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                {!isUpdate && (
                  <img
                    src={rental.image}
                    alt="img detail"
                    style={{ height: "360px", width: "550px" }}
                  />
                )}
                {isUpdate && (
                  <EditableImage entity={rental} entityValue="image" updateEntity={this.updateRentalData}/>
                )}
              </div>
              <div className="col-md-6">
                <RentalMap location={`${rental.city},${rental.street}`} />
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                {this.renderDetails(rental, colorClassname, errors)}
              </div>
              <div className="col-md-4">
                {" "}
                <Booking
                  rental={rental}
                  bookingEditable={this.state.bookingEditable}
                  urlId={this.props.match.params.id}
                />{" "}
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <h3>loading...</h3>;
    }
  }
}

const mapStateToProps = state => {
  return {
    rental: state.rental.data,
    errors: state.rental.errors
  };
};

export default connect(mapStateToProps, { fetchRentalById,updateRental })(RentalDetail);
