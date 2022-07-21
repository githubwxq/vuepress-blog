module.exports = {
  base: '/blog/',
  title: "科技趣玩",
  description: "分享各类资源、教程、黑科技软件、工具等等",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
 nav: [
            { text: '首页', link: '/' },
            {
                text: 'Nonoas 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/Nonoas' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/weixin_44155115' }
                ]
            }],
    sidebar: [
      {
        title: '软件资源',
        children: ['/软件资源/a.md' ],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
       {
              title: '软件资源bb',
              children: ['/软件资源/b.md' ],
              initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            }
    ]
  },
};