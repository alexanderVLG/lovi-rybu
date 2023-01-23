import React from "react";
import { Link } from "gatsby";

const Layout = ({pageTitle, children}) => {

  return (
    <>
      <div className="layout__container">
        <nav>
          <ul className="nav__list">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/review">Обзоры</Link></li>
          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout