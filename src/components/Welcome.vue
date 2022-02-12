<template>
  <div>
    <!-- header -->
    <!-- hamburger -->
    <div id="container">
      <span class="hamburger"></span>
      <h1>Weekly menu</h1>
    </div>
      <!-- some banner here -->
      <div id="banner">Banner here</div>

    <!-- content here   -->

    <!-- footer -->
    <div id="container">
      <small> &copy;2022. by dgloria.web@gmail.com </small>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.hamburger {
  position: relative;
  display: inline-block;
  width: 1.25em;
  height: 0.8em;
  margin-right: 0.3em;
  border-top: 0.2em solid #fff;
  border-bottom: 0.2em solid #fff;
}

.hamburger:before {
  content: "";
  position: absolute;
  top: 0.3em;
  left: 0px;
  width: 100%;
  border-top: 0.2em solid #fff;
}
</style>