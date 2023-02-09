
module.exports = {
  siteMetadata: {
    title: "Блог о рыбалке",
    description: "Блог о рыбалке. Рыбалка на фидер."
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-emotion`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
        isBaseProvider: false,
      },
    }, 
  ],
}
