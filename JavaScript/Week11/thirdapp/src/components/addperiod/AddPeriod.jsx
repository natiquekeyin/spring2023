const AddPeriod = ({ name }) => {
  return <div>Period {name ? `${name}.` : ""}</div>;
};

AddPeriod.defaultProps = {
  name: "",
};

export default AddPeriod;
