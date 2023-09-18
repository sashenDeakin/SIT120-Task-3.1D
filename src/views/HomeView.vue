<script setup>
import Header from "../components/Header.vue";
import Post from "../components/Post.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <Header />
      <Post />
      <Sidebar />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  margin: auto auto;
  text-align: left;
  padding: 0 7px;
}
</style>
