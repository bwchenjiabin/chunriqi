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
                <li class="list-item">
                   <span class="prive">关键字符</span>
                   <span class="item-content"><input type="text"></span>
                </li>
                <li class="list-item">
                   <span class="prive">计划开始日期</span>
                   <span class="item-content">
                       <select name="name" id="">
                           <option value="1"></option>
                       </select>
                       <span>-</span>
                       <select name="name" id="">
                           <option value="1"></option>
                       </select>
                   </span>
                </li>
                <li class="list-item">
                   <span class="prive">执行人</span>
                   <span class="item-content">
                       <select name="name" id="" class="select">
                           <option value="1"></option>
                       </select>
                   </span>
                </li>
               </ul>
               <ul class="list-box">
                <li class="list-item">
                   <span class="prive">客户名称</span>
                   <span class="item-content">
                       <select name="name" id="" class="select">
                           <option value="1"></option>
                       </select>
                   </span>
                </li>
                <li class="list-item">
                   <span class="prive">计划完成日期</span>
                   <span class="item-content">
                       <select name="name" id="">
                           <option value="1"></option>
                       </select>
                       <span>-</span>
                       <select name="name" id="">
                           <option value="1"></option>
                       </select>
                   </span>
                </li>
                <li class="list-item">
                   <span class="prive">分配人</span>
                   <span class="item-content">
                        <select name="name" id="" class="select">
                           <option value="1"></option>
                       </select>
                   </span>
                </li>
               </ul>
               <ul class="list-box">
               <li class="list-item">
                    <span class="prive">客户状态</span>
                    <span class="item-content">
                        <input type="radio">&nbsp;已分配
                    </span>
                    <span>
                       <input type="radio">&nbsp;处理中
                    </span>
                    <span>
                        <input type="radio">&nbsp;已完成
                    </span>
                    <span>
                        <input type="radio">&nbsp;已取消
                    </span>
                </li>
                 <li class="list-item">
                   <span class="prive">实际完成日期</span>
                   <span class="item-content">
                     <select name="name" id="">
                           <option value="1"></option>
                       </select>
                       <span>-</span>
                       <select name="name" id="">
                           <option value="1"></option>
                       </select>
                   </span>
                </li>
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
            <div>
                <table class="sharingTable">
					<tr>
						<th 
                        v-for="(title, index) in tabletab.tableTitle" 
                        :key="index"
                        >{{title}}</th>                
					</tr>
					<tr>
						<td>
                            <router-link to="/OperationList" class="blue">1</router-link>
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
					</tr>
				</table>
                
            </div>
            <div class="pages fr">
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[1, 5, 10, 15]"
                        :page-size="22"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="22">
                    </el-pagination>
                </div>
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
                  'tableTitle': ['客户简称', '主题', '计划开始时间', '计划完成日期', '实际完成日期', '分配人', '执行人', '状态', '状态', '操作']
            },
             cur: 0,
            //  分页
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 21
        }
    },
    methods: {
        // 分页功能
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`);
      }
    },
    components: {
        'home-header': Header
    }
}
</script>

<style scoped>
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
}
.user-list {
  display: flex;
  justify-content: space-between;
  padding: 40px 136px 40px 94px;
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
    margin-top: 27px;
}
</style>
