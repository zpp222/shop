<template>
  <div class="hello">
    <mt-header fixed=true title=""></mt-header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.getters['login/loginCode']/*  非命名空间：this.$store.getters.getProductList.response  */
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
</style>
