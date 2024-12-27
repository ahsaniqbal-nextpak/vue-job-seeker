<script setup>
import { defineProps } from "vue";

defineProps({
  bgColor: String,
});
</script>
<template>
  <div :class="`${bgColor} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
