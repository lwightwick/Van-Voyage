import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/logo.svg";

import NavMenu from "../NavMenu/NavMenu";

function Header() {
  return (
    <section className="header">
      <NavMenu />
    </section>
  );
}

export default Header;
