import BookingForm from "../../components/BookingForm/BookingForm";
import "./Booking.scss";
import React, { useState } from "react";

function Booking() {
  return (
    <div>
      <h1>Booking page</h1>

      <form autocomplete="on">
        <div>
          <label htmlFor="firstName">
            First Name
            <input type="text" name="firstName" required></input>
          </label>
        </div>

        <div>
          <label htmlFor="lastName">
            Last Name
            <input type="text" name="lastName" required></input>
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email
            <input type="text" name="email" required></input>
          </label>
        </div>

        <div>
          <label htmlFor="phone">
            Phone
            <input type="text" name="phone" required></input>
          </label>
        </div>

        <div>
          <label htmlFor="over25">
            I certify that I am over the age of 25 at the time of my trip & I
            have a vaild drivers license
            <input
              type="checkbox"
              name="over25"
              value="over25"
              required
            ></input>
          </label>
        </div>

        <div>
          <label htmlFor="driversLicense">
            Drivers License Number
            <input type="text" name="driversLicense" required></input>
          </label>
        </div>

        <div>
          <label htmlFor="pickUpTime" required>
            Pick-Up Time
            <select id="pickUp" name="pickUp">
              <option value="8am-9am">8am - 9am</option>
              <option value="9am-10am">9am - 10am</option>
              <option value="10am-11am">10am - 11am</option>
              <option value="11am-12pm">11am - 12pm</option>
              <option value="12pm-1pm">12pm - 1pm</option>
              <option value="1pm-2pm">1pm - 2pm</option>
              <option value="2pm-3pm">2pm - 3pm</option>
              <option value="3pm-4pm">3pm - 4pm</option>
              <option value="4pm-5pm">4pm - 5pm</option>
              <option value="5pm-6pm">5pm - 6pm</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="dropOffTime" required>
            Drop-off Time
            <select id="dropOff" name="dropOff">
              <option value="8am-9am">8am - 9am</option>
              <option value="9am-10am">9am - 10am</option>
              <option value="10am-11am">10am - 11am</option>
              <option value="11am-12pm">11am - 12pm</option>
              <option value="12pm-1pm">12pm - 1pm</option>
              <option value="1pm-2pm">1pm - 2pm</option>
              <option value="2pm-3pm">2pm - 3pm</option>
              <option value="3pm-4pm">3pm - 4pm</option>
              <option value="4pm-5pm">4pm - 5pm</option>
              <option value="5pm-6pm">5pm - 6pm</option>
            </select>
          </label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Booking;
