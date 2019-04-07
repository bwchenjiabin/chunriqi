<template>
     <div class="message">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <!-- 客户信息 -->
           <div class="user-information">
             <div class="title-box">
               <div class="information-border-left"></div>
               <h2>搜索</h2>       
             </div>
             <!-- 订单 -->
             <div class="form-list">
                <ul class="contacts-list">
                  <li class="item">关键字符&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">
                      <span>
                          <button class="seek">查找</button>
                      </span>
                  </li>
                  <li class="item">
                      <span>
                          <button class="new" @click="dialogVisible = true">新建账号</button>
                      </span>
                  </li>
                </ul>
             </div>
           </div>
           <!-- 新建模板弹窗 -->
           <el-dialog
                title="新建账号"
                :visible.sync="dialogVisible"
                :center="true"
                width="35%">
                           <div class="password">
                    <div class="password-box">
                        <ul class="account">
                            <li class="account-list">
                                <span class="account-item">账号&nbsp;&nbsp;</span>
                                <input type="text">
                            </li>
                             <li class="account-list">
                                <span class="account-item">姓名&nbsp;&nbsp;</span>
                                <input type="text">
                            </li>
                             <li class="account-list">
                                <span class="account-item">密码&nbsp;&nbsp;</span>
                                <input type="text">
                            </li>
                             <li class="account-list">
                                <span class="account-item">确认密码&nbsp;&nbsp;</span>
                                <input type="text">
                            </li>
                        </ul>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false" class="good">保 存</el-button>
                </span>
            </el-dialog>
           <!-- 合同列表 -->
           <div class="agreement">
             <div class="work-list">
              <div class="title-box">
                <div class="information-border-left"></div>
                <h2>账号列表</h2>       
              </div>
              <div class="leading-out">
                <button>导出</button>
             </div>
            </div>
            <div class="agreementbox">
              <div class="agreement-list">
                <table class="agreement-list-box">
                <tr>
                  <th>用户ID</th>
                  <th>姓名</th>
                  <th>用户账号</th>
                  <th>密码</th>
                  <th>操作</th>
                </tr>
                <tr v-for="(item,index) in list"
                :key = "index">
                  <td>
                    <router-link to="/Detailed" class="blue">{{item.id}}</router-link>
                  </td>
                  <td>{{item.name}}</td>
                  <td>{{item.account}}</td>
                  <td>{{item.password}}</td>
                  <td class="button">
                    <button class="btn1" @click="revise=true">修改</button>
                    <button class="btn2">删除</button>
                  </td>
                </tr>
              </table>
              <el-dialog
                title="短信模板新建"
                :visible.sync="revise"
                :center="true"
                width="40%">
                <div class="password">
                    <div class="password-box">
                        <ul class="account">
                            <li class="account-list">
                                <span class="account-item">账号&nbsp;&nbsp;</span>
                                <span>sadadadsaad</span>
                            </li>
                             <li class="account-list">
                                <span class="account-item">账号&nbsp;&nbsp;</span>
                                <span>乐尔唐</span>
                            </li>
                             <li class="account-list">
                                <span class="account-item">旧密码&nbsp;&nbsp;</span>
                                <span><input type="text"></span>
                            </li>
                             <li class="account-list">
                                <span class="account-item">新密码&nbsp;&nbsp;</span>
                                <span><input type="text"></span>
                            </li>
                             <li class="account-list">
                                <span class="account-item">确认新密码&nbsp;&nbsp;</span>
                                <span><input type="text"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="revise = false" class="good">保 存</el-button>
                </span>
            </el-dialog>
              </div>
            </div>
           </div>
         </div>
     </div>
</template>

<script>
import Header from '@/pages/home/components/Header'
export default {
  name: 'message',
  data () {
    return {
      tabletab: {
            'table': ['全部', '已分配', '处理中', '已完成', '已取消'],
            'tableTitle': ['客户简称', '主题', '计划开始时间', '计划完成日期', '实际完成日期', '分配人', '执行人', '状态', '状态', '操作']
      },
      cur: 0,
      dialogVisible: false,
      revise:false,
      list:{}
    }
  },
    created () {
    this.getdata()
  },
  methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    //   revise(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   },
    async getdata () {
      const {data: res} = await this.$axios.post('fs/admin_list', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
      })
      if (res.code == 1 ) {
        this.list = res.data
      }
    },
  },
  components: {
    'home-header': Header
  },
}
</script>

<style scoped>
/* 全局盒子 */
.plan {
  width: 100%;
  padding: 0 130px;
}
/* 面包屑 */
.separator {
    margin-top: 10px;
}
/* 客户工作计划标题 */
.plan-title {
    display: flex;
    align-items: center;
    padding: 30px 0 10px 17px;
}
.plan-title h1 {
    font-size: 21px;
    color: #999999;
    margin-right: 40px;
}
li input{
    border-radius: 5px;
    border: 1px solid rgba(221,221,221,1);
}
.plan-title .blue {
  color: #02A6ED;
}
/* 客户信息 */
.user-information {
  padding: 0 0 44px 0;
  background-color: #fff;
  margin-top: 40px;
}
.title-box {
  height: 73px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
}
.information-border-left {
  width: 4px;
  height: 16px;
  background:rgba(2,166,237,1);
  border-radius:3px;
  margin: 0px 16px 0 40px;
}
.contacts-list .item {
    margin-right: 40px;
}
.contacts-list {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 26px 0 55px;
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  margin-bottom: 20px;
}
.form-list {
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  line-height:22px;
}
.form-list .item input {
  width: 180px;
  height: 25px;
}
.item select {
  width: 180px;
  height: 25px;
}
/* 列表 */
.work-list {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;   
    background-color: #fff;
}
.leading-out {
    position: absolute;
    top: 20;
    right:39px;
}
.leading-out button {
    width: 118px;
    height: 34px;
    border-radius: 5px;
    border: none;
    color: #fff;
    background-color: #17D684;
}
.work-list-box {
    width: 100%;
    padding: 0 39px;
    background: #fff;
}
.agreementbox {
  background: #fff;
  padding: 0 39px 29px;
}
.agreement-list {
  width: 100%;
  text-align: center;
  border: 1px solid #DDDDDD;
}
.agreement-list-box th {
  font-weight: 400;
  background-color: #F0F0F0;
}
.agreement-list-box th,td {
  width: 315px;
  height: 39px;
  border-right: 1px solid #DDDDDD;
}
.agreement-list-box td:nth-child(1) router-link {
    color: #02A6ED;
}
.blue {
  color:rgba(18,140,255,1);
}
table tr:nth-child(even){
background: #F9F9F9;
}
.item-list {
    margin-right: 20px;
    padding: 2px 26px;
    color: #128CFF;
    cursor:pointer;
    border: 1px solid #128CFF;
    border-radius: 20px;
}
.active {
    background-color: #128CFF;
    color: #fff;
}
.contacts-list {
    margin-top: 40px;
}
.seek {
    width: 100px;
    height: 40px;
    border-radius:4px;
    border: none;
    color: #fff;
    text-align: center;
    background-color: #02A6ED
}
.new {
    width: 118px;
    height: 40px;
    border-radius:4px;
    border: none;
    color: #fff;
    background-color: #FA7171;
    text-align: center;
}
/* 短信模板 */
.templet {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.good {
    width: 200px;
    height: 54px;
}
.content {
    display: flex;

}
.templet-name {
    display: inline-block;
    width: 94px;
    text-align: right;
    margin-right: 5px;
}
.templet-first select {
    width: 175px;
}
.button button {
    border: none;
    width: 70px;
    height: 26px;
    color: #fff;
}
.btn1 {
    background-color: #02A6ED;
    border-radius:4px;
}
.btn2 {
    background-color: #BABABA;
    border-radius:4px;
}
.account-item {
    width: 100%;
    display: inline-block;
    text-align: right;
    width: 79px;
    margin: auto;
}
.password-box {
    width: 100%;
    padding-left: 90px;
}
.account-list {
    margin-bottom: 20px;
}
</style>
