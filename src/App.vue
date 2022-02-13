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
  all:unset;
  color: #eee;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  background: rgba(55,55,55,0.9);
  height:100%;
  width:100%;
}

#container {
  width: 1000px;
  max-width: 78vw;
  margin: auto;
}
#container.light {
  background-color: rgba(55,55,55,1);
}
#footer{
text-align:right;
}
/* reset browser default */
h1{
  all:unset;
}
a{
  color:unset;
}
</style>
