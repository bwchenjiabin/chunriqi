<template>
     <div class="login">
         <div class="login-img">
             <div class="login-box">
                 <div class="login-box-form">
                     <div class="login-logo">
                        <div class="login-title clearfloat">
                            <div class="login-logo-img fl"></div>
                            <h1 class="login-logo-text fl">北京春日启管理系统</h1>
                        </div>
                        <div class="form-box">
                            <el-form
                                :model="formData"
                                :rules="formRules"
                                ref="formRef"
                                class="demo-ruleForm"
                                size="60px;"
                            >
                                <!-- 用户账号 -->
                                <el-form-item prop="account">
                                    <el-input v-model="formData.account" placeholder="用户账号"></el-input>
                                </el-form-item>
                                <!-- 用户密码 -->
                                <el-form-item prop="password">
                                    <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
                                </el-form-item>
                                <input type="checkbox" v-model="status">记住密码
                                <el-form-item>
                                    <el-button type="primary" @click="login('formRules')" class="login-button">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        account: '',
        password: ''
      },
      //   记住密码状态
      status: false,
      //   校验
      formRules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   登陆
    login () {
      this.$refs.formRef.validate(async valid => {
        // 调用登陆接口
        const {data: res} = await this.$axios.post('login', this.formData)
        if (res.code !== 1) {
          window.localStorage.removeItem('token')
          return this.$message.error('登陆失败')
        }
        this.$message.success('登陆成功')
        window.localStorage.setItem('token', res.data.token)
        this.$router.push({
          path: '/home',
          query: {id: res.data.id, token: res.data.token}
        })
      })
    }
  }
}
</script>

<style scoped>
.login {
    height: 100%;
    color: #000;
    overflow: hidden;
    position: relative;
}
.login-img{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('../../assets/images/login/bgc.png') no-repeat center;
}
.login-box {
    width: 700px;
    height: 500px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0 40px;
    transform: translate(-50%,-50%);
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 10px 0px rgba(13,112,155,1);
    border-radius:10px;
}
.login-box-form {
    margin: 50px auto;
    padding: 0 35px;
}
.login-logo-img {
    width: 105px;
    height: 51px;
    margin-right: 18px;
    display: inline-blockl;
    background: url('../../assets/images/login/logo.png') no-repeat center;
}
.form-box {
    margin-top: 30px;
}
.login-logo-text {
    width:317px;
    height:50px;
    font-size:24px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(68,68,68,1);
    line-height:50px;
}
.login-button {
    width: 100%;
    margin-top: 30px;
}
</style>
