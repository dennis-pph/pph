<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
#index {
  width: 100%;
  height: calc(100% - 100px);

  // background: red;
}
</style>
<style scoped>
/* #index {
  width: 100%;
  height: 300px;
  background: blue;
} */
</style>