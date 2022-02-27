const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  base: '/magic-api/',
  title: "magic-api",
  description: '一个基于VuePress的 知识管理&博客 主题',
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/images/favicon.png' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'magic-api,接口,接口开发,接口快速开发框架,Java,SpringBoot,低代码' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
    ['script', { src: '/magic-api.js', type: 'text/javascript' }],
    ["script", { 'data-ad-client': 'ca-pub-9417757127794923', async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }]
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南', link: '/pages/quick/intro/', items: [
          { text: '快速入门', link: '/pages/quick/intro/' },
          { text: '基础教程', link: '/pages/base/page/' },
          { text: '权限配置', link: '/pages/security/login/' },
          { text: '高级应用', link: '/pages/senior/interceptor/' },
          { text: '开发插件', link: '/pages/plugin/dev/' },
        ]
      },
      { text: 'API', link: '/pages/module/db/', items: [
          { text: '模块', link: '/pages/module/db/' },
          { text: '函数', link: '/pages/function/aggregation/' },
          { text: '扩展', link: '/pages/extension/object/' }
        ]
      },
      { text: '资源', items: [
          { text: 'Gitee', link: 'https://gitee.com/ssssssss-team/magic-api' },
          { text: 'Github', link: 'https://github.com/ssssssss-team/magic-api' },
          { text: '演示', link: 'https://magic-api.ssssssss.org/' }
        ]
      },
      {
        text: '配置', items: [
          { text: 'SpringBoot配置', link: '/pages/config/spring-boot/' },
          { text: '编辑器配置', link: '/pages/config/editor/' },
        ]
      },
      { text: '更新日志', link: '/pages/changelog/v2/', items: [
          { text: '2.x更新日志', link: '/pages/changelog/v2/' },
          { text: '1.x更新日志', link: '/pages/changelog/v1/' },
          { text: '0.x更新日志', link: '/pages/changelog/v0/' },
        ]
      },
      { text: '常见问题', link: '/pages/faq/' },
      { text: '💖支持', link: '/pages/sponsor/' },
      { text: 'QQ群(739235910)', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Q6dLmVS8cHwoaaP18A3tteK_o0244e6B&jump_from=webapi' }
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/images/logo-magic-api.png', // 导航栏logo
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
    },
    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'mxd', // 必需
      href: 'https://gitee.com/jmxd' // 可选的
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: '<a href="https://ssssssss.org/">ssssssss.org</a> | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    ['fulltext-search'], // 全文搜索
    [
      "vuepress-plugin-baidu-tongji",
      {
        hm: "fbccde4bd38f2e47bed0e903930e1d28"
      }
    ],
    [require('./plugins/lastest'),{
			repos:[{
				keywords: 'magic-api-lastest-version',
				type: "maven",
				repo: "org.ssssssss/magic-api",
			},{
				keywords: 'spring-boot-latest-version',
				type: "maven",
				repo: "org.springframework.boot/spring-boot-starter-parent",
			}]
		}],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
      }
    ]
  ],
}
