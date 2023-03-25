module.exports = {
    pathPrefix: '/',
    assetPrefix: 'https://opensource.tophat.com/',
    siteMetadata: {
        title: 'Top Hat Open Source',
        description:
            'Open Source at Top Hat: working to make education & technology open to the world',
        author: 'Top Hat',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#803ed7',
                theme_color: '#803ed7',
                display: 'minimal-ui',
                icon: 'src/images/favicon/favicon-32x32.png',
                legacy: false,
            },
        },
        'gatsby-plugin-gatsby-cloud',
    ],
}
