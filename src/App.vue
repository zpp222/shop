<template>
  <div id="app">
    <!-- img src="./assets/logo.png"-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
  @import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
