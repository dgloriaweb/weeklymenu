<template>
  <header class="header">&nbsp;
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <li>   <router-link to="TipsNTricks">Tips &amp; Tricks</router-link>  </li>
   
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style  scoped>
/* header */

.header {
  background-color: rgb(55, 55, 55);
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  padding:8px 0;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #757575;
}

.header li a {
  display: block;
  padding: 8px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
  color: #333;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  }

/* menu icon */

.header .menu-icon {
    font-size:14px;
  cursor: pointer;
  display: inline-block;
  text-align: right;
  padding: 8px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #eee;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #eee;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 8px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>