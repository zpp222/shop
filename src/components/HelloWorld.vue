<template>
  <div>
    <div class="flex-top">
      <mt-header fixed title="首页">
        <router-link to="/login" slot="right">
          <mt-button size="small">登录</mt-button>
        </router-link>
        <router-link to="/reg" slot="right">
          <mt-button size="small">|注册</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="flex-center">
      <h1>{{ msg }}</h1>
    </div>
    <div class="flex-tail">
      <mu-container style="max-width: 100%; width:100%;">
        <mu-bottom-nav :value.sync="shift" shift>
          <mu-bottom-nav-item title="首页" icon="home" to="login"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="购物车" icon="shopping_cart"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="发现" icon="favorite"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="我的" icon="account_circle"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.getters['login/loginCode'] /*  非命名空间：this.$store.getters.getProductList.response  */
      // msg: this.loginCode/*   命名空间不适用*/
    }
  },
  computed: {
    ...mapGetters({loginCode: '[\'login/loginCode\']'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-top {
    width: 100%;
    height: 10%;
    float: left;
  }
  .flex-center {
    width: 100%;
    float: left;
  }
  .flex-tail {
    position:fixed;
    bottom:0px;
    width: 100%;
  }
</style>
