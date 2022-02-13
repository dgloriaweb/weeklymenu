<template>
  <!-- header -->
  <!-- hamburger -->
  <div id="container" class="light">
    <HeaderNavigation />
    <!-- <router-link to="TipsNTricks">Tips &amp; Tricks</router-link> -->
  </div>
  <!-- some banner here -->
  <div id="banner">
    <div id="container">
      <h1>Weekly menu</h1>
    </div>
  </div>

  <!-- content here   -->

  <!-- footer -->
  <div id="footer">
    <div id="container">
      <small> &copy;2022. by dgloria.web@gmail.com </small>
    </div>
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
  min-height: 10vh;
  width: 100%;
  background: url("/images/dishes.png") repeat-x;
  background-size: 20vh;
  background-position-y: center;
}
</style>