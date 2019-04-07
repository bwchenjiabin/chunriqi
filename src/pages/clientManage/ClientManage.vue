<template>
     <div class="NewPlan">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <div class="plan-title">
                <h1>客户管理</h1>
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
                 <li class="item">接件门店&nbsp;&nbsp;<input type="text" list="itemlist1"></li>
                  <datalist id="itemlist1">
                      <option v-for="(item,index) in list1"
                  :key = "index">{{item.legal_entity_name}}</option>
                  </datalist> 
                  <li class="item">客户状态&nbsp;&nbsp;<input type="text"></li>
                  <li class="item">客户状态&nbsp;&nbsp;<input type="text"></li>
                </ul>
                 <ul class="contacts-list">
                  <li class="item">接收日期&nbsp;&nbsp;<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker></li>
                  <li class="item">实际完成日期&nbsp;&nbsp;<el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker></li>
                  <li class="item">办理业务&nbsp;&nbsp;<input type="text" list="itemlist2"></li>
                  <datalist id="itemlist2">
                      <option v-for="(item,index) in list2"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist>     
                  <li class="item">行业类型&nbsp;&nbsp;<input type="text" list="itemlist3"></li>
                  <datalist id="itemlist3">
                      <option v-for="(item,index) in list3"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist> 
                </ul>
                 <ul class="contacts-list">
                  <li class="item">负责人&nbsp;&nbsp;<input type="text" list="itemlist4"></li>
                  <datalist id="itemlist4">
                      <option v-for="(item,index) in list4"
                  :key = "index">{{item.employee_name}}</option>
                  </datalist> 
                  <li class="item">客户来源&nbsp;&nbsp;<input type="text" list="itemlist5"></li>
                  <datalist id="itemlist5">
                      <option v-for="(item,index) in list5"
                  :key = "index">{{item.udc_name}}</option>
                  </datalist>    
                  <li>
                    是否紧急？
                  <el-radio v-model="radioo" label="1">是</el-radio>
                  <el-radio v-model="radioo" label="2">否</el-radio>
                  </li>
                  <li>
                  是否市场？
                  <el-radio v-model="radio" label="1">是</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
                  </li>
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
                <h2>客户列表</h2>
              </div>
              <div>
                <!-- <ul class="list">
                    <li
                    class="item-list"
                    v-for="(tab, index) in tabletab.table"
                    :key="index"
                    @click="cur=index" :class="{active:cur==index}"
                    >
                    {{tab}}
                    </li>
                </ul> -->
            </div>
              <div class="leading-out">
                <button>导出</button>
             </div>
            </div>
            <!-- <div class="agreementbox">
              <div class="agreement-list">
                <table class="agreement-list-box">
                <tr>
                  <th>客户代码</th>
                  <th>客户简称</th>
                  <th>预警状态</th>
                  <th>办理业务</th>
                  <th>负责人</th>
                  <th>客户地址</th>
                  <th>接件日期</th>
                  <th>标准完成日期</th>
                  <th>实际完成日期</th>
                  <th>收费金额</th>
                  <th>客户状态</th>
                  <th>办理状态代码</th>
                  <th>首席负责人</th>
                  <th>创建时间</th>
                  <th>办理状态</th>
                  <th>环节执行人</th>
                  <th>是否紧急</th>
                </tr>
                <tr  v-for="(item,index) in list"
                :key = "index">
                  <td>{{item.customer_code}}</td>
                  <td>{{item.customer_title}}</td>
                  <td>{{item.warning_state}}</td>
                  <td>{{item.customer_type}}</td>
                  <td>{{item.employee_name}}</td>
                  <td>{{item.customer_business_address}}</td>
                  <td>{{item.customer_found_date}}</td>
                  <td>{{item.customer_finish_date}}</td>
                  <td>{{item.customer_actual_finish_date}}</td>
                  <td>{{item.expense_amt}}</td>
                  <td>{{item.customer_status}}</td>
                  <td>{{item.customer_process_phase}}</td>
                  <td>{{item.chief_officer}}</td>
                  <td>{{item.customer_create_date}}</td>
                  <td>{{item.handling_status}}</td>
                  <td>{{item.operator}}</td>
                  <td>{{item.is_pressing}}</td>
                </tr>
              </table>
              </div>
            </div> -->
        <div class="Customer-total margin">
                <el-table style="width: 100%;"
            :data="list.slice((CustomerTotalPage-1)*CustomerTotalPagesize,CustomerTotalPage*CustomerTotalPagesize)"
            >
                <el-table-column label="客户代码" prop="customer_code"></el-table-column>
                <el-table-column label="客户简称" prop="customer_title"></el-table-column>
                <el-table-column label="预警状态" prop="warning_state"></el-table-column>
                <el-table-column label="办理业务" prop="customer_type"></el-table-column>
                <el-table-column label="负责人" prop="employee_name"></el-table-column>
                <el-table-column label="客户地址" prop="customer_business_address"></el-table-column>
                <el-table-column label="接件日期" prop="customer_found_date"></el-table-column>
                <el-table-column label="标准完成日期" prop="customer_finish_date"></el-table-column>
                <el-table-column label="实际完成日期" prop="customer_actual_finish_date"></el-table-column>
                <el-table-column label="收费金额" prop="expense_amt"></el-table-column>
                <el-table-column label="客户状态" prop="customer_status"></el-table-column>
                <el-table-column label="办理状态代码" prop="customer_process_phase"></el-table-column>
                <el-table-column label="首席负责人" prop="chief_officer"></el-table-column>
                <el-table-column label="创建时间" prop="customer_create_date"></el-table-column>
                <el-table-column label="办理状态" prop="handling_status"></el-table-column>
                <el-table-column label="环节执行人" prop="operator"></el-table-column>
                <el-table-column label="是否紧急" prop="is_pressing"></el-table-column>
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
      tabletab: {
        'table': ['全部', '已分配', '处理中', '已完成', '已取消'],
        'tableTitle': ['客户简称', '主题', '计划开始时间', '计划完成日期', '实际完成日期', '分配人', '执行人', '状态', '状态', '操作']
      },
      cur: 0,
      // 分页
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      list:[],
      list1:{},
      list2:{},
      list3:{},
      list4:{},
      list5:{},
      value1:"",
      value2:"",
      radio: "1",
      radioo: "1",
      CustomerTotalData: [ ], //总数据
      CustomerTotalPage: 1, //初始页
      CustomerTotalPagesize: 5, // 每页的数据
    }
  },
    created () {
    this.getdata();
    // 接件门店
  this.Accessoriesstore();
    // 办理业务
  this.Businessdata();
    // 行业类型
  this.Industrytype();
  // 负责人
  this.Personincharge();
    // 客户来源
  this.Customersource();
  },
  methods: {
             CustomerTotalSize: function(size) {
    this.CustomerTotalPagesize = size;
    },
    CustomerTotalCurrent: function(currentPage) {
    this.CustomerTotalPage = currentPage;
    },
      // 客户来源
    async Customersource () {
    const {data: res} = await this.$axios.post('fs/customer_way_info', {
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
        this.list4 = res.data      
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
      // 办理业务
  async Businessdata () {
    const {data: res} = await this.$axios.post('fs/customer_type_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list2 = res.data  
      }
  },
      // 接件门店
        async Accessoriesstore () {
    const {data: res} = await this.$axios.post('fs/company_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list1 = res.data    
      }
  },
    async getdata () {
      const {data: res} = await this.$axios.post('fs/customer_manage_index', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
        // current_page:1
      })
      if (res.code == 1 ) {
        this.list = res.data.customers
      }
    },
  },
  components: {
    'home-header': Header
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
.button {
    width: 288px;
    height: 44px;
    border: none;
    color: #fff;
    margin: 40px auto;
    border-radius: 5px;
}
.button .button-btn {
    width: 100%;
    height: 44px;
}
.item input{
    border-radius: 5px;
    border: 1px solid rgba(221,221,221,1);
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
  padding: 0 0 10px 0;
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

.contacts-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px 70px 0 70px;
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  margin-bottom: 10px;
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
.list {
  display: flex;
  margin-left: 50px;
}
/* 分页 */
.pages {
    margin-top: 27px;
}
.block {
   margin-top: 16px;
   margin-bottom: 37px;
}
</style>
