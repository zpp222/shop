// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import theme from 'muse-ui/lib/theme'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import store from './store/index.js'

import md5 from 'js-md5'

Vue.use(MuseUI)
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.withCredentials = true
Vue.prototype.$md5 = md5

theme.add('main-theme', {
  primary: '#2196f3',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#bdbdbd',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'gba(0, 0, 0, 0.54)',
    alternate: '#fff',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    chip: '#e0e0e0',
    default: '#fafafa'
  }
}, 'light')

theme.use('main-theme')
// theme.use('dark')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
