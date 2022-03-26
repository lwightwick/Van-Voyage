import "./Header.scss";
// import HeaderForm from './Pages/HeaderForm/HeaderForm';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/home" key="home-link">
          Home
        </Link>

        <Link to="/van-details" key="van-details-link">
          Van Details
        </Link>

        <Link to="/about" key="about-link">
          about
        </Link>

        <Link to="/booking" key="booking-link">
          book my Trip
        </Link>

        <Link to="/contact" key="contact-link">
          contact
        </Link>

        <Link to="/places-to-go" key="places-to-go-link">
          Places to Go
        </Link>
      </div>
    </header>
  );
}

export default Header;
