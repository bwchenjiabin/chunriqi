<template>
     <div class="UserList">
         <!-- 头部 -->
         <home-header></home-header>
         <!-- 客户信息 -->
        <div class="clientInfo">
           <p class="UserList-title">客户信息</p>
           <div>
             <div class=""></div>
             <div class="form-box">
                  <ul class="form-list">
                  <li class="item">客户编号&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">接件日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户简称&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">办理业务&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户来源&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户地址&nbsp;&nbsp;<input type="text"></li>
                </ul>
                <ul class="form-list">
                  <li class="item">创建日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">标准完成日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户名称&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">行业类型&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户介绍人&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">延迟后完成日期&nbsp;&nbsp;<input type="text"></li>
                </ul>
                <ul class="form-list">
                  <li class="item">客户状态<input type="text"></li>
                  <li>
                    <form action="#">
                      是否市场？
                      <input type="radio" value="是">是&nbsp;&nbsp;
                      <input type="radio" value="是">否&nbsp;&nbsp;
                  </form>
                  </li>
                  <li class="item">接件门店&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">首席负责人&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">定金&nbsp;&nbsp;<input type="text"></li>
                </ul>
                <ul class="form-list">
                  <li class="item">办理状态&nbsp;&nbsp;<input type="text"></li>
                  <li>
                    <form action="#">
                      是否紧急？
                      <input type="radio" value="是">是&nbsp;&nbsp;
                      <input type="radio" value="是">否&nbsp;&nbsp;
                  </form>
                  </li>
                  <li class="item">所属部门&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">负责人&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">收费金额&nbsp;&nbsp;<input type="text"></li>
                </ul>
             </div>
            <div class="need">
              <p>客户详细需求:&nbsp;&nbsp;<input type="text"></p>
            </div>
           </div>
           <!-- 客户联系人信息 -->
           <div class="contacts">
             <div class="info-title">
               <div class="info-title"></div>
               <p class="border-left"></p>
               <p>客户联系人信息</p>
             </div>
             <div class="form-list">
                <ul class="contacts-list">
                  <li class="item">客户编号&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">接件日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户简称&nbsp;&nbsp;<input type="text"></li>
                </ul>
             </div>
           </div>
           <!-- 记账信息 -->
           <div class="contacts">
             <div class="info-title">
               <div class="info-title"></div>
               <p class="border-left"></p>
               <p>记账信息</p>
             </div>
             <div class="form-list">
                <ul class="contacts-list">
                  <li class="item">客户编号&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">接件日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户简称&nbsp;&nbsp;<input type="text"></li>
                </ul>
             </div>
           </div>
         </div>
         <!-- 收费信息 -->
           <div class="type-box">
             <div class="type">
             <div class="info-title">
               <div class="info-title"></div>
               <p class="border-left"></p>
               <p>收费信息</p>
             </div>
             <div>
               <ul class="type-list">
                  <li class="item">费用类型</li>
                  <li class="item">费用类型</li>
                  <li class="item">费用类型</li>
                  <li class="item">费用类型</li>
                  <li class="item">费用类型</li>
                  <li class="item">费用类型</li>
                  <li class="item">费用类型</li>
                </ul>
              <div class="type-input-top">
                <ul class="input-top">
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                </ul>
              </div>
              <!-- 二 -->
              <div class="type-input-button">
                <ul class="input-button">
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                </ul>
              </div>
            </div>
           </div>
          </div>
           <!-- 客户通过记录 -->
     </div>
</template>

<script>
import Header from '@/pages/home/components/Header'
export default {
  name: 'UserList',
  data () {
    return {
      user_id: '',
      token: '',
      list: []
    }
  },
  created () {
  // console.log(this.$route.query);
  // 办理业务
  this.getVocationalData()
  // 客户来源
  // 行业类型
  // 接件门店
  // 所属部门
  // 负责人
},
methods: {
  // 办理业务
  async getVocationalData () {
    const {data: res} = await this.$axios.post('fs/customer_type_info', {
      user_id: this.$route.query.id,
      token: this.$route.query.token
    })
    console.log(res);
  },
  
  // 客户来源
  // 行业类型
  // 接件门店
  // 所属部门
  // 负责人
},
  components: {
    'home-header': Header
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.clientInfo {
  width: 100%;
  height: 100%;
  font-size: 18px;
  padding: 0 110px;
  border-radius: 5px;
}
.UserList-title {
  margin-top: 30px;
  color:rgba(2,166,237,1);
}
.form-box {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
}
.form-list {
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  line-height:22px;
  padding: 5px 0 40px 0px;
}
.form-list .item{
  text-align: right;
  margin: 10px 40px 5px 40px;
}
.form-list .item input {
  width: 170px;
  height: 25px;
}
.info-title {
  line-height: 35px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #DDDDDD;
}
.border-left {
  padding-left: 5px;
  margin-left: 10px;
  width: 3px;
  height: 10px;
  border-left: 3px solid rgba(2,166,237,1);
  border-radius: 1px;
}
.item input {
  border-radius: 5px;
  border: 1px solid rgba(221,221,221,1);
}
.need {
  margin-top: -30px;
  font-size: 12px;
  padding-left: 15px;
}
.need input {
  width: 91%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid rgba(221,221,221,1);
}
/* 客户联系人信息 */
.contacts {
  margin-top: 32px;
  /* overflow: hidden; */
  background-color: #fff;
}
.contacts-list {
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  line-height:114px;
}
.contacts-list .item {
  margin-left: 125px;
  width: 91%;
  border-radius: 5px;
}
.item input {
  width: 200px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid rgba(221,221,221,1);
}
.contacts-title {
  display: flex;
  font-size: 16px;
  line-height: 53px;
  border-bottom: 1px solid #DDDDDD;
  background-color: #fff;
}
/* 收费信息 */
.collect {
  display: flex;
  font-size: 16px;
  line-height: 53px;
  background-color: #fff;
  margin-top: 35px;
  align-items: center;
}
.collect-title {
  padding-left: 5px;
  margin-left: 10px;
  width: 3px;
  height: 10px;
  border-left: 3px solid rgba(2,166,237,1);
  border-radius: 1px;
}
.type {
  width: 100%;
  height: 40px;
}
.type-list {
  font-size: 13px;
  text-align: center;
  display: flex;
  margin-bottom: 10px 60px;
  /* padding: 10px 60px; */
  justify-content: space-between;
  align-items: center;
  background-color: #F0F0F0;
}
.type-list-item input {
  width: 170px;
  margin: 10px 0;
}
.color {
  background-color: #F9F9F9;
}
/* 收费类型 */
.type-item {
  width: 100%;
}
.type-input-top {
  padding: 10px 0;
  width: 100%;
  background-color: #fff;
}
.input-item input {
  width: 170px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid rgba(221,221,221,1);
}
.input-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.type-input-button {
  width: 100%;
  background-color: #F9F9F9;
}
.input-button {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 客户沟通记录 */
.communicate {
  width: 100%;
  height: 100px;
  background-color: red;
}
.type-box {
  padding: 0 110px;
  margin-top: 30px;
}
</style>
