//Componete presentacional
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header>
      <Link to={"/images/logo.jpg"}>LOGO</Link>
      <Nav />
    </header>
  );
};