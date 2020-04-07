module.exports = {
  siteMetadata: {
    title: `BAARD 理髪店`,
    description: `令和元年10月3日葛飾区亀有にオープン。落ち着いた店内で癒しのひとときを。 ベタつき、匂い、かゆみなどお悩みの方へワンランク上の頭皮ケアと上質なシェービングがおすすめ。`,
    keywords: `葛飾区,亀有,亀有床屋,亀有理容室,亀有理髪店,ヘアサロン,barber,床屋,理髪店,理容室,バールト理髪店`,
    siteUrl: `https://baard.tokyo`,
    author: `@soichiro_nitta`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans\:400,700`, `Noto Sans JP\:400,700`],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg/`
        }
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ]
}
