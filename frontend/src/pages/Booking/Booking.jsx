import "./Booking.scss";
import React, { useState, useEffect } from "react";
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
  let totalCost = days * price;

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    over25: false,
    driversLicense: "",
    pickUp: "",
    dropOff: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    console.log(values);
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "This is not a valid phone number format!";
    }
    if (values.over25 === false) {
      console.log("validation");
      console.log(values.over25);
      errors.over25 = "You must be over 25 to rent a van!";
    }

    if (!values.driversLicense) {
      errors.driversLicense =
        "You must have a valid drivers license to rent a van!";
    }
    return errors;
  };

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

          <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">
                Thank you for submitting your booking! We will be in touch via
                email shortly with next steps.
              </div>
            ) : (
              <pre>{}</pre>
            )}

            <form
              className="form-section__fields-container personal-info__form"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="form-section__field" htmlFor="firstName">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <p>{formErrors.firstName}</p>

              <div>
                <label className="form-section__field" htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <p>{formErrors.lastName}</p>
              <div>
                <label className="form-section__field" htmlFor="email">
                  Email
                  <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <p>{formErrors.email}</p>
              <div>
                <label className="form-section__field" htmlFor="phone">
                  Phone
                  <input
                    type="text"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <p>{formErrors.phone}</p>
              <div>
                <label className="form-section__label over25" htmlFor="over25">
                  I certify that I am over the age of 25 at the time of my trip
                  & I have a vaild drivers license
                  <input
                    type="checkbox"
                    name="over25"
                    value={!formValues.over25}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <p>{formErrors.over25}</p>
              <div>
                <label className="form-section__field" htmlFor="driversLicense">
                  Drivers License Number
                  <input
                    type="text"
                    name="driversLicense"
                    value={formValues.driversLicense}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <p>{formErrors.driversLicense}</p>
              <div>
                <label
                  className="form-section__field"
                  htmlFor="pickUpTime"
                  onChange={handleChange}
                >
                  Pick-Up Time
                  <select id="pickUp" name="pickUp" value={formValues.pickUp}>
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
              <p>{formErrors.pickUp}</p>
              <div>
                <label
                  className="form-section__field"
                  htmlFor="dropOffTime"
                  onChange={handleChange}
                >
                  Drop-off Time
                  <select
                    id="dropOff"
                    name="dropOff"
                    value={formValues.dropOff}
                  >
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
              <p>{formErrors.dropOff}</p>
              <Button text={"submit"} type="submit" />
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Booking;
