<template>
     <div class="NewPlan">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <div class="plan-title">
            <div class="plan-title-box">
                <p>
                    <router-link to="/Finance">合同管理</router-link>
                </p>
                <p>
                    <router-link to="/Income">收入管理</router-link>
                </p>
                <p>
                    <router-link to="/Pay" class="blue">支出管理</router-link>
                </p>
            </div>
             <div class="add">
               <span><button @click="dialogVisible = true">添加支出项目</button></span>
               <span><button @click="addPay = true">添加支出</button></span>
             </div>
           </div>
           <!-- 添加项目弹窗 -->
           <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                :center="true"
                width="50%">
            <div class="pay-box">
                <div class="pay-name">支出名称</div>
                <div><input type="text"></div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 添加支出 -->
            <el-dialog
                title="提示"
                :visible.sync="addPay"
                :center="true"
                width="50%">
            <div class="add-pay">
                <ul class="add-pay-box">
                    <li class="add-pay-item">
                        <span>支出项目</span>
                        <span>
                            <select name="name" id="">
                                <option value=""></option>
                            </select>
                        </span>
                    </li>
                    <li class="add-pay-item">
                        <span>支出金额</span>
                        <span><input type="text"></span>
                    </li>
                </ul>
                <ul class="add-pay-box">
                    <li class="add-pay-item">
                        <span>支出方式</span>
                        <span>
                            <select name="name" id="">
                                <option value=""></option>
                            </select>
                        </span>
                    </li>
                    <li class="add-pay-item">
                        <span>经手人</span>
                        <span>
                            <select name="name" id="">
                                <option value=""></option>
                            </select>
                        </span>
                    </li>
                </ul>
                <ul class="add-pay-box">
                    <li class="add-pay-item">
                        <span>支出方式</span>
                        <span>
                            <select name="name" id="">
                                <option value=""></option>
                            </select>
                        </span>
                    </li>
                </ul>
                <div class="textarea-box">
                    <div class="textarea-text">备至&nbsp;&nbsp;</div>
                    <div class="textarea-content"><textarea name="" id="" cols="70" rows="3"></textarea></div>
                </div>
                <div class="upload">
                    <div class="upload-text">长传凭证&nbsp;&nbsp;</div>
                    <div class="upload-pic">
                        <input type="file">
                        <span class="jiahao">+</span>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addPay = false">发送短信</el-button>
            </span>
            </el-dialog>
           <!-- 客户信息 -->
           <div class="user-information">
             <div class="title-box">
               <div class="information-border-left"></div>
               <h2>搜索</h2>       
             </div>
             <!-- 订单 -->
             <div class="form-list">
                <ul class="contacts-list">
                  <li class="item" 
                    v-for="( item, index) in list" 
                    :key="index" @click="cur=index" 
                    :class="{active:cur==index}"
                  >
                    {{item}}
                  </li>
                   <li class="dressing">
                     <span class="dressing-title">帅选时间</span>
                     <span>
                       <select name="name" id="">
                         <option value=""></option>
                       </select>
                     </span>
                     <span>&nbsp;-&nbsp;</span>
                     <span>
                       <select name="name" id="">
                         <option value=""></option>
                       </select>
                     </span>
                  </li>
                  <li class="button">
                     <el-row>
                        <el-button type="primary" class="button-btn">查&nbsp;找</el-button>
                    </el-row>
                  </li>
                </ul>
             </div>
           </div>
           <!-- 合同列表 -->
           <div class="agreement">
             <div class="work-list">
               <div class="title-box">
               <div class="information-border-left"></div>
               <h2>收入列表</h2>       
             </div>
              <div class="vocational">
                <span>业务筛选</span>
                <span>
                  <select name="name" id="">
                    <option value=""></option>
                  </select>
                </span>
              </div>
              <div class="amount">总计:&nbsp;&nbsp;<span>222222</span></div>
              <div class="leading-out">
                <button>导出</button>
             </div>
            </div>
            <div class="agreementbox">
              <div class="agreement-list">
                <table class="agreement-list-box">
                <tr>
                  <th>订单ID</th>
                  <th>客户名称</th>
                  <th>业务办理</th>
                  <th>结束时间</th>
                  <th>支付方式</th>
                  <th>收费金额</th>
                  <th>
                    <router-link to="/PayDetailed" class="look">查看</router-link>
                 </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <router-link to="/PayDetailed" class="look">查看</router-link>
                 </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <router-link to="/PayDetailed" class="look">查看</router-link>
                 </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <router-link to="/PayDetailed" class="look">查看</router-link>
                 </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <router-link to="/PayDetailed" class="look">查看</router-link>
                 </td>
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
  name: 'NewPlan',
  data () {
    return {
      list: ['今天', '昨天', '近7天', '近一月'],
      cur: 0,
      dialogVisible: false,
      addPay: false
    }
  },
  methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done(); 
          })
      },
      addPay (done) {
           this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
      }
  },
  components: {
    'home-header': Header
  },
  methods: {
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
    height: 44px;
    border: none;
    color: #fff;
    margin: auto;
    border-radius: 5px;
}
.button-btn {
    width: 110px;
    height: 44px;
}
.plan-title {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 30px 0 10px 17px;
}
.plan-title p {
    font-size: 21px;
    margin-left: 40px;
}
.blue {
  color: #02A6ED;
}
.dressing select {
  width: 150px;
}
/* 客户信息 */
.user-information {
  padding: 0 0 44px 0;
  background-color: #fff;
}
.title-box {
  height: 73px;
  display: flex;
  margin-right: 40px;
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
  border-radius: 10px;
  padding: 0 26px 0 55px;
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
}
.contacts-list .item {
  padding: 0 34px;
  margin-right: 40px;
  height: 28px;
  line-height: 28px;
  border-radius:8px;
  color: #02A6ED;
  border: 1px solid #128CFF;
}
.dressing-title {
  margin-right: 16px;
}
.contacts-list .active {
  color: #FFF;
  background: #02A6ED;
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
.vocational {
  margin-left: 53px;
}
.vocational select {
  width: 284px;
  height: 34px;
}
/* 列表 */
.work-list {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;   
    background-color: #fff;
}
.amount {
    position: absolute;
    top: 20;
    right:187px;
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
  width: 225px;
  height: 39px;
  border-right: 1px solid #DDDDDD;
}
.blue {
  color:rgba(18,140,255,1);
}
table tr:nth-child(even){
background: #F9F9F9;
}
.look {
   color:rgba(18,140,255,1); 
}
.add button {
    display: inline-block;
    width: 160px;
    line-height: 34px;
    border: none;
    color: #fff;
    margin-left: 30px;
    border-radius:4px;
    background: #02A6ED;
}
.plan-title-box {
    display: flex;
}
.pay-box {
    width: 200px;
    margin: auto;
}
.pay-name {
    margin-bottom: 20px;
}
.add-pay-box {
    display: flex;
    justify-content: space-between;
}
.add-pay-item select,input {
    width: 260px;
    height: 34px;;
}
.textarea-box {
    display: flex;
    margin-bottom: 20px;
}
.textarea-text {
    width: 63px;
    text-align: right;
}
.add-pay-box {
    margin-bottom: 20PX;
}
/* 上传凭证 */
.upload {
    display: flex;
}
.upload-pic {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius:10px;
    cursor: copy;
    border: 1px solid #DDDDDD;
}
.upload-pic input {
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 100;
}
.jiahao {
    opacity: 1;
    position: absolute;
    top: 45%;
    left: 50%;
    font-size: 50px;
    color: #C4C4C4;
    transform: translate(-50%,-50%);
    /* z-index: 100; */
}
</style>
