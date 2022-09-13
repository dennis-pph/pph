<template>
  <div id="top">
    top111
    <span class="loginButton" @click="showLoginWindow">登录</span>
    <transition name="loginWindow">
      <div class="loginWindow" v-if="loginWindowFlag">
        <span class="closeLoginWindowBtn" @click="closeLoginWindow">
          <img src="img/icons/关闭.svg" alt="" />
        </span>
        <div>
          <label for="userName">用户名</label>
          <input type="text" v-model="userName" id="userName" />
        </div>
        <div>
          <label for="password">密码</label>
          <input type="password" v-model="password" id="password" />
        </div>
        <div class="footer">
          <span @click="login">登录</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "top",
  data() {
    return {
      loginWindowFlag: false,
      userName: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    // 显示登录窗口
    showLoginWindow() {
      this.loginWindowFlag = true;
    },
    // 关闭登录窗口
    closeLoginWindow() {
      this.loginWindowFlag = false;
    },
    //登录
    login() {
      // if()
    },
  },
};
</script>
<style lang="less" scoped>
#top {
  height: 100px;
  background: #fff;
  color: #fff;
  position: relative;
  .loginButton {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  .loginWindow {
    position: fixed;
    width: 500px;
    height: 309px;
    margin: auto;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #999;
    border-radius: 4px;
    z-index: 9999;
    .closeLoginWindowBtn {
      display: inline-flex;
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
    input {
      width: 200px;
      height: 30px;
      padding: 0px 0 0 5px;
      margin: 0px;
      border: 0px;
      border: 1px solid skyblue;
      border-radius: 5px;
    }
    input:focus {
      outline: none;
    }
    .footer {
      span {
        cursor: pointer;
      }
    }
  }
  .loginWindow-enter-active,
  .loginWindow-leave-active {
    transition: all 0.8s;
  }
  .loginWindow-enter,
  .loginWindow-leave-to {
    // opacity: 0;
    width: 30px;
    height: 9px;
  }
  .loginWindow-leave,
  .loginWindow-enter-to {
    // opacity: 1;
    width: 500px;
    height: 309px;
  }
}
</style>