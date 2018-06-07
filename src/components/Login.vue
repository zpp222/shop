<template>
  <div class="login-div">
    {{ msg }} {{ $route.params.name }} <br/>
    <form @submit.prevent="onsubmit">
      <input v-model="name" placeholder="edit name"/>
      <input v-model="passwd" placeholder="edit password" type="password"/>
      <input type="submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'login from :'
    }
  },
  methods: {
    onsubmit: function (event) {
      console.log('11')
      alert('submit :' + this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
