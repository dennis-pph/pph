<template>
  <div id="index">
    <sidebar></sidebar>
    <article>
      <top></top>
      <Main-Content></Main-Content>
    </article>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import top from "./Top";
import sidebar from "./Sidebar";
import MainContent from "./MainContent";
export default {
  name: "app",
  components: {
    top,
    sidebar,
    MainContent,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#index {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  > article {
    width: 100%;
  }
}
</style>
