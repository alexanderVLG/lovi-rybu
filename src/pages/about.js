import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <h2>О блоге</h2>
      <p>В этом блоге вы найдете для себя много интересных статей о</p>
      <Link to="/">Обратно на главную</Link>
    </main>
  )
}

export const Head = () => <title>О блоге</title>

export default AboutPage;