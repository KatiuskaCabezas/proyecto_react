//Componete presentacional

import { Link } from "react-router-dom";

export const Nav = () => {
  const { getTotalItems } = useCartContext();


  return (
    <nav>
      <ul>
        <li>
          <Link to={"/category/capilar"}>Capilar</Link>
        </li>
        <li>
          <Link to={"/category/corporal"}>Corporal</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};