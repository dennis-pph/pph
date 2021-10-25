<template>
  <div id="sidebar">
    <router-link to="/">首页</router-link>
    <ul>
      <li>
        <router-link to="/about">guanyu</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
#sidebar {
  height: calc(100% - 100px);
  // background: #444;
  // width: 200px;
  flex: 0 0 200px;
}
</style>