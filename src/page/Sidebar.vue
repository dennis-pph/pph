<template>
  <div id="sidebar">
    <div>pph的随心记录</div>
    <router-link
      v-for="(item, index) of menuList"
      :key="index"
      :to="{ path: item.path }"
      :style="{
        height:
          item.children.length > 0 && getActivePath(item.path)
            ? (item.children.length + 1) * 0.4 + 'rem'
            : '0.4rem',
      }"
      :class="{ menu: true, isActived: getActivePath(item.path) }"
      @click.native="menuActive(item)"
    >
      <span>{{ item.name }}</span>
      <div v-show="item.children.length > 0" class="childrenMenu">
        <router-link
          v-for="(item2, index2) of item.children"
          :key="index2"
          :to="{ path: item2.path }"
          :class="{
            menu: true,
            menuChild: true,
            isActived: getActivePath(item2.path),
          }"
          @click.native.stop="menuActive(item2)"
          >{{ item2.name }}</router-link
        >
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      // actived: 0, //当前选择的菜单
      // actived: "/home", //当前选择的菜单
      menuList: [
        {
          name: "首页",
          routerName: "Home",
          path: "/home",
          children: [],
        },
        {
          name: "菜单1",
          routerName: "Hello",
          path: "/hello",
          children: [],
        },
        {
          name: "菜单2",
          routerName: "About",
          path: "/about",
          children: [
            {
              name: "菜单2——主页",
              routerName: "AboutIndex",
              path: "/about/index",
              children: [],
            },
            {
              name: "菜单2——菜单1",
              routerName: "AboutTest1",
              path: "/about/test1",
              children: [],
            },
            {
              name: "菜单2——菜单2",
              routerName: "AboutTest2",
              path: "/about/test2",
              children: [],
            },
          ],
        },
        {
          name: "菜单3",
          routerName: "Menu2",
          path: "/menu2",
          children: [
            {
              name: "菜单3——主页",
              routerName: "Menu2Index",
              path: "/menu2/index",
              children: [],
            },
          ],
        },
      ],
    };
  },
  // created() {
  //   this.actived = this.$route.path;
  //   console.log(this.actived);
  //   // console.log(this.$route.path)
  // },
  mounted() {},
  methods: {
    getActivePath(val) {
      if (this.$route.path.indexOf(val) > -1) {
        return true;
      } else {
        return false;
      }
    },
    menuActive(val) {
      if (val.children.length && val.children.length > 0) {
        this.actived = val.children[0].path;
      } else {
        this.actived = val.path;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#sidebar {
  position: relative;
  flex: 0 0 2rem;
  height: calc(100% - 0.6rem);
  padding-top: 0.6rem;
  // background: red;

  border-right: 1px solid #999;

  display: flex;
  flex-direction: column;
  // logo
  > div:first-child {
    position: absolute;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    top: 0;
    font-size: 0.24rem;
    font-weight: bold;
    text-align: center;
    color: deepskyblue;
  }
  // 菜单样式
  .menu {
    position: relative;
    padding-left: 0.2rem;
    height: 0.4rem;
    min-height: 0.4rem;
    line-height: 0.4rem;
    font-weight: bold;
    font-size: 0.2rem;
    text-decoration: none;
    overflow: hidden;
    color: #000;
    transition: height 0.3s;
    > span {
      display: inline-block;
      // padding-left: 0.2rem;
      width: 100%;
      height: 0.4rem;
    }
    // 子菜单需要补充的样式
    .childrenMenu {
      display: inline-flex;
      flex-direction: column;
      .menuChild {
        font-size: 0.16rem;
      }
    }
  }
  // 选择菜单的样式
  .isActived {
    color: deepskyblue;
    // height: auto;
  }
}
</style>
