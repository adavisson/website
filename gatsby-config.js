module.exports = {
  siteMetadata: {
    title: `Andrew Davisson`,
    description: `Andrew Davisson's Portfolio Website`,
    author: 'Andrew Davisson'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
