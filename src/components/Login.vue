<template>
  <div class="login-div">
    <mu-flex class="flex-wrapper" justify-content="center">
      <!--mt-header fixed=true title="fixed top"></mt-header-->
      <form @submit.prevent="onsubmit" id="loginForm">
        <mt-field label="用户名" placeholder="Input name" v-model="loginForm.name"></mt-field>
        <mt-field label="密 码" placeholder="Input passwd" v-model="loginForm.passwd" type="password"></mt-field>
        <mt-button type="primary" size="large">primary</mt-button>
      </form><br>
    </mu-flex>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        name: '',
        passwd: ''
      }
    }
  },
  methods: {
    onsubmit: function (event) {
      const route = this.$router
      const store = this.$store
      this.$http.post('/api/shop-console/login2', {
        name: this.loginForm.name,
        passwd: this.loginForm.passwd
      })
        .then(function (response) {
          if (response.data.rtcode === 'LG_0000') {
            store.commit('cart/setpPoductList', { 'response': response.data })
            route.push({name: 'HelloWorld', params: { name: 'zpp' }})
          } else {
            store.dispatch('cart/clearAll')
            Toast({message: 'login fail,please check your info!', duration: 1500, position: 'top'})
          }
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-wrapper {
  width: 100%;
  height: 180px;
  margin-top: 20px;
}
</style>
