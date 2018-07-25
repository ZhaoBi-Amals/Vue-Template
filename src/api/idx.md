
settings
  管理接口， 全局的js文件中引入api目录下的index.js文件
  使用方式：
    api.settings.接口地址


request
  接口请求， 要想全局使用, 在每个开发的js文件中引入api目录下的index.js文件 import api from '相对路径xxx/api/index'
  使用方式：
    api.request('请求方式POST/GET', '接口地址api.settings.xxx', 'data参数 {xxx：xxx}', res => {
        回调res
        console.log(res)
    })
