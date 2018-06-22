<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.getters['cart/getProductList'].response/*  非命名空间：this.$store.getters.getProductList.response  */
      // msg: this.getProductList.response/*   命名空间不适用*/
    }
  },
  methods: {
    ...mapGetters({getProductList: '[\'cart/getProductList\']'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
