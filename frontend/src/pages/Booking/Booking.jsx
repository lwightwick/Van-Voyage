import "./Booking.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

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

  const price = 125.25;

  let days = NumberOfDays(startDate, endDate);
  console.log(days);
  let totalCost = days * price;
  console.log(totalCost);

  return (
    <main className="booking-page">
      <h1 className="booking-page__title">Booking page</h1>
      <div className="booking-form">
        <div className="dates-cost">
          <section className="date-picker">
            <h3 className="date-picker__title">Trip Dates</h3>

            <div className="date-picker__calendars">
              <div className="date-picker__calendar">
                <h4 className="date-picker__subtitle">Departure Date</h4>
                <DatePicker
                  className="date-picker__start-date-picker"
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
              <div className="date-picker__calendar">
                <h4 className="date-picker__subtitle">Return Date</h4>
                <DatePicker
                  className="date-picker__end-date-picker"
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
          </section>

          <section className="trip-cost">
            <div>
              <h3>Selected Van</h3>
              <p>date range in here from date picker</p>
              <p>number of nights calculated</p>
              <p>total cost for nights</p>
            </div>
            <div>
              <label htmlFor="dropOffTime" required>
                Protection Package
                <select
                  id="dropOff"
                  name="dropOff"
                  onChange={(event) =>
                    setProtectionPrice(Number(event.target.value))
                  }
                >
                  <option value="150">Basic ($150.00)</option>
                  <option value="250">Medium ($250.00)</option>
                  <option value="350">Most ($350.00)</option>
                </select>
              </label>
            </div>
            <div>
              <p>roadside assistance (required)</p>
              <p>$30.00</p>
            </div>

            <div>
              <h3>TOTAL COST</h3>
              <h3>$ {totalCost + 30 + protectionPrice}</h3>
            </div>
          </section>
        </div>

        <section>
          <form>
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
        </section>
      </div>
    </main>
  );
}

export default Booking;
