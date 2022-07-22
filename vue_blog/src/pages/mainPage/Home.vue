<template>
  <el-row><MainBigNav /></el-row>
  <el-row hidden-md-and-up><MainSmallNav /></el-row>
</template>

<script>
import "element-plus/theme-chalk/display.css";
import MainBigNavVue from "@/components/mainPage/MainBigNav.vue";
import MainSmallNavVue from "@/components/mainPage/MainSmallNav.vue";
export default {
  name: "Home",
  components: { MainBigNavVue, MainSmallNavVue },
};
</script>

<style scoped>
</style>