
const Note = 'Amals';

const router = new VueRouter({
  routes: [
    {
      path: '/SignIn',
      component: resolve => require(['@/components/SignIn/SignIn.vue'], resolve),
      meta: {
        title: Note + '登陆'
      }
    }, {
      path: '/',
      component: resolve => require(['@/components/T.vue'], resolve),
      children: [{
        path: '/',
        component: resolve =>require(['@/components/home/home.vue'], resolve),

        //此meta自行拓展，获取方式 -> $route.meta.title
        meta: {
          title: Note + '默认概览页'
        }
      }]
    }
  ]
})

export default router
