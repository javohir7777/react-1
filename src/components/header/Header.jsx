import "./Header.css";
const Header = () => {
  let a = 5;
  let b = 7;
  let res = a + b;
  return (
    <header className="header">
      Header {a} + {b} = {res} {res > 0 ? "Musbat son" : "Manfiy son"}
    </header>
  );
};
export default Header;
