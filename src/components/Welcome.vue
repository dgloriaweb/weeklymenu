<template>
  <!-- header -->
  <!-- hamburger -->
  <HeaderNavigation />

  <!-- some banner here -->
  <div id="banner">
    <div id="container">
      <h1>Weekly menu</h1>
    </div>
  </div>

  <!-- content here   -->
  <div id="container">
    <div id="main">
      Main content here
    </div>
  </div>
  <!-- footer -->
  <div id="footer">
    <small> &copy;2022. by dgloria.web@gmail.com </small>
  </div>
</template>

<script>
import HeaderNavigation from '../components/HeaderNavigation.vue'

export default {
  name: "Welcome",
  components: {
    HeaderNavigation
  },
}
</script>

<style lang="css" scoped>
#banner {
  height: 10vh;
  width: 100%;
  background: url("/images/dishes.png") repeat-x;
  background-size: 20vh;
  background-position-y: center;
  z-index: 0;
}
</style>