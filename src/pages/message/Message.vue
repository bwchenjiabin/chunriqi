<template>
     <div class="message">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="plan">
           <div class="plan-title">
                <h1>
                    <router-link to="/Message" class="blue">短信模板信息</router-link>
                </h1>
                <h1>
                    <router-link to="/MessageSend">短信发送数据</router-link>
                </h1>
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
                  <li class="item">
                      <span>
                          <button class="seek">查找</button>
                      </span>
                  </li>
                  <li class="item">
                      <span>
                          <button class="new" @click="dialogVisible = true">新建模板</button>
                      </span>
                  </li>
                </ul>
             </div>
           </div>
           <!-- 新建模板弹窗 -->
           <el-dialog
                title="短信模板新建"
                :visible.sync="dialogVisible"
                :center="true"
                width="50%">
            <div>
                <ul class="templet">
                    <li class="templet-first">
                        <span class="templet-name">短信模板编号</span>
                        <span>*</span>
                        <input type="text">
                    </li>
                    <li>
                        <span class="templet-name">短信模板名称</span>
                        <span>*</span>
                        <input type="text">
                    </li>
                </ul>
                <ul class="templet">
                    <li class="templet-first">
                        <span class="templet-name">模板类型</span>
                        <span>*</span>
                        <select name="name" id="">
                            <option value=""></option>
                        </select>
                    </li>
                    <li class="templet-first">
                        <span class="templet-name">经手人</span>
                        <span>*</span>
                        <input type="text">
                    </li>
                </ul>
                <div class="content templet-first">
                    <div class="templet-name">短信内容<span>*</span></div>
                    <div><textarea name="name" id="" cols="85" rows="2"></textarea></div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false" class="good">保 存</el-button>
            </span>
            </el-dialog>
           <!-- 合同列表 -->
           <div class="agreement">
             <div class="work-list">
              <div class="title-box">
                <div class="information-border-left"></div>
                <h2>模板列表</h2>       
              </div>
              <div class="leading-out">
                <button>导出</button>
             </div>
            </div>
            <!-- <div class="agreementbox">
              <div class="agreement-list">
                <table class="agreement-list-box">
                <tr>
                  <th>模板ID</th>
                  <th>模板UID</th>
                  <th>模板内部编号</th>
                  <th>模板名称</th>
                  <th>模板内容</th>
                  <th>模板类型</th>
                  <th>模板状态</th>
                  <th>模板排序编号</th>
                  <th>经手人</th>
                </tr>
                <tr v-for="(item,index) in list"
                    :key = "index">
                  <td>
                    <router-link to="/Detailed" class="blue">{{item.id}}</router-link>
                  </td>
                  <td>{{item.uuid}}</td>
                  <td>{{item.message_templet_code}}</td>
                  <td>{{item.message_templet_name}}</td>
                  <td>{{item.message_templet_content}}</td>
                  <td>{{item.message_templet_type}}</td>  
                  <td>{{item.hx_record_status}}</td>  
                  <td>{{item.hx_record_sort_no}}</td>  
                  <td>{{item.handler}}</td>  
                </tr>
              </table>
              </div>
            </div> -->
             <div class="Customer-total margin">
                <el-table style="width: 100%;"
            :data="list.slice((CustomerTotalPage-1)*CustomerTotalPagesize,CustomerTotalPage*CustomerTotalPagesize)"
            >
                <el-table-column label="模板ID" prop="id"></el-table-column>
                <el-table-column label="模板UID" prop="uuid"></el-table-column>
                <el-table-column label="模板内部编号" prop="message_templet_code"></el-table-column>
                <el-table-column label="模板名称" prop="message_templet_name"></el-table-column>
                <el-table-column label="模板内容" prop="message_templet_content"></el-table-column>
                <el-table-column label="模板类型" prop="message_templet_type"></el-table-column>
                <el-table-column label="模板状态" prop="hx_record_status"></el-table-column>
                <el-table-column label="模板排序编号" prop="hx_record_sort_no"></el-table-column>
                <el-table-column label="经手人" prop="handler"></el-table-column>
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
  name: 'message',
  data () {
    return {
      cur: 0,
      dialogVisible: false,
      list:[],
      CustomerTotalData: [ ], //总数据
      CustomerTotalPage: 1, //初始页
      CustomerTotalPagesize: 5, // 每页的数据
    }
  },
  created () {
    this.getdata()
  },
  methods: {
        CustomerTotalSize: function(size) {
    this.CustomerTotalPagesize = size;
    },
    CustomerTotalCurrent: function(currentPage) {
    this.CustomerTotalPage = currentPage;
    },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
  async getdata () {
      const {data: res} = await this.$axios.post('fs/selectMessageTemplet', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
      })
      if (res.code == 200 ) {
        this.list = res.data.data
      }
    //   console.log(res.data.data)
    },
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
.plan-title {
    display: flex;
    align-items: center;
    padding: 30px 0 10px 17px;
}
.plan-title h1 {
    font-size: 21px;
    color: #999999;
    margin-right: 40px;
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
  border-bottom: 1px solid #DDDDDD;
}
.information-border-left {
  width: 4px;
  height: 16px;
  background:rgba(2,166,237,1);
  border-radius:3px;
  margin: 0px 16px 0 40px;
}
.contacts-list .item {
    margin-right: 40px;
}
.contacts-list {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 26px 0 55px;
  font-size: 12px;
  font-weight: 400;
  color:rgba(68,68,68,1);
  margin-bottom: 20px;
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
.agreement-list-box td:nth-child(1) router-link {
    color: #02A6ED;
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
.contacts-list {
    margin-top: 40px;
}
.seek {
    width: 100px;
    height: 40px;
    border-radius:4px;
    border: none;
    color: #fff;
    text-align: center;
    background-color: #02A6ED
}
.new {
    width: 118px;
    height: 40px;
    border-radius:4px;
    border: none;
    color: #fff;
    background-color: #FA7171;
    text-align: center;
}
/* 短信模板 */
.templet {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.good {
    width: 200px;
    height: 54px;
}
.content {
    display: flex;

}
.templet-name {
    display: inline-block;
    width: 94px;
    text-align: right;
    margin-right: 5px;
}
.templet-first select {
    width: 175px;
}
.pages{
    margin-bottom: 27px;
}
</style>
