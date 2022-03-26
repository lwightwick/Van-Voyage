import "./Booking.scss";
import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
// import "../../components/DatePicker/DatePicker.scss";

import "react-datepicker/dist/react-datepicker.css";

// function NumberOfDays(startDate, endDate) {
//   var Days;

//   Days = endDate - startDate;

//   return Days;
// }

function Booking() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //   const price = 5.99;

  //   let days = NumberOfDays(this.startDate, this.endDate);
  //   let totalCost = days * price;
  //   console.log(days);

  return (
    <main>
      <h1>Booking page</h1>
      <section>
        <h3>Trip Dates</h3>
        <div>
          <h3>Departure Date</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select your departure date"
            monthsShown={2}
          >
            <div style={{ color: "red" }}>
              Don't forget to check the weather!
            </div>
          </DatePicker>
          <h3>Return Date</h3>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select your return date"
            monthsShown={2}
          >
            <div style={{ color: "red" }}>
              Don't forget to check the weather!
            </div>
          </DatePicker>
        </div>
      </section>

      <section>
        <div>
          <h3>Selected Van</h3>
          <p>date range in here from date picker</p>
          <p>number of nights calculated</p>
          <p>total cost for nights</p>
        </div>
        <div>
          <p>basic protection package</p>
          <p>$150.00</p>
        </div>
        <div>
          <p>roadside assistance (required)</p>
          <p>$30.00</p>
        </div>

        <div>
          <h3>TOTAL COST</h3>
          <h3>total cost calculation</h3>
        </div>
      </section>

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
      </section>
    </main>
  );
}

export default Booking;
