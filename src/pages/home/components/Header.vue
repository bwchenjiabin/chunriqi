<template>
  <div class="header">
    <div class="header-box">
      <!-- logo -->
      <div class="header-logo">
        <img src="../../../assets/images/login/logo.png" alt="">
      </div>
      <!-- 导航 -->
      <div class="header-nav">
        <router-link to="/home">首页</router-link>
        <router-link to="/Operation">业务管理</router-link>
        <router-link to="/Finance">合同管理</router-link>
        <router-link to="/ClientManage">客户管理</router-link>
        <router-link to="/Message">短信管理</router-link>
        <router-link to="/Account">账户管理</router-link>
      </div>
      <!-- 客户头像 -->
      <div class="head-portrait">
        <div class="file-box">
          <input type="file" id="file" class="file">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user_id: '',
      token: ''
    }
  },
  created () {
  this.getdata()
},
  methods: {
    async getdata () {
      var user_id = this.getCookie('id');
      var token = this.getCookie('token');
      const {data: res} = await this.$axios.post('fs/customer_index', {
        user_id: this.$route.query.id,
        token: this.$route.query.token
      })
      if (res.code == 1 ) {
        this.count = res.data.count
        this.list = res.data.customers
      }
    },
  },
}
</script>

<style scoped>
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height:50px;
  background:rgba(2,166,237,1);
}
/* logo */
.header-logo {
  width:105px;
  height:51px;
  margin-left: 47px;
  vertical-align:middle;
}
/* nav导航 */
.header-nav {
  width: 80%;
  height: 100%;
  line-height: 51px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 218px 0 38px;
}
.header-nav a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff;
}
.header-nav .is-active {
  background-color: #128CFF;
}
/* 头像 */
.head-portrait {
  width: 10%;
}
.file-box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.file-box input {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-bottom-color: red;
}
</style>
