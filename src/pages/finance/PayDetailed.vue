<template>
     <div class="NewPlan">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
             <div class="separator">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>财务管理</el-breadcrumb-item>
                    <el-breadcrumb-item>合同管理</el-breadcrumb-item>
                    <el-breadcrumb-item>合同详情</el-breadcrumb-item>
                </el-breadcrumb>
             </div>
            
           <div class="plan-title">
             <h1>合同详情</h1>
           </div>
           <!-- 详情 -->
           <div class="user-information">
             <div class="title-box">
               <div class="information-border-left"></div>
               <h2>详情</h2>       
             </div>
             <div class="order">
                 <div class="order-content">
                     <ul class="order-box">
                         <li class="item">
                             <span class="item-top">订单ID</span>
                             <span><input type="text"></span>
                         </li>
                         <li class="item">
                             <span class="item-top">客户名称</span>
                             <span class="item-button"><input type="text"></span>
                         </li>
                         <li class="item">
                             <span class="item-top">办理业务</span>
                             <span class="item-button"><input type="text"></span>
                         </li>
                     </ul>
                     <ul class="order-box">
                         <li class="item">
                             <span class="item-top">开始时间</span>
                             <span><input type="text"></span>
                         </li>
                         <li class="item">
                             <span class="item-top">结束时间</span>
                             <span class="item-button"><input type="text"></span>
                         </li>
                         <li class="item">
                             <span class="item-top">支付方式</span>
                             <span class="item-button"><input type="text"></span>
                         </li>
                     </ul>
                     <!-- 备注 -->
                     <div class="beizhu">
                         <span>备注</span>
                     </div>
                     <div class="voucher">
                         <div class="voucher-text">长传凭证</div>
                         <div class="voucher-pic">
                             <div class="voucher-pic-item fl"></div>
                         </div>
                     </div>
                 </div>
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
.item {
    margin-bottom: 20px;
    color: #fff;
}
.order {
    width: 100%;
    overflow: hidden;
    padding: 60px 255px 363px 255px;
    background-color: #fff;
}
.order-box {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}
.order-content {
    width: 100%;
    height: 100%;
    padding: 86px 70px 138px 70px;
    overflow: hidden;
    background-color: #02A6ED;
}
.item-top {
    display: inline-block;
    text-align: right;
    width: 73px;
    margin-right: 16px;
}
/* 凭证图片 */
.voucher {
    color: #fff;
    font-size: 14px;
    display: flex;
}
.voucher-text {
    margin-right: 18px;
    width: 63px;
    text-align: right;
}
.voucher-pic-item {
    width: 200px;
    padding-bottom: 154px;
    border: 1px solid #fff;
}
.beizhu {
    width: 63px;
    margin-bottom: 20px;
    text-align: right;
    color: #fff;
}
</style>
