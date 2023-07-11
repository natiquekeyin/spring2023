const Card = ({ value }) => {
  return (
    <div className="card" style={{ backgroundColor: "#fff", color: "#000" }}>
      {value}
    </div>
  );
};

export default Card;
