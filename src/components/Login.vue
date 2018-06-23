<template>
  <div class="login-div">
    <mu-flex class="flex-wrapper" justify-content="center">
      <mt-header fixed title="登录">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
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
import { mapActions, mapMutations } from 'vuex'

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
    ...mapActions({
      clearAll: 'login/clearAll' // 将 `this.xx()` 映射为 `this.$store.dispatch('xx')`
    }),
    ...mapMutations({setloginCode: 'login/setloginCode', setToken: 'login/setToken'}),
    onsubmit: function (event) {
      var that = this
      this.$http.post('/api/shop-console/login2', {
        name: this.loginForm.name,
        passwd: this.loginForm.passwd
      })
        .then(function (response) { that.submitSuc(response) })
        .catch(function (response) {
          console.log(response)
          Toast({message: '网络异常，请稍后再试~~', duration: 1500, position: 'center'})
        })
    },
    submitSuc: function (response) {
      if (response.data.rtcode === 'LG_0000') {
        // this.$store.commit('login/setloginCode', response.data)
        this.setloginCode(response.data)
        this.$router.push({name: 'HelloWorld', params: { name: '' }})
      } else {
        // this.$store.dispatch('login/clearAll')
        this.clearAll()
        Toast({message: 'login fail,please check your info!', duration: 1500, position: 'center'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-wrapper {
  width: 100%;
  height: 100%;
  margin-top: 140px;
  // background-color: brown;
}
#loginForm {
  width: 300px;
}
</style>
