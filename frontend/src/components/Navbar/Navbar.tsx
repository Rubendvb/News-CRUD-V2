import { Link } from "react-router-dom";

import "./Navbar.scss";
import iconValor from "../../assets/icon-valor.png";

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul className="navBar__container">
        <li className="navBar__container-textMenu">Menu</li>

        <li>
          <Link to={"/"}>
            <img
              className="navBar__container-img"
              src={iconValor}
              alt="Icon Valor"
            />
          </Link>
        </li>

        <li>
          <Link to={"/criar-noticia"}>Criar Notícia</Link>
        </li>
      </ul>
    </nav>
  );
}
