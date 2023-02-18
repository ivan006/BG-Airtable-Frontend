<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-plans></home-plans>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeDetails from "@/components/HomeDetails";
import HomePlans from "@/components/HomePlans";
import Post from "@/models/Post";

export default {
  name: "HomeView",
  components: {
    HomeHero,
    HomeDetails,
    HomePlans,
  },
  mounted() {
    Post.FetchAll({});
  },
};
</script>
