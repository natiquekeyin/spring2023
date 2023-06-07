import PropTypes from "prop-types";

function Header({ title, body }) {
  return (
    <>
      <div className="header">
        <h1>{title}</h1>
        <button className="btn">Add</button>
      </div>
    </>
  );
}
Header.defaultProps = {
  title: "To do List",
  body: "Default text here",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const myStyle = {
  color: "green",
  backgroundColor: "black",
  width: 400,
};

export default Header;
