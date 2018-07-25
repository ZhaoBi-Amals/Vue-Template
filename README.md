
#公共VUE模板  简单使用


所有的比较重的公共库全部采用CDN加载, 具体看index.html


每个文件中都是一个单独的.md文件, 标示当前目录的作用。


assets -> style / assets -> font 此目录为全局css / font使用, 在main.js中引入


static -> image此目录为全局图片静态资源使用, 引用方式

< image :src="'./static/image/...xxx.png'" alt="" >


build -> webpack.base.conf.js 打包采用

    externals: {
      'vue': 'Vue',
      'axios': 'axios',
      'vue-router': 'VueRouter',
      'Cookies': 'Cookies',
    }
    此方法将比较重的库抽离, 这样打包dist下的js中vendor.js文件就不会很大了


src -> utils -> utils.js 此文件提供了vue混入功能, main.js中引入, 一共全局引用, 文件中可以注册组件, 指令, 声明函数等...  全局引用函数 this.xxx();


src -> api 此目录提供常用的 接口管理文件settings.js 接口请求Action文request.js 具体全局引用请求方式, 详看此目录下的.md注解


router路由采用懒加载的模式 resolve, 路由资源引用CDN加载


main.js入口, App模板采用挂载的形式 $mount
  拓展：入口文件可以做路由权限验证, $route.forEach


详看项目中每个文件目录下的md注解

#添加依赖
npm i

#运行
npm run dev

#打包
npm run build


此项目中采用拓展template T.vue

如果想要开发类似于官网而不是后台带侧边栏的网站, 只需要把T.vue中的slideBar组件给注释掉即可
