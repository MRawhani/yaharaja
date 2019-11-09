import React, { Component } from "react";
import { connect } from "react-redux";
import RentalList from "./RentalList";
import { fetchRentals } from "../../../actions";
import Hero from "../../shared/Hero";
class RentalListing extends Component {
  componentDidMount() {
    
    this.props.fetchRentals();
  }
  render() { 
    
    return (
      <div className="container">
        <Hero />
        <section id="rentalListing mt-4">
          <h1 className="page-title">البيوت والشقق المعروضة</h1>
          <RentalList rentals={this.props.rentals} />
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    rentals: state.rentals.data
  };
};
export default connect(
  mapStateToProps,
  { fetchRentals }
)(RentalListing);
