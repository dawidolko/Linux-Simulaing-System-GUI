import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import LoginPage from '../components/LoginPage/LoginPage'

const Desktop = () => import('../components/Desktop/Desktop')

const TITLE = 'Deepin Desktop Simulator | Linux in the Browser'
import Down from '../components/Down'

Vue.use(VueRouter)

const routes = [
  {
    path: '/terminated',
    name: "Down",
    component: Down,
    meta : {
      title:TITLE
    }
  },
  {
    path: '/login',
    name: "LoginPage",
    component: LoginPage,
    meta : {
      title:TITLE
    }
  },
  {
    path: '/desktop/post/:postfilename',
    name: "DesktopWithPost",
    component: Desktop,
    meta : {
      title:TITLE
    }
  },
  {
    path: '/desktop',
    name: "Desktop",
    component: Desktop,
    meta : {
      title:TITLE
    }
  },
  {
    path:"*",
    redirect:'/login',
  },
]


const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('show_interlude')
  next()
})

export default router
