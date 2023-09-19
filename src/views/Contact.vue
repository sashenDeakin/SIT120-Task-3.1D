<script setup>
import ContactBody from "../components/ContactBody.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <ContactBody />
  </div>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  margin: auto auto;
  text-align: left;
  padding: 0 7px;
}
</style>
