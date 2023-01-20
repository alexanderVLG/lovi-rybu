import React from "react";
import { Link } from "gatsby";

const ReviewPage = () => {
  return (
    <main>
      <h2>Обзоры</h2>
      <p>Страница для обзоров</p>
      <Link to="/">Обратно на главную</Link>
    </main>
  )
}

export const Head = () => <title>Обзоры товаров для рыбалки</title>

export default ReviewPage