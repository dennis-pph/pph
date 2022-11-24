<template>
  <div id="index">
    <sidebar></sidebar>
    <article>
      <Top></Top>
      <MainContent></MainContent>
    </article>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Top from "./Top";
import sidebar from "./Sidebar";
import MainContent from "./MainContent";
export default {
  name: "app",
  components: {
    Top,
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
