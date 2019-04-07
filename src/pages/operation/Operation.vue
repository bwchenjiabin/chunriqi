<template>
    <div class="operation-box">
        <!-- 头部 -->
        <home-header></home-header>
        <div class="operation">
            <div class="operation-header">
            <div class="plan-title">
                <h1>工作计划</h1>
            </div>
           <div class="user-information">
             <div class="title-box">
               <div class="information-border-left"></div>
               <h2>客户信息</h2>
             </div>
             <!-- 客户信息列表 -->
             <div class="user-list">
               <ul class="list-box">
                <li class="item">关键字符&nbsp;&nbsp;<input type="text"></li>
                <li class="item"><span>计划开始日期</span>&nbsp;&nbsp;<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker></li>
                <li class="item">执行人&nbsp;&nbsp;<input type="text" list="itemlist"></li>
                  <datalist id="itemlist">
                      <option v-for="(item,index) in list1"
                  :key = "index">{{item.employee_name}}</option>
                  </datalist>     
               </ul>
               <ul class="list-box">
                 <li class="item">客户名称&nbsp;&nbsp;<input type="text"></li>
                <li class="item">计划完成日期&nbsp;&nbsp;<el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker></li>
                <li class="item">分配人&nbsp;&nbsp;<input type="text" list="itemlist1"></li>
                  <datalist id="itemlist1">
                      <option v-for="(item,index) in list1"
                  :key = "index">{{item.employee_name}}</option>
                  </datalist>     
               </ul>
               <ul class="list-box">
                <li style="display:block;">
                  客户状态
                  <el-radio v-model="radio" label="1">已分配</el-radio>
                  <el-radio v-model="radio" label="2">处理中</el-radio>
                  <el-radio v-model="radio" label="3">已完成</el-radio>
                  <el-radio v-model="radio" label="4">已取消</el-radio>
                  </li>
                 <li class="item">实际完成日期&nbsp;&nbsp;<el-date-picker v-model="value3" type="date" placeholder="选择日期"></el-date-picker></li>
                <li class="list-item">
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" class="seek">查 找</el-button>
                    </span>
                </li>
               </ul>
             </div>
           </div>
            </div>
        <!-- 工作列表 -->
        <div class="work-list">
            <div class="title-box">
               <div class="information-border-left"></div>
               <h2>工作列表</h2>
            </div>
            <div>
                <ul class="list">
                    <li
                    class="item-list"
                    v-for="(tab, index) in tabletab.table"
                    :key="index"
                    @click="cur=index" :class="{active:cur==index}"
                    >{{tab}}</li>
                </ul>
            </div>
            <div class="leading-out">
                <button>导出</button>
            </div>
        </div>
        <div class="work-list-box">
            <!-- <div>
                <table class="sharingTable">
					<tr>
						<th 
                        v-for="(title, index) in tabletab.tableTitle" 
                        :key="index"
                        >{{title}}</th>                
					</tr>
					<tr v-for="(item,index) in list"
                    :key = "index">
						<td>
                            <router-link to="/OperationList" class="blue">{{item.customer_title}}</router-link>
                        </td>
                        <td>{{item.work_item_desc}}</td>
                        <td>{{item.org_plan_begin_date}}</td>
                        <td>{{item.org_plan_finished_date}}</td>
                        <td>{{item.actual_finish_date}}</td>
                        <td>{{item.assigner}}</td>
                        <td>{{item.operator}}</td>
                        <td>{{item.status}}</td>
                        <td>{{item.days}}</td>
                        <td>{{item.work_item_code}}</td>
					</tr>
				</table>
                
            </div> -->
            <!-- <div class="pages fr">
                <div class="block">
                   <el-pagination
                    @size-change="CustomerTotalSize"
                    @current-change="CustomerTotalCurrent"
                    :current-page="CustomerTotalPage"
                    :page-sizes="[5, 10, 20, 40]"
                    :page-size="CustomerTotalPagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="CustomerTotalData.length"
                    ></el-pagination>
                </div>
            </div> -->
            <div class="Customer-total margin">
                <el-table style="width: 100%;"
            :data="list.slice((CustomerTotalPage-1)*CustomerTotalPagesize,CustomerTotalPage*CustomerTotalPagesize)"
            >
                <el-table-column label="客户简称" prop="customer_title"></el-table-column>
                <el-table-column label="主题" prop="work_item_desc"></el-table-column>
                <el-table-column label="计划开始时间" prop="org_plan_begin_date"></el-table-column>
                <el-table-column label="计划完成日期" prop="org_plan_finished_date"></el-table-column>
                <el-table-column label="实际完成日期" prop="actual_finish_date"></el-table-column>
                <el-table-column label="分配人" prop="assigner"></el-table-column>
                <el-table-column label="执行人" prop="operator"></el-table-column>
                <el-table-column label="工作项状态" prop="status"></el-table-column>
                <el-table-column label="距离完成天数" prop="days"></el-table-column>
                <el-table-column label="工作项状态代码" prop="work_item_code"></el-table-column>
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
    data () {
    return {
            tabletab: {
                  'table': ['全部', '已分配', '处理中', '已完成', '已取消'],
                  'tableTitle': ['客户简称', '主题', '计划开始时间', '计划完成日期', '实际完成日期', '分配人', '执行人', '工作项状态', '距离完成天数', '工作项状态代码']
            },
             cur: 0,
            //  分页
            // currentPage1: 5,
            // currentPage2: 5,
            // currentPage3: 5,
            // currentPage4: 21,
            list:[],
            current_page:"",
            list1:{},
            value1:"",
            value2:"",
            value3:"",
            radio: "1",
            CustomerTotalData: [ ], //总数据
            CustomerTotalPage: 1, //初始页
            CustomerTotalPagesize: 5, // 每页的数据
        }
    },
      created () {
    this.getdata();
    // 执行人
    this.Executor();
  },
    methods: {
        // 分页
    CustomerTotalSize: function(size) {
    this.CustomerTotalPagesize = size;
    },
    CustomerTotalCurrent: function(currentPage) {
    this.CustomerTotalPage = currentPage;
    },
        // 分页功能 
    //   handleSizeChange (val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    //   handleCurrentChange (val) {
    //     console.log(`当前页: ${val}`);
    //   },
    async getdata () {
      const {data: res} = await this.$axios.post('fs/work_index', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
        page: 1
      })
      if (res.code == 1 ) {
        this.list = res.data.works
        this.current_page = res.data.current_page    
      }
    //   console.log(res.data.current_page)
        },
    // 执行人
    async Executor () {
    const {data: res} = await this.$axios.post('fs/user_info', {
      user_id: this.getCookie('id'),
      token: this.getCookie('token'),
    })
    if (res.code == 1 ) {
        this.list1 = res.data
      }
  },
    },
    components: {
        'home-header': Header
    }
}
</script>

<style scoped>
.item input{
    border-radius: 5px;
    border: 1px solid rgba(221,221,221,1);
}
.operation {
  width: 100%;
  padding: 0 120px;
}
.plan-title {
  padding: 30px 0 10px 17px;
}
.plan-title h3 {
  color: #02A6ED;
  font-weight:600;
  font-size:22px;
}
/* 工作计划 */
.user-information {
  background-color: #fff;
}
.user-information span {
    display: inline-block;
    
}
.item{
  text-align: right;
  margin: 10px 40px 5px 40px;
}
.item input {
  width: 170px;
  height: 25px;
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
/* 客户信息列表 */
.list-box {
  line-height: 32px;
  font-size: 16px;
}
.user-list {
  display: flex;
  justify-content: space-between;
  padding: 40px 31px 40px 0px;
  
}
.prive {
  display: inline-block;
  text-align: right;
  width: 100px;
  text-align: right;
  margin-right: 16px;
  color:rgba(119,119,119,1);
}
.item-content {
  color:rgba(68,68,68,1);
  font-weight:500;
  margin-right: 2px;
}

.item-content select {
    width: 91px;
}
.item-content .select {
    width: 200px;
}
.seek {
    width: 240px;
    height: 34px;
    margin-left: 100px;
}
/* 工作列表 */
.work-list {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;   
    background-color: #fff;
}
.distribution-list {
    margin-left: 50px;
}
.list {
    display: flex;
    margin-left: 50px;
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
/* 表格 */
.sharingTable tr, td {
    width: 149px;
    text-align: center;
    line-height: 31px;
    color:rgba(68,68,68,1);
}
.sharingTable th {
    background-color: #F0F0F0;
}
.sharingTable td {
    border-left: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
}
.sharingTable th {
    font-weight: 400;
}
.blue {
    color:rgba(2,166,237,1);
}
/* 分页 */
.pages {
    margin-bottom: 27px;
}
</style>
