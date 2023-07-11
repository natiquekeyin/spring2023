import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return <header style={headerStyle}>{text}</header>;
};

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.5)",
  textColor: "#f3f31c",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
