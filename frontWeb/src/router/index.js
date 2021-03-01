import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import New from '@/components/New'
import Mine from '@/components/Mine'
import Hot from '@/components/Hot'
import Vip from '@/components/Vip'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login 
    },
    {
      path: '/register',
      name: 'Register',
      component: Register 
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine 
    },
    {
      path: '/new',
      name: 'New',
      component: New 
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip 
    }
  ]
});


// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });
 
