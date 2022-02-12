<template>
  <Welcome />
</template>

<script>
import Welcome from "./components/Welcome.vue"

export default {
  name: "App",
  components: {
    Welcome,
  },
};
</script>

<style>
body,
html {
  background-color: dark-grey;
  color: #eee;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background: #1d1f20;
}

#container {
  width: 1000px;
  max-width: 78vw;
  background-color: grey;
  margin: auto;
}
#banner{
  background-color: teal;
  min-height:10vh;
}
</style>
