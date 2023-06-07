function Header({ title = "default", body = "default" }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
}
// Header.defaultProps = {
//   title: "To do List",
//   body: "Default text here",
// };

export default Header;
