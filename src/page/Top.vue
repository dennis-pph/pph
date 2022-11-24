<template>
  <div id="top">
    top111
    <span class="loginButton" @click="showLoginWindow">登录</span>
    <transition name="loginWindow">
      <div class="loginWindow" v-if="loginWindowFlag">
        <span class="closeLoginWindowBtn" @click="closeLoginWindow">
          <img src="img/icons/关闭.svg" alt="" />
        </span>
        <div class="body">
          <div>
            <label for="userName">用户名：</label>
            <input
              type="text"
              v-model.trim="userName"
              id="userName"
              maxlength="10"
            />
          </div>
          <div>
            <label for="password">密码：</label>
            <input
              type="password"
              v-model.trim="password"
              id="password"
              maxlength="10"
            />
          </div>
          <span v-if="userInfoError">用户名或密码错误!</span>
        </div>
        <div class="footer">
          <span @click="login">登录</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { debounce } from "@/util/debounce";
export default {
  name: "top",
  data() {
    return {
      loginWindowFlag: true, //控制登录弹窗
      userName: "dennis",
      password: "111111",
      userInfoError: false, //用户信息错误
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
      this.userInfoError = false;
      this.loginWindowFlag = false;
    },
    //登录
    login() {
      if (this.userName === "dennis" && this.password === "111111") {
        this.antiShake();
        //   this.userInfoError = false;
        //   this.loginWindowFlag = false;
        //   this.$message({
        //     type: "success",
        //     message: "登录成功",
        //     customClass: "loginSuccess",
        //     // duration:0
        //   });
      } else {
        this.userInfoError = true;
      }
    },
    //防抖
    antiShake: debounce(function (val) {
      this.userInfoError = false;
      this.loginWindowFlag = false;
      this.$message({
        type: "success",
        message: "登录成功",
        customClass: "loginSuccess",
        // duration:0
      });
    }),
  },
};
</script>
<style lang="less" scoped>
#top {
  height: 1rem;
  background: #fff;
  // color: #fff;
  position: relative;
  border-bottom: 0.01rem solid #999;
  // 顶部登录按钮
  .loginButton {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    cursor: pointer;
  }
  // 登录弹窗
  .loginWindow {
    position: fixed;
    padding: 0.2rem;
    box-sizing: border-box;
    width: 5rem;
    height: 3.09rem;
    margin: auto;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: #999;
    background: #fff;
    border-radius: 0.04rem;
    box-shadow: 0.01rem 0.01rem 0.1rem #000;
    z-index: 9999;
    //取消按钮
    .closeLoginWindowBtn {
      display: inline-flex;
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      cursor: pointer;
    }
    .body {
      padding: 0.5rem 1rem 0.3rem;
      div {
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: space-between;
        label {
          line-height: 0.32rem;
        }
        // 输入框样式重写
        input {
          width: 1.7rem;
          height: 0.3rem;
          padding: 0 0 0 0.05rem;
          margin: 0;
          border: 0;
          border: 0.01rem solid skyblue;
          border-radius: 0.05rem;
        }
        input:focus {
          outline: none;
        }
      }
      span {
        color: red;
        font-size: 0.14rem;
      }
    }

    .footer {
      position: absolute;
      width: calc(100% - 0.4rem);
      height: 0.4rem;
      bottom: 0.3rem;
      text-align: center;
      span {
        cursor: pointer;
        background: skyblue;
        border-radius: 0.05rem;
        display: inline-block;
        line-height: 0.4rem;
        padding: 0 0.23rem;
        // padding: 0.1rem 0.23rem;
      }
    }
  }
  .loginWindow-enter-active,
  .loginWindow-leave-active {
    transition: all 0.8s;
  }
  .loginWindow-enter,
  .loginWindow-leave-to {
    transform: scale(0);
    // opacity: 0;
    // width: 0.3rem;
    // height: 0.09rem;
  }
  .loginWindow-leave,
  .loginWindow-enter-to {
    // opacity: 1;
    transform: scale(1);
    // width: 5rem;
    // height: 3.09rem;
  }
}
</style>
<style lang="scss">
.loginSuccess {
  min-width: 1.3rem;
}
</style>