<template>
     <div class="NewPlan">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <div class="plan-title">
             <p>
               <router-link to="/Finance" class="blue">合同管理</router-link>
             </p>
             <p>
               <router-link to="/Income">收入管理</router-link>
             </p>
             <p>
               <router-link to="/Pay">支出管理</router-link>
             </p>
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
                  <li class="item">订单ID&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">
                      <span>开始时间&nbsp;&nbsp;</span>
                      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                  </li>
                  <li class="item">
                      <span>结束时间&nbsp;&nbsp;</span>
                      <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
                  </li>
                  <li class="item">办理业务&nbsp;&nbsp;<input type="text" list="itemlist"></li>
                  <datalist id="itemlist">
                      <option v-for="(item,index) in list1"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist>     
                </ul>
             </div>
             <div class="button">
                <el-row>
                    <el-button type="primary" class="button-btn">查&nbsp;找</el-button>
                </el-row>
             </div>
           </div>
           <!-- 合同列表 -->
           <div class="agreement">
             <div class="work-list">
              <div class="title-box">
                <div class="information-border-left"></div>
                <h2>合同列表</h2>       
              </div>
              <div class="leading-out">
                <button>导出</button>
             </div>
            </div>
            <div class="Customer-total margin">
                <el-table style="width: 100%;" :data="list.slice((CustomerTotalPage-1)*CustomerTotalPagesize,CustomerTotalPage*CustomerTotalPagesize)">
                <el-table-column label="订单ID" prop="id"></el-table-column>
                <el-table-column label="合同编号" prop="contract_number"></el-table-column>
                <el-table-column label="企业名称" prop="customer_code"></el-table-column>
                <el-table-column label="办理业务名称" prop="business_id"></el-table-column>
                <el-table-column label="合同开始时间" prop="begin_time"></el-table-column>
                <el-table-column label="合同结束时间" prop="end_time"></el-table-column>
                <el-table-column label="合同支付方式" prop="service"></el-table-column>
                <el-table-column label="合同金额" prop="money"></el-table-column>
                <el-table-column label="详情" prop="scope" >
                  <template slot-scope="scope">
                    <el-button @click="openDetails(scope.row.id)">查看</el-button>
                  </template>
                  </el-table-column>
                <el-table-column label="操作" prop="">续约</el-table-column>
            </el-table>
            <el-pagination
@size-change="CustomerTotalSize"
@current-change="CustomerTotalCurrent"
:current-page="CustomerTotalPage"
:page-sizes="[5, 10, 20, 40]"
:page-size="CustomerTotalPagesize"
layout="total, sizes, prev, pager, next, jumper"
:total="list.length"
></el-pagination>
</div>
           </div>
         </div>
     </div>
</template>

<script>
import Header from '@/pages/home/components/Header'  
export default {
  name: 'NewPlan',
  data () {
    return {
       value1:"",
       value2:"",
       list1:{},
       CustomerTotalData: [ ], //总数据
      CustomerTotalPage: 1, //初始页
      CustomerTotalPagesize: 5, // 每页的数据
      list:[],
    }
  },
  created () {
    this.getdata();
      // 办理业务
  this.Businessdata();
  },
  methods: {
        CustomerTotalSize: function(size) {
    this.CustomerTotalPagesize = size;
    },
    CustomerTotalCurrent: function(currentPage) {
    this.CustomerTotalPage = currentPage;
    },
      async Businessdata () {
    const {data: res} = await this.$axios.post('fs/customer_type_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list1 = res.data  
      }
  },
    async getdata () {
      const {data: res} = await this.$axios.post('fs/selcetContract', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
      })
      if (res.code == 200 ) {
        this.list = res.data.data
      }
      // console.log(res.data.data)
        },
        openDetails(id){
          this.$router.push({
            path:`/Detailed`,
            query: {id:id}
          })
        }
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
.button {
    width: 288px;
    height: 44px;
    border: none;
    color: #fff;
    margin: auto;
    border-radius: 5px;
}
.item input{
    border-radius: 5px;
    border: 1px solid rgba(221,221,221,1);
}
.button .button-btn {
    width: 100%;
    height: 44px;
}
.plan-title {
    display: flex;
    align-items: center;
    padding: 30px 0 10px 17px;
}
.plan-title p {
    font-size: 21px;
    margin-left: 40px;
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
}
.information-border-left {
  width: 4px;
  height: 16px;
  background:rgba(2,166,237,1);
  border-radius:3px;
  margin: 0px 16px 0 40px;
}

.contacts-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0 26px 0 55px;
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  line-height:114px;
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
.blue {
  color:rgba(18,140,255,1);
}
table tr:nth-child(even){
background: #F9F9F9;
}

</style>
