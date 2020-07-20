import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import Login from '@/page/login';
import Manage from '@/page/manage';
import sendMessage from '@/page/sendMessage'
import look from '@/page/Look'

Vue.use(Router);

export default new Router({
  routes: [
    //登录
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // {
    //   path:'/',
    //   // name:'index',
    //   component:sendMessage
    // },
    // //管理模板
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      children: [
        //管理首页
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        // 发送信息
        {
          path: '/sendMessage',
          name:'sendMessage',
          component: sendMessage
        },
        {
          path:'/look',
          name:'Look',
          component: look
        }
      ],
      beforeEnter: (to, from, next) => {
        let token = sessionStorage.getItem("token");
        if (token) {
          next();
        } else {
          next({
            name: "Login"
          });
        }
      }

    },


  ]
})
