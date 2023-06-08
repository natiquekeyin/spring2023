import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, body }) {
  const onClick = (e) => {
    console.log("Click", e);
  };
  return (
    <>
      <div className="header">
        <h1>{title}</h1>
        <Button text="Add" color="green" someFunction={onClick} />

        <Button text="Delete" color="red" someFunction={onClick} />
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
