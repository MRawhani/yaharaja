import React from "react";
import RentalAssets from "./RentalAssets";

export default props => {
  const { rental,colorClassname } = props;
  return (
    <>
      <div className="rental">
        <h2 className={`rental-type ${colorClassname}`}>
          {rental.city} &#183; {rental.street}
        </h2>
        <div className="rental-owner">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="owner"
          />
          <span>{rental.user && rental.user.username}</span>
        </div>

        <h1 className="rental-title">{rental.title}</h1>
        <h2 className={`rental-city  ${colorClassname}`}>
          {rental.category} &#183; {rental.type}
        </h2>

        <p className="rental-description">{rental.description}</p>
        <hr></hr>
        <RentalAssets rentals={rental} />
      </div>
    </>
  );
};
