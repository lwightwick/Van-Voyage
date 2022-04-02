import "./Header.scss";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  if (window)
    return (
      <section className="header">
        <NavMenu />
      </section>
    );
}

export default Header;
