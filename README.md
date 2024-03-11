<p align="center">
    <img src="https://raw.githubusercontent.com/Ririsu-Kokoromu/hexo-theme-vitepress/main/hexo-theme-vitepress.png" alt="Image" style="width:128px; height:128px">
    <h3>hexo-theme-vitepress:一个简洁轻量的hexo博客主题</h3>
</p>

>[博客](https://blog.ririsukokoromu.top/2024/02/07/%E4%BB%8E%E9%9B%B6%E5%86%99%E4%B8%80%E4%B8%AA%E5%9F%BA%E7%A1%80%E7%9A%84hexo%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/) | [demo](https://hexo-theme-vitepress-demo.vercel.app/)

#### 前言
~~那天晚上vitepress和hexo都喝醉了~~
<br />
hexoDemo文件夹是我博客的hexo入坑教程的代码。
<br />
[hexo-theme-vitepress文件夹](https://github.com/sooooooooooooooooootheby/hexo-theme-vitepress/tree/main/hexo-theme-vitepress/themes)才是主题，如果只需要教程代码或者主题不要搞错。
<br />
主题功能基本跟vitepress保持一致，后续应该会添加一些自定义功能，例如友链。有需要功能的小伙伴可以提一下issues，可以的话有空我会做的。

#### 截屏
![home](https://raw.githubusercontent.com/Ririsu-Kokoromu/hexo-theme-vitepress-demo/main/PixPin_2024-02-25_17-02-15.png)
![post](https://raw.githubusercontent.com/Ririsu-Kokoromu/hexo-theme-vitepress-demo/main/PixPin_2024-02-25_17-02-56.png)

#### 主题使用事项
* 主题自带的两个字体没有压缩处理，有需要请自己进行压缩处理。
* 如果启动显示`no layout: index.html`请检查自己的站点`_config.yml`中主题名配置是否正确。
* 本主题默认只有`home`和`post`两个页面，使用前记得执行`hexo new page post`并在`hexo站点根目录/source/post/index.md`的头部加入`layout: post`键值，否则`post`页面无法正常显示。
* 暂时没有国际化(i18n)的功能，由于一些不可抗力原因（懒）暂时没做。

#### 功能介绍
大部分文本可以通过修改主题目录下的`_config.yml`实现。
##### 菜单
如果不会添加自定义页面见我的[hexo教程](https://blog.ririsukokoromu.top/2024/02/07/%E4%BB%8E%E9%9B%B6%E5%86%99%E4%B8%80%E4%B8%AA%E5%9F%BA%E7%A1%80%E7%9A%84hexo%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/)
``` yaml
menu:
  Home: /
  Post: /post
  在页面显示的名字: url后缀
```

##### 社交链接
我内置了7个常用平台`github`、`telegram`、`twitter`、`discord`、`bilibili`、`qq`、`wechat`的图标。
<br />
如果需要添加其他平台请自己导入图标，页面大部分图标目录位于`hexo-theme-vitepress/source/icon`，我使用的是阿里的开源图标库，添加自定义图标时注意不要覆盖掉原来的图标，除非你想全部换掉。
``` yaml
link:
  - 
    name: Github    # 这个值只起到一个标识的作用，并不会渲染在页面上
    url:            # 这是社交链接的url
    icon: github2   # 链接的图标名，如果你好奇是怎么实现的可以看看 hexo-theme-vitepress/layout/_partial/header.ejs 的48行
```

##### 主页的介绍
直接对照修改即可。
<br />
需要修改右侧图片请替换`hexo-theme-vitepress/source/img/logo.png`,导航栏和标签的图标都是使用这个文件。
``` yaml
homeIntroduce:
  one: HEXO
  p1: 快速、简洁且高效的博客框架
  p2: 基于Node.js的静态网站生成器，简单易用支持多种主题插件，具有自动化生成、本地调试和方便部署等特点
```

##### 主页按钮
``` yaml
homeButton:
  -
    name: Get Started       # 按钮显示文字
    url: /                  # url
    buttonType: brand       # 按钮类型，brand为蓝底白字
  -
    name: View on GitHub    
    url: /
    buttonType: alt         # alt为白字黑字
```

##### 主页容器
虽然这个名字听起来很奇怪，但是vitepress自己的命名就是`container 容器`。
``` yaml
homeContainer:
  -
    img: img/logo.png                                # 图片
    span: 使用Markdown                               # 标题
    p: 使用Markdown编写你的文章，快速生成HTML网站      # 正文
```

##### 样式文件
主题使用的是`stylus`css预处理器。
<br />
99%的颜色都可以在`hexo-theme-vitepress/source/css/theme.styl`中配置，分为明亮两个外观。自定义名称都比较明显，看一眼就能理解这是设置哪的颜色（大概），如果是在看不懂每个部分我都有注释，实在不行就去F12研究一下就知道了。
<br />
还有1%的颜色都是不需要配置的。