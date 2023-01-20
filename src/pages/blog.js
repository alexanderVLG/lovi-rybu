import React from "react";
import { Link } from "gatsby";

const BlogPage = () => {
  return (
    <main>
      <h2>Блог</h2>
      <p>Страница для статей</p>
      <Link to="/">Обратно на главную</Link>
    </main>
  )
}

export const Head = () => <title>Статьи о рыбалке</title>

export default BlogPage;