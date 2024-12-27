<script setup>
import JobListing from "@/components/JobListing.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
</script>
<template>
  <Hero
    title="Become a Vue Dev"
    subTitle="Find the Vue job that fits your skills and needs"
  />
  <HomeCards />
  <JobListing :limit="3" :showButton="true" />
</template>
