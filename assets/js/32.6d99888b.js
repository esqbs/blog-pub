(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{351:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.nginx.org.cn/article/detail/545",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 从入门到实践，万字详解！_SHERlocked_93的博客-NGINX开源社区"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" udpate\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" gnupg2 ca-certificates lsb-release\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])]),s("h2",{attrs:{id:"文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[t._v("#")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/etc/nginx/nginx.conf "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主配置文件")]),t._v("\n/etc/nginx/conf.d/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 子配置文件")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("user nobody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行用户，默认即是nginx，可以不进行设置")]),t._v("\nworker_processes "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx 进程数，一般设置为和 CPU 核数一样")]),t._v("\npid /run/nginx.pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx 服务启动时的 pid 存放位置")]),t._v("\ninclude /etc/nginx/modules-enabled/*.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        worker_connections "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("768")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个进程允许最大并发数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# multi_accept on;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Basic Settings")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n\n        sendfile on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        tcp_nopush on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        types_hash_max_size "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server_tokens off;")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server_names_hash_bucket_size 64;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server_name_in_redirect off;")]),t._v("\n\n        include /etc/nginx/mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件扩展名与类型映射表")]),t._v("\n        default_type application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认文件类型")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSL Settings")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dropping SSLv3, ref: POODLE")]),t._v("\n        ssl_prefer_server_ciphers on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logging Settings")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n\n        access_log /var/log/nginx/access.log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        error_log /var/log/nginx/error.log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx 的错误日志存放目录")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gzip 压缩")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_types：要采用 gzip 压缩的 MIME 文件类型，其中 text/html 被系统强制启用；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_static：默认 off，该模块启用后，Nginx 首先检查是否存在请求静态文件的 gz 结尾的文件，如果有则直接返回该 .gz 文件内容；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_proxied：默认 off，nginx做为反向代理时启用，用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_vary：用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_comp_level：gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_buffers：获取多少内存用于缓存压缩结果，16 8k 表示以 8k*16 为单位获得；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_min_length：允许压缩的页面最小字节数，页面字节数从header头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_http_version：默认 1.1，启用 gzip 所需的 HTTP 最低版本；")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_vary on;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_proxied any;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_comp_level 6;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_buffers 16 8k;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_http_version 1.1;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Virtual Host Configs")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n\n        include /etc/nginx/conf.d/*.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        include /etc/nginx/sites-enabled/*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"conf-d下的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conf-d下的文件"}},[t._v("#")]),t._v(" conf.d下的文件")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("include")]),t._v(" 会将conf.d下的文件包含到对应位置")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义转发分配规则")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 轮询")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t* max_fails：设置在fail_timeout设置的时间内的最大失败次数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t* fail_timeout：与max_fails结合使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t* fail_time：服务器会被认为停机的时间长度， 默认 10s")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t* backup：标记该服务器为备用服务器，当主服务器停止时，请求会发送给它")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t* down：标记服务器停机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 权重")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. ip_hash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. least_conn")]),t._v("\nupstream myserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# least_conn; # 把请求分派给连接数最少的服务器")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip_hash; # 保证每个请求固定访问一个后端服务器")]),t._v("\n    server localhost:8080  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要转发到的服务器，如ip、ip:端口号、域名、域名:端口号")]),t._v("\n    server localhost:8081  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该台服务器接受2/6的请求量")]),t._v("\n    server localhost:8082  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该台服务器接受3/6的请求量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcharset utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n  \tlisten "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server_name  www.test.com localhost;\t\t# 匹配明确的域名（可以填多个，Nginx不会去验证DNS）")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server_name  *.test.com;\t\t\t\t\t# 以 *. 开头，模糊匹配")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server_name  www.test.*;\t\t\t\t\t# 以 .* 结尾")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server_name  ~^(?<www>.+)\\.test\\.com$;\t\t# 正则表达式")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#server_name  "";\t\t\t\t\t\t\t# 空字符串，不会匹配任何域名')]),t._v("\n\tserver_name www.test.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vue history")]),t._v("\n\tlocation / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_set_header Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root /web/front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index /index.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        try_files "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后端api")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header Host $host;")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将原始请求的 Host 头部信息传递给后端服务器")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header X-Real-IP $remote_addr;")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 X-Real-IP 头部，将其值设为客户端的 IP 地址。这允许后端服务器获取到客户端的实际 IP，而不是 Nginx 服务器的 IP")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 X-Forwarded-For 头部，用于记录客户端的原始 IP 地址和任何中间代理服务器的 IP 地址。这对于后端服务器追踪请求的来源非常有用。")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_set_header X-Forwarded-Proto $scheme;")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 X-Forwarded-Proto 头部，用于告知后端服务器原始请求使用的协议（HTTP 或 HTTPS）。这对于后端服务器生成正确的 URL 或进行安全相关的决策非常重要")]),t._v("\n\tlocation  /api/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_set_header Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header X-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header REMOTE-HOST "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header X-Forwarded-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tadd_header Access-Control-Allow-Methods *"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tadd_header Access-Control-Allow-Origin "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_origin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_pass http://myserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图片缓存时间设置")]),t._v("\n    location ~ .*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("swf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("woff"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("woff2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("eot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("svg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ttf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("otf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("mp3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("m4a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("aac"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        expires 10d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# expires -1;不缓存")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 防盗链")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# valid_referers 指令可以用来获取 Referer 头域中的值，并且根据该值的情况给 Nginx全局变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t* none: 检测Referer头域不存在的情况")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# \t* blocked： 检测Referer头域的值被防火墙或者代理服务器删除或伪装的情况。那么在这种情况下，该头域的值不以"http://" 或 "https://" 开头')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t* server_names: 设置一个或多个URL，检测Referer头域的值是否是URL中的某个")]),t._v("\n    location ~* "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gif"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("webp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只允许 192.168.0.1 请求资源")]),t._v("\n        valid_referers none blocked "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$invalid_referer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           rewrite ^/ http://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v("/logo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rewrite regex replacement [flag];")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rewrite：URL重写指令")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# regex：用于匹配URI的正则表达式")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# replacement：将regex正则匹配到的内容替换成 replacement")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flag: flag标记, 值如下")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t* last: 本条规则匹配完成后，继续向下匹配新的location URI 规则")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t* break: 本条规则匹配完成即终止，不再匹配后面的任何规则")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t* redirect: 返回302临时重定向，浏览器地址会显示跳转新的URL地址")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t* permanent: 返回301永久重定向。浏览器地址会显示跳转新的URL地址")]),t._v("\n    location  /api/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\trewrite ^/api/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_pass http://127.0.0.1:8000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    \n    location /static "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v("\t/usr/share/nginx/html/static"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源目录, 实际路径：alias ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#root\t/usr/share/nginx/html; # root 实际路径： root + location")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#autoindex               on;    # off(默认)开启静态资源列目录， 上面的charset utf-8;解决乱码")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#autoindex_exact_size    off;   # on(默认)显示文件的确切大小，单位是byte；off显示文件大概大小，单位KB、MB、GB")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#autoindex_localtime     off;   # off(默认)时显示的文件时间为GMT时间；on显示的文件时间为服务器时间")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全部转https")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SSL 默认访问端口号为 443")]),t._v("\n listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请填写绑定证书的域名")]),t._v("\n server_name cloud.tencent.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请填写证书文件的相对路径或绝对路径")]),t._v("\n ssl_certificate  cloud.tencent.com_bundle.crt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请填写私钥文件的相对路径或绝对路径")]),t._v("\n ssl_certificate_key cloud.tencent.com.key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n ssl_session_timeout 5m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。")]),t._v("\n ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("NULL:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("MD5:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ADH:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("RC4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请按照以下协议配置")]),t._v("\n ssl_protocols TLSv1.2 TLSv1.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n ssl_prefer_server_ciphers on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#网站主页路径。此路径仅供参考，具体请您按照实际目录操作。 ")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#例如，您的网站主页在 Nginx 服务器的 /etc/www 目录下，则请修改 root 后面的 html 为 /etc/www。")]),t._v("\n   root html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   index index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请填写绑定证书的域名")]),t._v("\n server_name cloud.tencent.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#把http的域名请求转成https")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/document/product/400/6814",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL 证书 免费 SSL 证书申请流程-证书申请-文档中心-腾讯云 (tencent.com)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/document/product/400/35244",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL 证书 Nginx 服务器 SSL 证书安装部署（Linux）-证书安装-文档中心-腾讯云 (tencent.com)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[t._v("#")]),t._v(" 全局变量")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("全局变量名")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$host")]),t._v(" "),s("td",[t._v("请求信息中的 Host，如果请求中没有 Host 行，则等于设置的服务器名，不包含端口")])]),t._v(" "),s("tr",[s("td",[t._v("$request_method")]),t._v(" "),s("td",[t._v("客户端请求类型，如 GET、POST")])]),t._v(" "),s("tr",[s("td",[t._v("$remote_addr")]),t._v(" "),s("td",[t._v("客户端的 IP 地址")])]),t._v(" "),s("tr",[s("td",[t._v("$args")]),t._v(" "),s("td",[t._v("请求中的参数")])]),t._v(" "),s("tr",[s("td",[t._v("$arg_PARAMETER")]),t._v(" "),s("td",[t._v("GET 请求中变量名 PARAMETER 参数的值，例如：$http_user_agent(Uaer-Agent 值), $http_referer...")])]),t._v(" "),s("tr",[s("td",[t._v("$content_length")]),t._v(" "),s("td",[t._v("请求头中的 Content-length 字段")])]),t._v(" "),s("tr",[s("td",[t._v("$http_user_agent")]),t._v(" "),s("td",[t._v("客户端agent信息")])]),t._v(" "),s("tr",[s("td",[t._v("$http_cookie")]),t._v(" "),s("td",[t._v("客户端cookie信息")])]),t._v(" "),s("tr",[s("td",[t._v("$remote_addr")]),t._v(" "),s("td",[t._v("客户端的IP地址")])]),t._v(" "),s("tr",[s("td",[t._v("$remote_port")]),t._v(" "),s("td",[t._v("客户端的端口")])]),t._v(" "),s("tr",[s("td",[t._v("$http_user_agent")]),t._v(" "),s("td",[t._v("客户端agent信息")])]),t._v(" "),s("tr",[s("td",[t._v("$server_protocol")]),t._v(" "),s("td",[t._v("请求使用的协议，如 HTTP/1.0、HTTP/1.1")])]),t._v(" "),s("tr",[s("td",[t._v("$server_addr")]),t._v(" "),s("td",[t._v("服务器地址")])]),t._v(" "),s("tr",[s("td",[t._v("$server_name")]),t._v(" "),s("td",[t._v("服务器名称")])]),t._v(" "),s("tr",[s("td",[t._v("$server_port")]),t._v(" "),s("td",[t._v("服务器的端口号")])]),t._v(" "),s("tr",[s("td",[t._v("$scheme")]),t._v(" "),s("td",[t._v("HTTP 方法（如http，https）")])]),t._v(" "),s("tr",[s("td",[t._v("$uri")]),t._v(" "),s("td",[t._v("不包含请求参数的URI，也不包含主机名")])]),t._v(" "),s("tr",[s("td",[t._v("$status")]),t._v(" "),s("td",[t._v("响应状态码")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);