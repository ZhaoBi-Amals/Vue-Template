
DEMO https://zhaobi-amals.github.io/Vue-Template/dist/#/

所有的比较重的公共库全部采用CDN加载(cdn厂商不稳定, 已更换为本地./static/Resources/xxx), 具体看index.html

每个文件中都是一个单独的.md文件, 标示当前目录的作用。


assets -> style / assets -> font 此目录为全局css / font使用, 在main.js中引入


static -> image此目录为全局图片静态资源使用, 引用方式

<image :src="'./static/image/logo.png'" alt="">

build -> webpack.base.conf.js 打包采用

    externals: {
      'vue': 'Vue',
      'axios': 'axios',
      'vue-router': 'VueRouter',
      'Cookies': 'Cookies',
      'element-ui': 'ELEMENT',
    },

    此方法将比较重的库抽离, 这样打包dist下的js中vendor.js文件不会很大

    Cookies使用方式
    Cookies.set('Am', 1, {expires: 7(天)});
    Cookies.get('Am');


src -> utils -> utils.js 此文件提供了vue混入功能, main.js中引入, 全局引用, 文件中可以注册组件, 指令, 声明函数等...  全局引用函数 this.xxx();


src -> api 此目录提供常用的 接口管理文件settings.js 接口请求Action request.js 具体全局引用请求方式, 详看此目录下的.md注解

settings

  管理接口， 全局的js文件中引入api目录下的index.js文件

  import api from '相对路径xxx/api/index'

  使用方式：

    api.settings.接口地址


request

  接口请求， 要想全局使用, 在每个开发的js文件中引入api目录下的index.js文件

  import api from '相对路径xxx/api/index'

  使用方式：

  api.request('请求方式POST/GET', '接口地址api.settings.xxx', 'data参数 {xxx：xxx}', res => {
      //回调res
      console.log(res)
  })


router路由采用懒加载的模式 resolve, 路由资源引用CDN加载


main.js入口, App模板采用挂载的形式 $mount

  拓展：入口文件可以做路由权限验证, $router.forEach



此项目中采用拓展template T.vue

如果想要开发类似于官网而不是后台带侧边栏的网站, 只需要把T.vue中的slideBar组件给注释掉即可

滚动条优化采用的Element隐藏属性 el-scrollbar


> 详看项目中每个文件目录下的md注解

> #添加依赖

> npm i

> #运行

> npm run dev

> #打包

> npm run build


