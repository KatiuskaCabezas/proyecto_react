//Componete presentacional

import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/category/capilar"}>Capilar</Link>
        </li>
        <li>
          <Link to={"/category/corporal"}>Corporal</Link>
        </li>
      </ul>
    </nav>
  );
};