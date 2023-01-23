import * as React from "react"
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"
import "./index.scss";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Блог о рыбалке">
      <StaticImage
        className="hero__img"
        src="../images/hero_img.jpg" 
        alt="Фото пойманного мной подлещика на фидер, которого я в дальнейшем отпустил обратно в реку Преголь"
        placeholder="blurred"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (<Seo />)
