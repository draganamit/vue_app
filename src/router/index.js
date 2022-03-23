import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
       name: 'login'
    }
  },
  {
      path:'/login',
      name:'login',
      component:Login,
      props: true
  },
  {
      path:'/home',
      name:'home',
      component:Home,
      props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router