import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Header = ({ title, onAdd, showAdd, logout }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button variant="primary" onClick={onAdd}>
        {showAdd ? "Close" : "Add"}
      </Button>
      <Button variant="primary" onClick={() => logout()}>
        Logout
      </Button>
    </header>
  );
};

Header.defaultProps = {
  title: "To-do List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;
