import React, { useState, useEffect } from "react";
import "./PersonalInfoForm.scss";
import Button from "../Button/Button";

function PersonalInfoForm(props) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    over25: "",
    driversLicense: "",
    pickUp: "",
    dropOff: "",
    startDate: props.startDate,
    endDate: props.endDate,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(false);
  //   setFormValues(initialValues);
  // };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(false);
    setFormValues(initialValues);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
    if (!values.over25) {
      errors.over25 = "You must be over 25 to rent a van!";
    }

    if (!values.driversLicense) {
      errors.driversLicense =
        "You must have a valid drivers license to rent a van!";
    }

    if (!values.pickUp) {
      errors.pickUp = "Please select a pick-up time!";
    }

    if (!values.dropOff) {
      errors.dropOff = "Please select a drop-off time!";
    }

    if (!values.startDate) {
      errors.startDate = "Please select a departure date above!";
    }
    if (!values.endDate) {
      errors.endDate = "Please select a return date above!";
    }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success-message">
          Thank you for submitting your booking! We will be in touch via email
          shortly with next steps.
        </div>
      ) : (
        <pre>{}</pre>
      )}

      <form
        className="form-section__fields-container personal-info__form"
        // onSubmit={handleSubmit}
        onSubmit={(e) => handleSubmit(formErrors && e)}
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
        <p className="error-message">{formErrors.firstName}</p>

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
        <p className="error-message">{formErrors.lastName}</p>
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
        <p className="error-message">{formErrors.email}</p>
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
        <p className="error-message">{formErrors.phone}</p>
        <div>
          <label className="form-section__label over25" htmlFor="over25">
            I certify that I am over the age of 25 at the time of my trip & I
            have a vaild drivers license
            <input
              type="checkbox"
              name="over25"
              value={formValues.over25 ? "" : "checked"}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <p className="error-message">{formErrors.over25}</p>
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
        <p className="error-message">{formErrors.driversLicense}</p>
        <div>
          <label
            className="form-section__field"
            htmlFor="pickUpTime"
            onChange={handleChange}
            value={formValues.pickUp}
          >
            Pick-Up Time
            <select id="pickUp" name="pickUp">
              <option hidden value="pickUp">
                select a pick-up time
              </option>
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
        <p className="error-message">{formErrors.pickUp}</p>
        <div>
          <label
            className="form-section__field"
            htmlFor="dropOffTime"
            onChange={handleChange}
            value={formValues.dropOff}
          >
            Drop-off Time
            <select id="dropOff" name="dropOff">
              <option hidden value="dropOff">
                select a drop-off time
              </option>
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
        <p className="error-message">{formErrors.dropOff}</p>
        <p className="error-message">{formErrors.startDate}</p>
        <p className="error-message">{formErrors.endDate}</p>
        <Button text={"submit"} type="submit" />
      </form>
    </div>
  );
}

export default PersonalInfoForm;
