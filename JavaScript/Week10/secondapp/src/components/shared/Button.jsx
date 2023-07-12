const Button = ({ children, isDisabled, version, type }) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
