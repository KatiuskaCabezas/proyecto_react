//Componete presentacional
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav"

import "./Header.css";

export const Header = () => {
    return <header>
        <Link to={"/"}>Logo</Link>
        <Nav/>

    </header>
}