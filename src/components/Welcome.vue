<template>
 
    <!-- header -->
    <!-- hamburger -->
    <div id="container">
      <div id="navbar-toggler"><span class="hamburger"></span></div>
      <router-link to="TipsNTricks">Tips &amp; Tricks</router-link>
    </div>
    <h1>Weekly menu</h1>
    <!-- some banner here -->
    <div id="banner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat quidem molestias facilis amet, quam distinctio iure ut? Sapiente quas suscipit alias aperiam modi earum, praesentium blanditiis voluptate quasi sequi aut animi sint possimus reprehenderit id vel accusamus illum laboriosam ratione dolor perferendis. Suscipit ab laudantium sed laborum, ducimus omnis corporis ex. Harum, culpa! Delectus eos praesentium nihil culpa, ipsam temporibus modi aspernatur omnis dolorum dicta eveniet necessitatibus libero corporis, repellendus error, nemo sint itaque quos dolore voluptates fugiat amet cumque. Voluptas sapiente nim, placeat ea dolor aspernatur dignissimos?  tempora fuga quibusdam corporis. Delectus illum, modi molestiae est mollitia soluta, magni error eligendi ab minus maxime laborum iste expedita quo quos cupiditate omnis quisquam sapiente amet sed, repellat qui officia eius aperiam. Nostrum velit eaque nesciunt neque optio consequatur, dolor ipsum corporis maiores consectetur, veritatis voluptas et a animi? Aperiam excepturi distinctio necessitatibus ex natus est voluptate cumque non, inventore suscipit eos porro corporis illo delectus obcaecati, deserunt quaerat adipisci ipsum laboriosam, explicabo blanditiis! Dolorem facere reprehenderit repudiandae? Placeat explicabo a laboriosam repellendus voluptate culpa, magni numquam vel officia sunt aperiam? Possimus, libero saepe corporis pariatur consequatur neque nihil ab aperiam minima cupiditate dolorem ut atque molestiae, harum beatae illo delectus dign

    </div>

    <!-- content here   -->

    <!-- footer -->
    <div id="container">
      <small> &copy;2022. by dgloria.web@gmail.com </small>
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
#banner {
  min-height: 10vh;
  width:100%;
  background-image: url("/assets/images/dishes.png");
}
</style>