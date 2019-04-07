<template>
     <div class="NewPlan">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <div class="plan-title">
             <h1>客户工作计划信息</h1>
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
               </ul>
                <ul class="list-box">
                <li class="list-item">
                   <span class="prive">客户状态</span>
                   <span class="item-content">新客户</span>
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
           <!-- 工作计划信息 -->
           <div class="work-box">
             <div class="work">
               <div class="title-box">
                <div class="information-border-left"></div>
                <h2>工作计划信息</h2> 
                <div class="jiahao">+</div>              
              </div>
             </div>
             <!-- 工作类型 -->
             <div class="work-type">
               <div class="type-list-box">
                 <div class="remover">X</div>
                 <ul class="list-item1">
                   <li class="item">
                     <span>工作类型&nbsp;&nbsp;<input type="text" placeholder="准备资料"></span>
                   </li>
                    <li class="item">
                       <span>优先级&nbsp;&nbsp;</span>
                       <span>
                         <input type="radio">一般
                       </span>
                       <span>
                         <input type="radio">紧急
                       </span>
                   </li>
                    <li class="item">
                     <span>执行人&nbsp;&nbsp;<input type="text"></span>
                   </li>
                 </ul>
                  <ul class="list-item clearfloat">
                   <li class="item fl">
                     <span>主题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="准备资料"></span>
                   </li>
                    <li class="item fl">
                       <span>工作项动态&nbsp;&nbsp;</span>
                       <span>
                         <input type="radio">已分配
                       </span>
                       <span>
                         <input type="radio">处理中
                       </span>
                       <span>
                         <input type="radio">已完成
                       </span>
                       <span>
                         <input type="radio">已取消
                       </span>
                   </li>
                 </ul>
                 <ul class="list-item1">
                   <li class="item">
                     <span>计划开始日期&nbsp;&nbsp;<input type="text"></span>
                   </li>
                    <li class="item">
                     <span>计划完成日期&nbsp;&nbsp;<input type="text"></span>
                   </li>
                   <li class="item">
                     <span>实际完成日期&nbsp;&nbsp;</span>
                     <select name="name" id="#" class="select">
                       <option value="">123</option>
                     </select>
                   </li>
                 </ul>
                 <ul class="remarks">
                   <li>
                     <span>备注&nbsp;&nbsp;</span>
                     <span><input type="text"></span>
                     </li>
                   <li class="delay">
                      <span>延迟后完成日期&nbsp;&nbsp;</span>
                      <span><input type="text"></span>
                   </li>
                 </ul>
                 <div class="button">
                   <button>保存</button>
                 </div>
               </div>
             </div>
             <div class="prepare1">
               <div class="work-type">
               <div class="type-list-box-bottom1">
                 <ul class="list-item1">
                   <li class="item">
                     <span>工作类型&nbsp;&nbsp;<input type="text" placeholder="准备资料"></span>
                   </li>
                    <li class="item">
                       <span>优先级&nbsp;&nbsp;</span>
                       <span>
                         <input type="radio">一般
                       </span>
                       <span>
                         <input type="radio">紧急
                       </span>
                   </li>
                    <li class="item">
                     <span>执行人&nbsp;&nbsp;<input type="text"></span>
                   </li>
                 </ul>
                  <ul class="list-item clearfloat">
                   <li class="item fl">
                     <span>主题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="准备资料"></span>
                   </li>
                    <li class="item fl">
                       <span>工作项动态&nbsp;&nbsp;</span>
                       <span>
                         <input type="radio">已分配
                       </span>
                       <span>
                         <input type="radio">处理中
                       </span>
                       <span>
                         <input type="radio">已完成
                       </span>
                       <span>
                         <input type="radio">已取消
                       </span>
                   </li>
                 </ul>
                 <ul class="list-item1">
                   <li class="item">
                     <span>计划开始日期&nbsp;&nbsp;<input type="text"></span>
                   </li>
                    <li class="item">
                     <span>计划完成日期&nbsp;&nbsp;<input type="text"></span>
                   </li>
                   <li class="item">
                     <span>实际完成日期&nbsp;&nbsp;</span>
                     <select name="name" id="#" class="select">
                       <option value="">123</option>
                     </select>
                   </li>
                 </ul>
                 <ul class="remarks">
                   <li>
                     <span>备注&nbsp;&nbsp;</span>
                     <span><input type="text"></span>
                     </li>
                   <li class="delay">
                      <span>延迟后完成日期&nbsp;&nbsp;</span>
                      <span><input type="text"></span>
                   </li>
                 </ul>
               </div>
              </div>
             </div>
             <div class="prepare">
               <div class="work-type">
               <div class="type-list-box-bottom">
                 <ul class="list-item1">
                   <li class="item">
                     <span>工作类型&nbsp;&nbsp;<input type="text" placeholder="准备资料"></span>
                   </li>
                    <li class="item">
                       <span>优先级&nbsp;&nbsp;</span>
                       <span>
                         <input type="radio">一般
                       </span>
                       <span>
                         <input type="radio">紧急
                       </span>
                   </li>
                    <li class="item">
                     <span>执行人&nbsp;&nbsp;<input type="text"></span>
                   </li>
                 </ul>
                  <ul class="list-item clearfloat">
                   <li class="item fl">
                     <span>主题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="准备资料"></span>
                   </li>
                    <li class="item fl">
                       <span>工作项动态&nbsp;&nbsp;</span>
                       <span>
                         <input type="radio">已分配
                       </span>
                       <span>
                         <input type="radio">处理中
                       </span>
                       <span>
                         <input type="radio">已完成
                       </span>
                       <span>
                         <input type="radio">已取消
                       </span>
                   </li>
                 </ul>
                 <ul class="list-item1">
                   <li class="item">
                     <span>计划开始日期&nbsp;&nbsp;<input type="text"></span>
                   </li>
                    <li class="item">
                     <span>计划完成日期&nbsp;&nbsp;<input type="text"></span>
                   </li>
                   <li class="item">
                     <span>实际完成日期&nbsp;&nbsp;</span>
                     <select name="name" id="#" class="select">
                       <option value="">123</option>
                     </select>
                   </li>
                 </ul>
                 <ul class="remarks">
                   <li>
                     <span>备注&nbsp;&nbsp;</span>
                     <span><input type="text"></span>
                     </li>
                   <li class="delay">
                      <span>延迟后完成日期&nbsp;&nbsp;</span>
                      <span><input type="text"></span>
                   </li>
                 </ul>
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
      if (res.code == 1 ) {
        // this.list = res.data.data
        // this.list = res.data.customers
      }
      console.log(res)
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
/* 客户工作计划标题 */
.plan-title {
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
  line-height: 32px;
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
/* 工作计划信息 */
.work-box {
  width: 100%;
  background-color: #fff;
}
.work {
  margin-top: 31px;
}
.jiahao {
  color:rgba(2,166,237,1);
  font-size:26px;
  font-weight:600;
  margin-left: 10px;
}
/* 工作类型 */
.work-type {
  width: 100%;
  padding: 40px 60px 46px 60px;
}
.type-list-box {
  position: relative;
  width: 100%;
  font-size: 12px;
  padding: 50px 209px 40px 203px;
  border: 1px solid #B5E5FA;
  box-shadow: 0 0 8px #B5E5FA;
  border-radius:8px;
}
.list-item1 {
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.list-item {
  margin-bottom: 20px;
}
.list-item li {
  margin-right: 114px;
}
.select {
  width: 150px;
}
.remarks {
  display: flex;
  /* margin-left: 20px; */
}
.remarks input {
  width: 400px;
}
.delay {
  margin-left: 45px;
}
.delay input {
  width: 150px;
}
.button {
  margin: 40px 0 0 0;
  text-align: center;
}
.button button {
  width: 200px;
  height: 54px;
  border: none;
  font-size: 18px;
  color: #fff;
  border-radius:8px;
  background-color: #02A6ED;
}
.prepare {
  width: 100%;
}
.type-list-box-bottom1 {
  width: 100%;
  font-size: 12px;
  padding: 0px 209px 40px 203px;
  border-bottom: 1px dashed #02A6ED;
}
.type-list-box-bottom {
  width: 100%;
  font-size: 12px;
  padding: 0px 209px 0px 203px;
}
.remover {
  position: absolute;
  top: 22px;
  right: 30px;
  font-size: 24px;
}
</style>
