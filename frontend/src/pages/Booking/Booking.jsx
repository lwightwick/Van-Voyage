import "./Booking.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PersonalInfoForm from "../../components/PersonalInfoForm/PersonalInfoForm";

function NumberOfNights(startDate, endDate) {
  const departureDate = new Date(startDate).getTime();

  const returnDate = new Date(endDate).getTime();

  const dateDifference = (returnDate - departureDate) / 86400000;

  return Math.ceil(dateDifference);
}

function Booking() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [protectionPrice, setProtectionPrice] = useState(150);

  const price = 125.75;
  let days = 0;
  if (endDate) {
    days = NumberOfNights(startDate, endDate);
  }
  let totalCost = days * price;

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
                    minDate={new Date()}
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
                    id="protectionPackage"
                    name="protectionPackage"
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
          <PersonalInfoForm />
        </section>
      </div>
    </main>
  );
}

export default Booking;
