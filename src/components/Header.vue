<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="header">
    <ul>
      <li class="f">
        <a href="#"><RouterLink to="/">Home</RouterLink></a>
      </li>
      <li>
        <a href=""> <RouterLink to="/about">About Us</RouterLink></a>
      </li>
      <li>
        <a href=""><RouterLink to="/contact">Contact Us</RouterLink></a>
      </li>
    </ul>
    <div class="break"></div>
    <div class="logo">
      <h1><a href="#">The Web News</a></h1>
    </div>
    <div class="ad468x60">
      <a href="#"><img src="images/ad468x60.gif" alt="" /></a>
    </div>
    <div class="break"></div>
    <ol>
      <li><a href="#">Advertising</a></li>
      <li><a href="#">Entertainment</a></li>
      <li><a href="#">Fashion</a></li>
      <li><a href="#">Lifestyle</a></li>
      <li><a href="#">Pictures</a></li>
      <li><a href="#">Videos</a></li>
    </ol>
    <div class="break"></div>
  </div>
</template>

<style scoped>
.header {
  background: #ffffff url(images/header.gif) repeat-x 0 0;
}
.header ul {
  float: left;
  list-style-type: none;
  padding: 10px 0;
  margin-left: -5px;
}
.header ul li {
  float: left;
  text-transform: uppercase;
  font-size: 0.9em;
  padding: 0 15px;
  border-left: 1px solid #252525;
}
.header ul li.f {
  border: 0;
}
.header .links {
  float: right;
  font-size: 0.9em;
  color: #252525;
  padding: 10px;
}
.header .links a {
  margin-left: 14px;
}
.header .logo {
  padding: 18px 18px 40px;
  float: left;
}
.header .logo h1 {
  font-family: "Lucida Sans";
  font-size: 2.5em;
  text-transform: uppercase;
}
.header .logo h1 a {
  color: #252525;
}
.header .logo p {
  color: #0909ff;
  font-weight: bold;
  padding-left: 10px;
}
.header .ad468x60 {
  float: right;
  padding: 16px 10px;
}
.header ol {
  list-style-type: none;
  height: 35px;
  background-color: #252525;
}
.header ol li {
  float: left;
}
.header ol li a {
  color: #ffffff;
  display: block;
  padding: 10px 12px 11px;
}
.header ol li a:hover {
  background-color: #0909ff;
}
</style>
