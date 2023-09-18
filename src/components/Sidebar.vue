<script setup>
import { onMounted, ref } from "vue";

const advertisements = ref([]);

const fetchPost = async () => {
  try {
    const response = await fetch("../../data/advertisement.json");
    if (response.ok) {
      const data = await response.json();
      advertisements.value = data;
    } else {
      console.error("Failed to fetch JSON data:", response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchPost);
</script>
<template>
  <div class="sidebar">
    <div class="ads">
      <a
        href="#"
        v-for="(advertisement, index) in advertisements.firstRow"
        :key="index"
        ><img :src="advertisement.image" alt="" class="ad-image"
      /></a>
    </div>
    <form class="search" action="#">
      <input type="text" name="s" id="s" placeholder="Search" />
      <button type="submit">Search</button>
    </form>
    <div class="wrapper">
      <h2>Popular Posts</h2>
      <ul>
        <li><a href="#">Make Money Online Creating Websites</a></li>
        <li><a href="#">Top 100 Internet Marketing Tips</a></li>
        <li><a href="#">Tutorial: How to add Videos in your Post</a></li>
        <li><a href="#">Sample Post Unordered List</a></li>
        <li><a href="#">Sample Post Blockquote</a></li>
      </ul>
      <h2>Flickr Photos</h2>
      <div class="flickr">
        <a
          href="#"
          v-for="(advertisement, index) in advertisements.secondRow"
          :key="index"
          ><img :src="advertisement.image" alt="" class="ad-image"
        /></a>
      </div>
      <h2>Featured Video</h2>
      <div class="video">
        <img
          class="video-img"
          src="https://media1.tenor.com/images/b9f0366ce2fcf04dda9da527d831bed1/tenor.gif?itemid=8171804"
          alt=""
        />
      </div>
      <h2>Tags</h2>
      <div class="tags"></div>
      <div class="l sbar">
        <h2>Categories</h2>
        <ul>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Fashion</a></li>
          <li><a href="#">Internet</a></li>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Make Money</a></li>
          <li><a href="#">Online</a></li>
          <li><a href="#">Parenting</a></li>
        </ul>
        <h2>Pages</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Archives</a></li>
          <li><a href="#">Links</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
      <div class="r sbar">
        <h2>Archives</h2>
        <ul>
          <li><a href="#">August 2023</a></li>
          <li><a href="#">July 2023</a></li>
          <li><a href="#">June 2023</a></li>
          <li><a href="#">May 2023</a></li>
          <li><a href="#">April 2023</a></li>
          <li><a href="#">March 2023</a></li>
        </ul>
        <h2>Blogroll</h2>
        <ul>
          <li><a href="#">Carlos</a></li>
          <li><a href="#">Digital Point Forum</a></li>
          <li><a href="#">Eric's Photo Gallery</a></li>
          <li><a href="#">Fashion Trends</a></li>
          <li><a href="#">Google Scoreboard</a></li>
          <li><a href="#">Marketing Forum</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  width: 304px;
  float: right;
  padding-bottom: 20px;
}

.ad-image {
  width: 80px;
  height: 50px;
}

.video-img {
  width: 280px;
}
.sidebar .wrapper {
  padding: 0 15px;
}
.sidebar h2 {
  color: #252525;
  font-size: 0.9em;
  text-transform: uppercase;
  margin: 15px 0 10px;
}
.sidebar ul {
  list-style-type: none;
}
.sidebar ul li {
  border-bottom: 1px dotted #dadada;
  line-height: 1.4em;
  padding: 4px 0;
  font-size: 0.9em;
}
.sidebar ul li a {
  color: #808080;
}
.sidebar ul li a:hover {
  color: #0909ff;
}
.sidebar .ads {
  text-align: center;
  padding: 10px 0;
}
.sidebar .ads img {
  margin: 3px;
}
.sidebar .search {
  background: #eeeeee url(images/search.gif) no-repeat center center;
  border-width: 1px 0;
  border-color: #e8e8e8;
  border-style: solid;
  height: 52px;
}
.sidebar .search input {
  float: left;
  border: 0;
  font-size: 1.2em;
  font-family: Verdana;
  width: 200px;
  margin: 18px 11px 0 22px;
}
.sidebar .search button {
  float: left;
  border: 0;
  text-indent: -9999px;
  width: 53px;
  height: 32px;
  margin-top: 10px;
  background-color: transparent;
}
.sidebar .flickr img {
  margin: 3px;
}
.sidebar .video {
  padding-bottom: 5px;
}
.sidebar .tags {
  padding-bottom: 5px;
}
.sidebar .tags a {
  color: #808080;
}
.sidebar .tags a:hover {
  color: #dc1000;
}
.sidebar .l {
  float: left;
  width: 125px;
}
.sidebar .r {
  float: right;
  width: 125px;
}
.sidebar .sbar li {
  font-size: 1em;
  padding-left: 12px;
  background: url(images/bullet.gif) no-repeat 0 8px;
  border: 0;
}
</style>
