import "./Header.scss";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <div>
      <Nav />
    </div>
  );
}

// function Header() {
//   return (
//     <header className="header">
//       <section className="header__container">
//         <div className="header__logo">
//           <Link to="/home" key="home-link">
//             <img className="logo" src={Logo} alt="logo" />
//           </Link>
//         </div>

//         <div>
//           <span />
//           <span />
//           <span />
//         </div>

//         <Link className="header__link" to="/van-details" key="van-details-link">
//           Van Details
//         </Link>

//         <Link className="header__link" to="/about" key="about-link">
//           about
//         </Link>

//         <Link className="header__link" to="/booking" key="booking-link">
//           book my Trip
//         </Link>

//         <Link className="header__link" to="/contact" key="contact-link">
//           contact
//         </Link>

//         <Link
//           className="header__link"
//           to="/places-to-go"
//           key="places-to-go-link"
//         >
//           Places to Go
//         </Link>
//       </section>
//     </header>
//   );
// }

export default Header;
