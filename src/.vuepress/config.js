module.exports = {
    title: 'Vivid Dev',
    description: 'Blog by Harry Horton',
    base:'/vividdev.com/',
    dest:'public',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/posts/' }
        ],
        sidebar: ['/','/posts/',{
            title: 'Group 2',
            collapsable: false,
            children: ['/','/posts/']
          }]
    }
}