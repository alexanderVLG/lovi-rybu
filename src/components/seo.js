import React from "react";
import useSiteMetadata from "../hooks/use-siteMetadata";

const Seo = () => {
  const {title, description} = useSiteMetadata();
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )
}

export default Seo