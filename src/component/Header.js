import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/*function Header({ text }) {
  return (
    <div className="container">
      <h1>Feedback UI</h1>
    </div>
  );
}
*/

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "#ff6a95" }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
