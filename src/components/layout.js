import React from "react";
import { Link } from "gatsby";
import {Global, css} from "@emotion/react";

const Layout = ({pageTitle, children}) => {
  return (
    <>
      <Global 
        styles={css`
        :root {
          --alabaster: #EAEDE7ff;
          --green-sheen: #63BCAFff;
          --dark-cyan: #24908Bff;
          --dark-slate-gray: #1E575Aff;
          --khaki-web: #BDAD95ff;
        }

        html {
          box-sizing: border-box;
        }
        
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
          font-size: 18px;
          line-height: 1.4;
          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }

        ul, ol {
          margin: 0;
          padding: 0;
          list-style: none;
        }

      `}
      />
      <div>
        <nav>
          <ul>
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