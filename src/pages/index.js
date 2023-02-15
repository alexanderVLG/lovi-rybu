import * as React from "react"
import { css } from "@emotion/react";
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
        width={400}
        height={400}
        css={css`
          margin: 20px 0 100px 0;
        `}
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (<Seo />)
