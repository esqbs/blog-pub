(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{576:function(t,n,s){"use strict";s.r(n);var a=s(30),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常用git命令清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用git命令清单"}},[t._v("#")]),t._v(" 常用Git命令清单")]),t._v(" "),s("p",[t._v("一般来说，日常使用只要记住下图6个命令，就可以了。但是熟练使用，恐怕要记住60～100个命令。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png",alt:"img"}})]),t._v(" "),s("p",[t._v("下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("Workspace：工作区")]),t._v(" "),s("li",[t._v("Index / Stage：暂存区")]),t._v(" "),s("li",[t._v("Repository：仓库区（或本地仓库）")]),t._v(" "),s("li",[t._v("Remote：远程仓库")])])]),t._v(" "),s("h2",{attrs:{id:"一、新建代码库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、新建代码库"}},[t._v("#")]),t._v(" 一、新建代码库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前目录新建一个Git代码库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个目录，将其初始化为Git代码库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载一个项目和它的整个代码历史")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"二、配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、配置"}},[t._v("#")]),t._v(" 二、配置")]),t._v(" "),s("p",[t._v("Git的设置文件为"),s("code",[t._v(".gitconfig")]),t._v("，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前的Git配置")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑Git配置文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config -e "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置提交代码时的用户信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n")])])]),s("h2",{attrs:{id:"三、增加-删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、增加-删除文件"}},[t._v("#")]),t._v(" 三、增加/删除文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件到暂存区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定目录到暂存区，包括子目录")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前目录的所有文件到暂存区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加每个变化前，都会要求确认")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于同一个文件的多处变化，可以实现分次提交")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -p\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除工作区文件，并且将这次删除放入暂存区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止追踪指定文件，但该文件会保留在工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改名文件，并且将这个改名放入暂存区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file-original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file-renamed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"四、代码提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交"}},[t._v("#")]),t._v(" 四、代码提交")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区的指定文件到仓库区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交工作区自上次commit之后的变化，直接到仓库区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交时显示所有diff信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用一次新的commit，替代上一次提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果代码没有任何新变化，则用来改写上一次commit的提交信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重做上一次commit，并包括指定文件的新变化")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("h2",{attrs:{id:"五、分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、分支"}},[t._v("#")]),t._v(" 五、分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有远程分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支和远程分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，但依然停留在当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，并切换到该分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向指定commit")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，与指定的远程分支建立追踪关系")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --track "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到指定分支，并更新工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到上一个分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立追踪关系，在现有分支与指定的远程分支之间")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择一个commit，合并进当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -dr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote/branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"六、标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、标签"}},[t._v("#")]),t._v(" 六、标签")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个tag在当前commit")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个tag在指定commit")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tag信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交指定tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交所有tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --tags\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向某个tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"七、查看信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、查看信息"}},[t._v("#")]),t._v(" 七、查看信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示有变更的文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的版本历史")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示commit历史，以及每次commit发生变更的文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索提交历史，根据关键词")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -S "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("keyword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个commit之后的所有变动，每个commit占据一行")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" HEAD --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:%s\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件')]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" HEAD --grep feature\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个文件的版本历史，包括文件改名")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --follow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" whatchanged "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件相关的每一次diff")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示过去5次提交")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -5 --pretty --oneline\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有提交过的用户，按提交次数排序")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" shortlog -sn\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件是什么人在什么时间修改过")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和工作区的差异")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和上一个commit的差异")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示工作区与当前分支最新commit之间的差异")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示两次提交之间的差异")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("first-branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("second-branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示今天你写了多少行代码")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --shortstat "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@{0 day ago}"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交的元数据和内容变化")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交发生变化的文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show --name-only "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交时，某个文件的内容")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的最近几次提交")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),s("h2",{attrs:{id:"八、远程同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、远程同步"}},[t._v("#")]),t._v(" 八、远程同步")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远程仓库的所有变动")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有远程仓库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个远程仓库的信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加一个新的远程仓库，并命名")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取回远程仓库的变化，并与本地分支合并")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传本地指定分支到远程仓库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强行推送当前分支到远程仓库，即使有冲突")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --force\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送所有分支到远程仓库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --all\n")])])]),s("h2",{attrs:{id:"九、撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、撤销"}},[t._v("#")]),t._v(" 九、撤销")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复暂存区的指定文件到工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复某个commit的指定文件到暂存区和工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复暂存区的所有文件到工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置暂存区与工作区，与上一次commit保持一致")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前HEAD为指定commit，但保持暂存区和工作区不变")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --keep "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个commit，用来撤销指定commit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后者的所有变化都将被前者抵消，并且应用到当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂时将未提交的变化移除，稍后再移入")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n")])])]),s("h2",{attrs:{id:"十、常用操作组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十、常用操作组合"}},[t._v("#")]),t._v(" 十、常用操作组合")]),t._v(" "),s("h3",{attrs:{id:"_1-修改本地分支名和远程分支名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改本地分支名和远程分支名"}},[t._v("#")]),t._v(" 1. 修改本地分支名和远程分支名")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m old_branch new_branch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重命名本地分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :old_branch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程旧分支（分支名前有冒号）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin new_branch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送新的分支，并设置本地分支跟踪新的远程分支")]),t._v("\n")])])]),s("p",[s("strong",[t._v("相关文章：")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/12/git-undo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何撤销 Git 操作？》"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《git cherry-pick 教程》"),s("OutboundLink")],1),t._v(" 复制某分支上的部分提交到另一个分支上（相对于可以选择指定提交的 rebase 操作）。")]),t._v(" "),s("blockquote",[s("p",[t._v("命令清单来源：https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html")])])])}),[],!1,null,null,null);n.default=e.exports}}]);