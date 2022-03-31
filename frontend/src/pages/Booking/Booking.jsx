import "./Booking.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "../../components/Button/Button";

import "react-datepicker/dist/react-datepicker.css";

function NumberOfDays(startDate, endDate) {
  const departureDate = new Date(startDate).getTime();

  const returnDate = new Date(endDate).getTime();

  const dateDifference = (returnDate - departureDate) / 86400000;

  return dateDifference;
}

function Booking() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [protectionPrice, setProtectionPrice] = useState(150);

  const price = 125.75;

  let days = NumberOfDays(startDate, endDate);
  console.log(days);
  let totalCost = days * price;
  console.log(totalCost);

  return (
    <main className="booking-page">
      <h1 className="booking-page__title">Booking page</h1>
      <div className="booking-form">
        <div className="dates-and-cost">
          <section className="form-section">
            <h3 className="form-section__title">Trip Dates</h3>

            <div className="form-section__fields-container">
              <div className="form-section__field">
                <h4 className="form-section__label">Departure Date</h4>
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Select departure date"
                    monthsShown={2}
                  >
                    <div style={{ color: "#4289DF" }}>
                      Don't forget to check the weather!
                    </div>
                  </DatePicker>
                </div>
              </div>

              <div className="form-section__field">
                <h4 className="form-section__label">Return Date</h4>
                <div>
                  <DatePicker
                    // className="section__end-date-picker"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Select return date"
                    monthsShown={2}
                  >
                    <div style={{ color: "#4289DF" }}>
                      Don't forget to check the weather!
                    </div>
                  </DatePicker>
                </div>
              </div>
            </div>
          </section>

          <section className="form-section form-section--no-side-divider">
            <h3 className="form-section__title">Selected Van</h3>

            <div className="form-section__fields-container">
              <div className="form-section__field">
                <h4 className="form-section__label">number of nights</h4>
                <h4>{days}</h4>
              </div>

              <div className="form-section__field">
                <h4 className="form-section__label">van cost</h4>
                <h4>${totalCost}</h4>
              </div>

              <div>
                <label
                  className="form-section__field"
                  htmlFor="dropOffTime"
                  required
                >
                  <h4 className="form-section__label">
                    Protection Package (required)
                  </h4>
                  <select
                    id="dropOff"
                    name="dropOff"
                    onChange={(event) =>
                      setProtectionPrice(Number(event.target.value))
                    }
                  >
                    <option value="150">Basic ($150.75)</option>
                    <option value="250">Medium ($250.75)</option>
                    <option value="350">Most ($350.75)</option>
                  </select>
                </label>
              </div>

              <div className="form-section__field">
                <h4 className="form-section__label">
                  roadside assistance (required)
                </h4>
                <h4>$30.00</h4>
              </div>

              <div className="form-section__field">
                <h4 className="form-section__label">TOTAL COST</h4>
                <h4>${totalCost + 30 + protectionPrice}</h4>
              </div>
            </div>
          </section>
        </div>

        <section className="form-section form-section--no-divider form-section--no-side-divider personal-info">
          <h3 className="form-section__title">Personal info</h3>
          <form className="form-section__fields-container personal-info__form">
            <div>
              <label className="form-section__field" htmlFor="firstName">
                First Name
                <input type="text" name="firstName" required></input>
              </label>
            </div>

            <div>
              <label className="form-section__field" htmlFor="lastName">
                Last Name
                <input type="text" name="lastName" required></input>
              </label>
            </div>

            <div>
              <label className="form-section__field" htmlFor="email">
                Email
                <input type="text" name="email" required></input>
              </label>
            </div>

            <div>
              <label className="form-section__field" htmlFor="phone">
                Phone
                <input type="text" name="phone" required></input>
              </label>
            </div>

            <div>
              <label className="form-section__label over25" htmlFor="over25">
                I certify that I am over the age of 25 at the time of my trip &
                I have a vaild drivers license
                <input
                  type="checkbox"
                  name="over25"
                  value="over25"
                  required
                ></input>
              </label>
            </div>

            <div>
              <label className="form-section__field" htmlFor="driversLicense">
                Drivers License Number
                <input type="text" name="driversLicense" required></input>
              </label>
            </div>

            <div>
              <label
                className="form-section__field"
                htmlFor="pickUpTime"
                required
              >
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
              <label
                className="form-section__field"
                htmlFor="dropOffTime"
                required
              >
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

            <Button text={"submit"} />
          </form>
        </section>
      </div>
    </main>
  );
}

export default Booking;
