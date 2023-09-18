<script setup>
import { onMounted, ref } from "vue";

const posts = ref([]);

const fetchPost = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-09-05&to=2023-09-05&sortBy=popularity&apiKey=cb5a93be0d5644468ada3fcc4c9c4b0a"
    );
    if (response.ok) {
      const data = await response.json();
      posts.value = data;
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
  <div class="content">
    <div class="post" v-for="(post, index) in posts.articles" :key="index">
      <div class="thumb">
        <a href="#"><img :src="post.urlToImage" alt="" loading="lazy" /></a>
      </div>
      <h2>
        <a href="#">{{ post.title }}</a>
      </h2>
      <p class="date">{{ post.publishedAt }} by {{ post.author }}</p>
      <p>
        {{ post.description }}
      </p>
      <a class="continue" :href="post.url">Continue Reading</a>
    </div>
    <div class="postnav">
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>
      <div class="break"></div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 700px;
  float: left;
}
.content .post {
  width: 300px;
  float: left;
  padding: 20px 15px 0 35px;
}
.content .post h2 {
  font-family: Georgia;
  font-size: 1.5em;
  margin-bottom: 15px;
}
.content .post h2 a {
  color: #252525;
}
.content .post .date {
  font-size: 0.9em;
  font-family: Georgia;
  color: #808080;
  margin-bottom: 15px;
}
.content .post .continue {
  color: #ffffff;
  background-color: #0000a5;
  padding: 5px 10px;
  display: block;
  float: left;
  font-family: Georgia;
  font-weight: bold;
  margin-bottom: 25px;
}
.content .post p {
  margin-bottom: 10px;
  line-height: 1.4em;
}
.content .post .thumb {
  height: 92px;
  overflow: hidden;
  padding: 5px;
  background-color: #eeeeee;
  border: 1px solid #e8e8e8;
  margin-bottom: 10px;
}
.content .post .thumb div {
  height: 92px;
  overflow: hidden;
}
.content .post .thumb img {
  width: 247px;
}
.content .postnav {
  clear: both;
  padding: 20px 34px 40px;
}
.content .postnav ul {
  list-style-type: none;
  border: 0;
}
.content .postnav ul li {
  float: left;
  padding: 2px;
  padding: 2px;
}
.content .postnav ul li a {
  display: block;
  text-align: center;
  text-decoration: none;
  border: 0;
  padding: 5px 8px;
  background-color: #9f9f9f;
  color: #ffffff;
  font-family: Georgia;
  font-weight: bold;
}
.content .postnav ul li a:hover {
  background-color: #e05f00;
  border: 0 !important;
}
.content .postnav ul li.next a {
  width: auto;
  padding: 2px 4px;
}
.content .postnav .page_info {
  text-align: center;
  text-decoration: none;
  border: 0;
  padding: 5px 8px;
  background-color: #9f9f9f;
  color: #ffffff;
  font-family: Georgia;
  font-weight: bold;
  margin: 2px;
}
</style>
