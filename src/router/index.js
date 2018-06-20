import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Router)
Vue.use(MuseUI)
Vue.use(MintUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Register
    }
  ]
})
