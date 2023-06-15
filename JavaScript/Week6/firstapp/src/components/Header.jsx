import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <>
      <div className="header">
        <h1>{title}</h1>
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          someFunction={onAdd}
        />
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
