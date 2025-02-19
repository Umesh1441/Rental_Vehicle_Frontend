import React from "react";
import Fast_Booking from "../images/icons/fast.png";
import Collection from "../images/icons/collection.png";
import Insurance from "../images/icons/insurance.png";
import Map from "../images/icons/map.png";
import Pay from "../images/icons/pay.png";
import Support from "../images/icons/support.png";

const Services = () => {
  return (
    <div>
      <section class="we-offer-area text-center bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-heading text-center">
                <h2 className="heading-service">
                  Why Choose<span> US</span>?
                </h2>
              </div>
            </div>
          </div>
          <div class="row our-offer-items less-carousel">
            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-pen-fancy">
                  <img src={Fast_Booking} alt="error" className="icon-image" />
                </i>
                <h4>Fast & Easy Booking</h4>
                <p>
                Fast & Easy Booking with Dhigaliya Cars: Reserve Your Ride in Minutes!
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-dharmachakra">
                  <img src={Map} alt="error" className="icon-image" />
                </i>
                <h4>Any Pickup Location</h4>
                <p>
                Any Pickup Location with Dhigaliya Cars: Convenient and Flexible Rentals!
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tasks">
                  <img src={Pay} alt="error" className="icon-image" />
                </i>
                <h4>No Booking Charges</h4>
                <p>
                Zero Booking Charges: Enjoy Hassle-Free Rentals with Dhigaliya Cars!
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tachometer-alt">
                  <img src={Collection} alt="error" className="icon-image" />
                </i>
                <h4>Free Maintenance</h4>
                <p>
                Unlock the Road to Carefree Driving with Dhigaliya Cars!
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-recycle">
                  <img src={Insurance} alt="error" className="icon-image" />
                </i>
                <h4>Fully Insured</h4>
                <p>
                Fully Insured Vehicles, Ensuring Your Peace of Mind on Every Journey.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-headset">
                  <img src={Support} alt="error" className="icon-image" />
                </i>
                <h4>24/7 Support</h4>
                <p>
                24/7 Support for Your Car Rental Needs, Anytime, Anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
