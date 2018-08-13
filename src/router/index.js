
const Nate = 'Amals';

const router = new VueRouter({
  routes: [
    {
      path: '/SignIn',
      component: resolve => require(['@/components/SignIn/SignIn.vue'], resolve),
      meta: {
        title: Nate + '登陆'
      }
    }, {
      path: '/',
      component: resolve => require(['@/components/T.vue'], resolve),
      children: [{
        path: '/',
        component: resolve => require(['@/components/home/home.vue'], resolve),

        //此meta自行拓展，获取方式 -> $route.meta.title
        meta: {
          title: Nate + '默认概览页'
        }
      },{
        path: '/doc',
        component: resolve => require(['@/components/doc/doc.vue'], resolve),
        meta: {
          title: Nate + '文档页面'
        }
      },{
        path: '/setting',
        component: resolve => require(['@/components/setting/setting.vue'], resolve),
        meta: {
          title: Nate + '文档页面'

        }
      }]
    }
  ]
})

export default router
