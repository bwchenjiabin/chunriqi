<template>
     <div class="NewPlan">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
             <div class="separator">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>业务管理</el-breadcrumb-item>
                    <el-breadcrumb-item>工作计划</el-breadcrumb-item>
                    <el-breadcrumb-item>天香活能</el-breadcrumb-item>
                </el-breadcrumb>
             </div>
            
           <div class="plan-title">
             <h1>天香活能</h1>
             <div class="edit">
                 <span><button>修改信息</button></span>
                 <span><button @click="addWordInformation">添加工作计划</button></span>
             </div>
           </div>
           <!-- 客户信息 -->
           <div class="user-information">
             <div class="title-box">
               <div class="information-border-left"></div>
               <h2>客户信息</h2>       
             </div>
             <!-- 客户信息列表 -->
             <div class="user-list">
               <ul class="list-box">
                <li class="list-item">
                   <span class="prive">客户编号</span>
                   <span class="item-content">1001-3424243</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">客户简称</span>
                   <span class="item-content">博强</span>
                </li>
                <li class="list-item">
                   <span class="prive">客户简称</span>
                   <span class="item-content">博强</span>
                </li>
               </ul>
               <ul class="list-box">
                <li class="list-item">
                   <span class="prive">客户编号</span>
                   <span class="item-content">1001-3424243</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">客户简称</span>
                   <span class="item-content">博强</span>
                </li>
               </ul>
               <ul class="list-box">
               <li class="list-item">
                   <span class="prive">客户状态</span>
                   <span class="item-content">新客户</span>
                </li>
                 <li class="list-item">
                   <span class="prive">是否市场?</span>
                   <span class="item-content">
                     <input type="radio">是&nbsp;&nbsp;
                     <input type="radio">否
                   </span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
               </ul>
                <ul class="list-box">
                <li class="list-item">
                   <span class="prive">客户状态</span>
                   <span class="item-content">新客户</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">接件日期</span>
                   <span class="item-content">2018-02-16</span>
                </li>
                <li class="list-item">
                   <span class="prive">是否紧急?</span>
                   <span class="item-content">
                     <input type="radio">是&nbsp;&nbsp;
                     <input type="radio">否
                   </span>
                </li>
                <li class="list-item">
                   <span class="prive">接件门店</span>
                   <span class="item-content">回龙观总店</span>
                </li>
               </ul>
             </div>
           </div>
           <!-- 客户联系人信息 -->
           <div class="contacts">
                <div class="title-box">
                    <div class="information-border-left"></div>
                    <h2>客户联系人信息</h2>       
                </div>
                <div class="contactsList">
                   <ul class="contactsList-box">
                       <li class="item">
                           <span>姓名&nbsp;&nbsp;</span>
                           <span>111</span>
                        </li>
                       <li class="item">
                           <span>联系方式&nbsp;&nbsp;</span>
                           <span>11111111</span>                        
                       </li>
                       <li class="item">
                           <span>邮箱&nbsp;&nbsp;</span>
                           <span>1111111</span>
                       </li>
                   </ul>
                </div>
            </div>
            <!-- 收费信息 -->
            <div class="contacts">
                <div class="information-box">
                    <div class="information-border-left"></div>
                    <h2>收费信息</h2>       
                </div>
                <div class="collect-fees">
                   <table class="sharingTable">
					<tr>
						<th>费用类型</th>
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th>
					</tr>
					<tr>
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
            </div>
            <!-- 客户沟通记录 -->
            <div class="contacts">
                <div class="information-box">
                    <div class="information-border-left"></div>
                    <h2>客户沟通记录</h2>       
                </div>
                <div class="collect-fees">
                   <table class="sharingTable">
					<tr>
						<th>费用类型</th>
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th> 
                        <th>费用类型</th>
					</tr>
					<tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
					</tr>
                    <tr>
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
    }
  },
  methods: {
      addWordInformation () {
          this.$router.push('/WordInformation')
      }
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
.edit {
    height: 34px;
}
.edit span button {
    width: 200px;
    height: 100%;
    border: none;
    color: #fff;
    border-radius: 5px;
    background-color: #128CFF;
}
.plan-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 10px 17px;
}
.plan-title h1 {
  color: #02A6ED;
  font-weight:600;
  font-size:22px;
}
/* 客户信息 */
.user-information {
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
/* 客户信息列表 */
.list-box {
  line-height: 22px;
  font-size: 14px;
}
.user-list {
  display: flex;
  justify-content: space-between;
  padding: 40px 136px 40px 94px;
}
.prive {
  text-align: right;
  margin-right: 16px;
  color:rgba(119,119,119,1);
}
.item-content {
  color:rgba(68,68,68,1);
  font-weight:500;
}
.list-item {
    margin-bottom: 5px;
}
/* 客户联系人信息 */
.information-box {
  height: 73px;
  display: flex;
  align-items: center;
}
.contacts {
    margin-top: 32px;
    background: #FFFFFF;
}
.contactsList-box {
    height: 102px;
    display: flex;
    align-items: center;
    margin-left: 83px;
}
.contactsList-box .item {
    margin-right: 183px;
}
/* 收费信息 */
.sharingTable tr, td {
    width: 149px;
    text-align: center;
    line-height: 31px;
    color:rgba(68,68,68,1);
}
.sharingTable th {
    height: 40px;
    line-height: 40px;
    border-left: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
    background-color: #F0F0F0;
}
.sharingTable td {
    width: 226px;
    height: 40px;
    line-height: 40px;
    border-left: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
}
.sharingTable th {
    font-weight: 400;
}
.collect-fees {
    background-color: #fff;
    padding: 0 39px 30px 39px;
}
</style>
