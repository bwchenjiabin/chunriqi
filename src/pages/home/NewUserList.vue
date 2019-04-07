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
                  <li class="item">办理业务&nbsp;&nbsp;<input type="text" list="itemlist"></li>
                  <datalist id="itemlist">
                      <option v-for="(item,index) in list1"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist>     
                  <li class="item">客户来源&nbsp;&nbsp;<input type="text" list="itemlist1"></li>
                  <datalist id="itemlist1">
                      <option v-for="(item,index) in list2"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist>    
                  <li class="item">客户地址&nbsp;&nbsp;<input type="text"></li>
                </ul>
                <ul class="form-list">
                  <li class="item">创建日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">标准完成日期&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户名称&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">行业类型&nbsp;&nbsp;<input type="text" list="itemlist2"></li>
                  <datalist id="itemlist2">
                      <option v-for="(item,index) in list3"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist> 
                  <li class="item">客户介绍人&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">延迟后完成日期&nbsp;&nbsp;<input type="text"></li>
                </ul>
                <ul class="form-list">
                  <li class="item">客户状态<input type="text"></li>
                  <li>
                  是否市场？
                  <el-radio v-model="radio" label="1">是</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
                  </li>
                  <li class="item">接件门店&nbsp;&nbsp;<input type="text" list="itemlist3"></li>
                  <datalist id="itemlist3">
                      <option v-for="(item,index) in list4"
                  :key = "index">{{item.legal_entity_name}}</option>
                  </datalist> 
                  <li class="item">首席负责人&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">定金&nbsp;&nbsp;<input type="text"></li>
                </ul>
                <ul class="form-list">
                  <li class="item">办理状态&nbsp;&nbsp;<input type="text"></li>
                  <li>
                    是否紧急？
                  <el-radio v-model="radioo" label="1">是</el-radio>
                  <el-radio v-model="radioo" label="2">否</el-radio>
                  </li>
                  <li class="item">所属部门&nbsp;&nbsp;<input type="text" list="itemlist4"></li>
                  <datalist id="itemlist4">
                      <option v-for="(item,index) in list5"
                  :key = "index">{{item.department_name}}</option>
                  </datalist> 
                  <li class="item">负责人&nbsp;&nbsp;<input type="text" list="itemlist5"></li>
                  <datalist id="itemlist5">
                      <option v-for="(item,index) in list6"
                  :key = "index">{{item.employee_name}}</option>
                  </datalist> 
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
                  <li class="item">姓名&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">联系方式&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">邮箱&nbsp;&nbsp;<input type="text"></li>
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
                  <li class="item">记账会计&nbsp;&nbsp;<input type="text" list="itemlist6"></li>
                  <datalist id="itemlist6">
                      <option v-for="(item,index) in list7"
                  :key = "index">{{item.employee_name}}</option>
                  </datalist> 
                  <li class="item">开始日期&nbsp;&nbsp;<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker></li>
                  <li class="item">结束日期&nbsp;&nbsp;<el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker></li>
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
               <ul class="type-list list">
                  <li class="item">费用类型</li>
                  <li class="item">收费标准</li>
                  <li class="item">说明</li>
                  <li class="item">未收金额</li>
                  <li class="item">已收金额</li>
                  <li class="item">收款人</li>
                  <li class="item">收款日期</li>
                </ul>
              <div class="type-input-top">
                <ul class="input-top">
                  <li class="input-item"><input type="text" list="itemlist7"></li>
                  <datalist id="itemlist7">
                      <option v-for="(item,index) in list8"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist> 
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                </ul>
              </div>
              <div class="type-input-top">
                <ul class="input-top">
                  <li class="input-item"><input type="text" list="itemlist7"></li>
                  <datalist id="itemlist7">
                      <option v-for="(item,index) in list8"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist> 
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                  <li class="input-item"><input type="text"></li>
                </ul>
              </div>
              <!-- 二 -->
              <div class="content">
              <div class="info-title">
               <p class="border-left"></p>
               <p>客户沟通记录</p>
             </div>
                <div class="type-input-button">
                  <ul class="type-list list">
                  <li class="item">沟通原因类型</li>
                  <li class="item">沟通方式</li>
                  <li class="item">预计处理时间</li>
                  <li class="item">沟通内容</li>
                  <li class="item">沟通备注</li>
                  <li class="item">创建时间</li>
                  <li class="item">沟通人</li>
                </ul>
                  <ul class="input-button" style="padding-left: 20px;">
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
              <div class="content">
              <div class="info-title">
               <p class="border-left"></p>
               <p>超时预警通知书记录</p>
             </div>
                <div class="type-input-button">
                  <ul class="type-list lista">
                  <li class="item">单据编号</li>
                  <li class="item">生成日期</li>
                  <li class="item">提交日期</li>
                  <li class="item">申请人</li>
                  <li class="item">所在部门</li>
                  <li class="item">客户名称</li>
                  <li class="item">办理业务</li>
                  <li class="item">申请延时天数</li>
                  <li class="item">审批状态</li>
                </ul>
                  <ul class="input-button">
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                  </ul>
                </div>
              </div>
              <div class="content">
              <div class="info-title">
               <p class="border-left"></p>
               <p>超时预警通知书记录</p>
             </div>
                <div class="type-input-button">
                  <ul class="type-list lista">
                  <li class="item">上传文件名称</li>
                  <li class="item">生成日期</li>
                  <li class="item">提交日期</li>
                  <li class="item">申请人</li>
                  <li class="item">所在部门</li>
                  <li class="item">客户名称</li>
                  <li class="item">办理业务</li>
                  <li class="item">申请延时天数</li>
                  <li class="item">审批状态</li>
                </ul>
                  <ul class="input-button">
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                    <li class="input-item"><input type="text" style="width:115px;"></li>
                  </ul>
                </div>
              </div>
            </div>
           </div>
          </div>
           <!-- 客户通过记录  我怎么看啊 -->
     </div>
</template>

<script>
import Header from '@/pages/home/components/Header'
export default {
  name: 'UserList',
  data () {
    return {
      list1: {},
      list2: {},
      list3: {},
      list4: {},
      list5: {},
      list6: {},
      list7: {},
      list8: {},
      radio: "1",
      radioo: "1",
      value1: "",
      value2: ""
    }
  },
  created () {
  // 办理业务
  this.Businessdata();
  // 客户来源
  this.Customersource();
  // 行业类型
  this.Industrytype();
  // 接件门店
  this.Accessoriesstore();
  // 所属部门
  this.Departmentallist();
  // 负责人
  this.Personincharge();
  // 记账会计
  this.accounting();
  // 费用类型
  this.Costtype();

},
methods: {
  // 办理业务
  async Businessdata () {
    const {data: res} = await this.$axios.post('fs/customer_type_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list1 = res.data  
      }
  },
  
  // 客户来源
    async Customersource () {
    const {data: res} = await this.$axios.post('fs/customer_way_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list2 = res.data    
      }
  },
  
  // 行业类型
      async Industrytype () {
    const {data: res} = await this.$axios.post('fs/company_type_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list3 = res.data     
      }
  },
  // 接件门店
        async Accessoriesstore () {
    const {data: res} = await this.$axios.post('fs/company_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list4 = res.data    
      }
  },
  
  // 所属部门
  async Departmentallist () {
    const {data: res} = await this.$axios.post('fs/department_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list5 = res.data     
      }
  },
  // 负责人 
    async Personincharge () {
    const {data: res} = await this.$axios.post('fs/user_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list6 = res.data      
      }
  },
  // 会计
      async accounting () {
    const {data: res} = await this.$axios.post('fs/user_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list7 = res.data      
      }
  },
  // 费用类型
        async Costtype () { 
    const {data: res} = await this.$axios.post('fs/cost_type_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list8 = res.data      
      }
  },
},
  components: {
    'home-header': Header
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
.list li{
  display:block;
  padding: 8px 50px;
}
.lista li{
  display:block;
  padding: 8px 15px;
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
  width: 140px;
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
