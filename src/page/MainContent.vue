<template>
  <div id="mainContent">
    <router-view style="background: #fff"></router-view>
    <!-- <router-view name="Home" style="background: blue"></router-view> -->
  </div>
</template>

<script>
export default {
  name: "mainContent",
};
</script>

<style lang="scss" scoped>
#mainContent {
  height: calc(100% - 1rem);
}
</style>