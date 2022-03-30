import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/logo.svg";

import NavMenu from "../NavMenu/NavMenu";

// function Header() {
//   return (
//     <main>
//       <section className="header__container">
//         <div>
//           <Link to="/home" key="home-link">
//             <img className="logo" src={Logo} alt="logo" />
//           </Link>
//         </div>
//       </section>
//       <section>
//         <NavMenu />
//       </section>
//     </main>
//   );
// }

function Header() {
  return (
    <main className="header">
      <NavMenu />
    </main>
  );
}

export default Header;
