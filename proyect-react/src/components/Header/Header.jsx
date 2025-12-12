//Componete presentacional
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header>
      <Link to="/">
  <img 
    src="/images/logo.jpg" 
    alt="Logo"
    style={{ height: "50px", cursor: "pointer" }}
  />
</Link>
      <Nav />
    </header>
  );
};