module.exports = {
  base: '/magic-page-designer-doc/',
  lang: 'zh-CN',
  title: 'magic-page-designer',
  description: '在线页面快速开发平台',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    lineNumbers: true
  },
  // 主题配置
  themeConfig: {
    logo: '/images/mpd@256x256.png',
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    contributors: true,
    contributorsText: '编著者',
    tip: '提示',
    // 头部导航
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/intro'
      },
      {
        text: '配置',
        link: '/config/intro'
      },
      {
        text: 'FAQ',
        link: '/question/intro'
      },
      {
        text: '演示地址',
        link: 'https://ssssssss-team.gitee.io/magic-page-designer-example'
      },
      {
        text: '更新日志',
        link: '/change-log/intro'
      },
      {
        text: '源码',
        children: [
          {
            text: 'Gitee',
            link: 'https://gitee.com/ssssssss-team/magic-page-designer'
          },
          {
            text: 'Github',
            link: 'https://github.com/ssssssss-team/magic-page-designer'
          }
        ]
      },
      {
        text: '其它开源',
        children: [
          {
            text: 'magic-api(Gitee)',
            link: 'https://gitee.com/ssssssss-team/magic-api'
          },
          {
            text: 'magic-api(Github)',
            link: 'https://github.com/ssssssss-team/magic-api'
          },
          {
            text: 'magic-script(Gitee)',
            link: 'https://gitee.com/ssssssss-team/magic-script'
          },
          {
            text: 'magic-script(Github)',
            link: 'https://gitee.com/ssssssss-team/magic-script'
          },
          {
            text: 'spider-flow(Gitee)',
            link: 'https://gitee.com/ssssssss-team/spider-flow'
          },
          {
            text: 'spider-flow(Github)',
            link: 'https://github.com/ssssssss-team/spider-flow'
          }
        ]
      },
      {
        text: '加入QQ群',
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Y_gU-hKxALOeTHLXK9ZDRu2n-1oOAgvN&jump_from=webapi'
      }
    ],
    // 设置根据页面标题自动生成的侧边栏的最大深度
    sidebarDepth: 2,
    // 侧边导航
    sidebar: {
      '/guide/': [
        {
          text: '使用教程',
          collapsable: false,
          children: ['intro', 'quick-start'].map((it) => `/guide/${it}`)
        },
        {
          text: '使用入门',
          collapsable: false,
          children: ['window-profile', 'variable'].map((it) => `/guide/started/${it}`)
        },
        {
          text: '组件库',
          collapsable: false,
          children: ['function', 'group', 'component'].map((it) => `/guide/library/${it}`)
        }
      ],
      '/config/': [
        {
          text: '配置',
          collapsable: false,
          children: ['intro', 'page-dom', 'component-library']
        }
      ],
      '/question/': [
        {
          text: 'FAQ',
          collapsable: false
        }
      ],
      '/change-log/': [
        {
          text: '更新日志',
          collapsable: false,
          children: ['intro', 'v0.x', 'v2.x']
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        searchMaxSuggestions: 10 // 默认是5
      }
    ],
    '@vuepress/back-to-top'
    // 'fulltext-search'
  ]
}
