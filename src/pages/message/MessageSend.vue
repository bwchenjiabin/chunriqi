<template>
     <div class="message">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <div class="plan-title">
                <h1>
                    <router-link to="/Message">短信模板信息</router-link>
                </h1>
                <h1>
                    <router-link to="/MessageSend" class="blue">短信发送数据</router-link>
                </h1>
           </div>
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
                          <button class="new">发送短信</button>
                      </span>
                  </li>
                </ul>
             </div>
           </div>
           <!-- 合同列表 -->
           <div class="agreement">
             <div class="work-list">
              <div class="title-box">
                <div class="information-border-left"></div>
                <h2>模板列表</h2>       
              </div>
              <div class="leading-out">
                <button>导出</button>
             </div>
            </div>
            <div class="agreementbox">
              <div class="agreement-list">
                <table class="agreement-list-box">
                <tr>
                  <th>订单编号</th>
                  <th>企业简称</th>
                  <th>发送手机号码</th>
                  <th>发送日期</th>
                  <th>发送人</th>
                  <th>发送内容</th>
                  <th>发送成功状态</th>
                </tr>
                <tr v-for="(item,index) in list"
                    :key = "index">
                  <td>
                    <router-link to="/Detailed" class="blue">{{item.message_send_log_code}}</router-link>
                  </td>
                  <td>{{item.customer_code}}</td>
                  <td>{{item.message_send_phone_number}}</td>
                  <td>{{item.message_send_date}}</td>
                  <td>{{item.owner_user}}</td>
                  <td>{{item.message_send_content}}</td>  
                  <td>{{item.message_send_status}}</td>  
                </tr>
              </table>
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
      list:{}
    }
  },
  components: {
    'home-header': Header
  },
    created () {
    this.getdata()
  },
  methods: {
      async getdata () {
      const {data: res} = await this.$axios.post('fs/selectMessageLog', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
      })
      if (res.code == 200 ) {
        this.list = res.data.data
      }
    },
  }
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
    margin-right: 40px;
}
.plan-title .blue {
  color: #02A6ED;
}
/* 客户信息 */
.user-information {
  padding: 0 0 44px 0;
  background-color: #fff;
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
.agreement-list .agreement-list-box th,td {
  width: 181px;
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
    background-color: #49E6A9;
    text-align: center;
}
</style>
