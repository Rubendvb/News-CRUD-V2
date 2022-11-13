import { Link } from "react-router-dom";

import "./Navbar.scss";
import iconValor from "../../assets/icon-valor.png";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function activateMenu() {
    setMenu(!menu);
  }

  return (
    <header>
      <div className="marginContainer">
        <nav className="navBar">
          <div onClick={activateMenu} className="navBar__flex">
            <div className="navBar__menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>Menu</div>
          </div>

          <ul className={`navBar__container ${menu === true ? "active" : ""}`}>
            <li onClick={activateMenu}>
              <Link to={"/"}>
                <img
                  className="navBar__container-img"
                  src={iconValor}
                  alt="Icon Valor"
                />
              </Link>
            </li>

            <li onClick={activateMenu}>
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={activateMenu}>
              <Link to={"/news"}>Criar notícia</Link>
            </li>
            <li onClick={activateMenu}>
              <Link to={"/news/update"}>Editar/Deletar notícia</Link>
            </li>
          </ul>
        </nav>

        <Link to={"/"}>
          <img
            className="marginContainer__img"
            src={iconValor}
            alt="Icon Valor"
          />
        </Link>
      </div>
    </header>
  );
}
