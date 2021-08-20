module.exports = {
	title: 'magic-api',
	description: '一个接口快速开发框架',
	head: [["link", {rel: "icon", href: '/favicon.ico'}]],
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
		mode: 'light',
		modePicker: false,
		nav : [{
			text : '指南',
			link : '/'
		},{
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
			'/' : [{
				title : '使用教程',
				collapsable: false,
				children: ['','guide/quick-start','guide/grammer']
			},{
				title : '案例集',
				collapsable: false,
				children: ['guide/cases/sql','guide/cases/transcation','guide/cases/convert','guide/cases/validate','guide/cases/cache','guide/cases/async']
			},{
				title: '模块',
				collapsable: false,
				children: ['guide/modules/db', 'guide/modules/magic', 'guide/modules/assert', 'guide/modules/log', 'guide/modules/redis', 'guide/modules/mongodb', 'guide/modules/request', 'guide/modules/response', 'guide/modules/env', 'guide/modules/http']
			},{
				title: '函数库',
				collapsable: false,
				children: ['guide/functions/aggregation', 'guide/functions/other']
			}, {
				title: '类型扩展',
				collapsable: false,
				children: ['guide/extension/','guide/extension/object','guide/extension/number','guide/extension/date','guide/extension/collection','guide/extension/map','guide/extension/class','guide/extension/pattern']
			},{
				title : '高级应用',
				collapsable: false,
				children: ['guide/custom/vue',`guide/custom/cluster`, 'guide/custom/linq', 'guide/custom/json', 'guide/custom/page', 'guide/custom/interceptor', 'guide/custom/authorization', 'guide/custom/cache', 'guide/custom/datasource', 'guide/custom/extension', 'guide/custom/resource', 'guide/custom/module', 'guide/custom/magic', 'guide/custom/swagger', 'guide/custom/sql', 'guide/custom/column', 'guide/custom/function','guide/custom/language', 'guide/custom/dialect']
			},{
				title : 'FAQ',
				collapsable: false,
				children: ['guide/faq']
			}],
			'/config/' : [{
				title : '配置',
				collapsable: false,
				children: ['','magic-editor']
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