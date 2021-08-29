module.exports = {
	title: 'magic-api',
	description: '一个接口快速开发框架',
	head: [
		["link", {rel: "icon", href: '/favicon.ico'}],
		["script", { "crossorigin": "anonymous", async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9417757127794923" }]
	],
	markdown:{
		lineNumbers : true
	},
	theme: 'reco',
	base: '/magic-api/',
	themeConfig: {
		subSidebar: 'auto',
		logo: '/images/logo-magic-api.png',
		docsRepo : 'javamxd/ssssssss-site',
		docsDir : '/magic-api-doc',
		lastUpdated: "上次更新",
		searchMaxSuggestions: 10,
		noFoundPageByTencent: false,
		mode: 'light',
		modePicker: false,
		nav : [{
			text : '指南',
			link : '/#index'
		}, {
			text : '配置',
			link : '/config/'
		},{
			text : '源码',
			items : [{
				text : 'Gitee',
				link : 'https://gitee.com/ssssssss-team/magic-api'
			},{
				text : 'Github',
				link : 'https://github.com/ssssssss-team/magic-api'
			}]
		},{
			text : '演示地址',
			link : 'https://magic-api.ssssssss.org'
		},{
			text : '更新日志',
			link : '/changelog'
		},{
			text : 'QQ群(739235910)',
			link : 'https://qm.qq.com/cgi-bin/qm/qr?k=Q6dLmVS8cHwoaaP18A3tteK_o0244e6B&jump_from=webapi'
		}],
		sidebar:{
			'/config/' : [{
				title : '配置',
				collapsable: false,
				children: ['','magic-editor']
			}],
			'/' : [{
				title : '介绍',
				collapsable: false,
				children: ['','guide/quick-start']
			},{
				title : '使用入门',
				collapsable: false,
				children: ['images', 'grammar', 'parameter', 'datasource', 'crud', 'json', 'page','async','convert', 'validate', 'java', 'doc', 'deploy'].map(it => `tutorials/${it}`)
			},{
				title : '权限配置',
				collapsable: false,
				children: ['login', 'operation', 'api'].map(it => `authorization/${it}`)
			},{
				title: '模块&函数&类型扩展',
				collapsable: false,
				children: ['module', 'function', 'extension'].map(it => `script/${it}`)
			},{
				title : '高级应用',
				collapsable: false,
				children: ['linq', 'interceptor', 'cache', 'resource',  'sql', 'column','language', 'dialect'].map(it => `guide/custom/${it}`)
			},{
				title : 'FAQ',
				collapsable: false,
				children: ['guide/faq']
			}]
		}
    },
	plugins : [
		[require('./plugins/stat')],
		[require('./plugins/lastest'),{
			repos:[{
				keywords: 'magic-api-lastest-version',
				type: "maven",
				repo: "org.ssssssss/magic-api",
			}]
		}],
		['fulltext-search'],
		['@vuepress-reco/vuepress-plugin-back-to-top']
	]
}