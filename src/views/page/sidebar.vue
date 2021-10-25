<template>
  <div id="sidebar">
    <router-link to="/home">首页</router-link>
    <ul>
      <li>
        <router-link to="/about/index">guanyu</router-link>
        <router-link to="/about/test1">guanyu1</router-link>
        <router-link to="/about/test2">guanyu2</router-link>
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