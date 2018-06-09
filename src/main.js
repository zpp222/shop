// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import theme from 'muse-ui/lib/theme'

Vue.config.productionTip = false
Vue.prototype.$http = axios

theme.add('main-theme', {
  primary: '#009688',
  secondary: '#ff4081',
  success: '#af1d1c',
  warning: '#ffeb3b',
  info: '#2196f3',
  error: '#f44336',
  track: '#757575',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: '#424242',
    chip: '#616161',
    default: '#303030'
  }
}, 'light')

theme.use('main-theme')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
