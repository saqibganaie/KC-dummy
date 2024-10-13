import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          Kashmir Crafted
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
