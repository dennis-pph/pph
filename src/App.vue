<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    //会导致vue对css的热更新失效，开发时注释
    setTimeout(() => {
     L2Dwidget.init({
        model: {
          jsonPath: "live2d/assets/asuna_04.model.json",
        },
      });
    }, 1);
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
