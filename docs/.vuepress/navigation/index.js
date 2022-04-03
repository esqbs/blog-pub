module.exports = [
	{ text: '首页', link: '/' },
	{
		text: '学习笔记',
		link: '/note/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
		items: [
			// 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
			{
				text: '前端文章',
				items: [{ text: 'JavaScript', link: '/pages/8143cc480faf9a11/' }],
			},
		],
	},
	{
		text: '日常记录',
		link: '/record/',
		items: [
			{ text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
			{ text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
		],
	},
	{ text: '关于', link: '/about/' },
	{
		text: '收藏',
		link: '/pages/beb6c0bd8a66cea6/',
	},
	{
		text: '索引',
		link: '/archives/',
		items: [
			{ text: '分类', link: '/categories/' },
			{ text: '标签', link: '/tags/' },
			{ text: '归档', link: '/archives/' },
		],
	},
];
