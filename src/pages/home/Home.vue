<template>
     <div class="home">
         <!-- 头部 -->
         <home-header></home-header>
         <div class="home-temp">
           <!-- 新建客户 -->
           <div class="home-com">

             <div class="home-item">
               <img src="../../assets/images/home/Mask.png" alt="">
               <div class="item-icon">
                 <img src="../../assets/images/home/user.png" alt="">
               </div>
               <router-link to="/NewUserList" tag="div" class="home-text">新建客户</router-link>
             </div>

             <div class="home-item" v-on:click="getdata0(); showList =  true">
               <img src="../../assets/images/home/Mask(2).png" alt="">
               <div class="item-icon">
                 <img src="../../assets/images/home/merge.png" alt="">
               </div>
               <div class="home-text black">新建工作计划</div>
             </div>

             <div class="home-item"
              @click="dialogVisible = true"
              :visible.sync="dialogVisible"
             >
               <img src="../../assets/images/home/Mask(1).png" alt="">
               <div class="item-icon">
                 <img src="../../assets/images/home/msg.png" alt="">
               </div>
               <div class="home-text black">短信发送</div>
             </div>

             <div class="home-item1">
               <img src="../../assets/images/home/Mask(5).png" alt="">
               <div class="remind">
                 <div>重要工作提醒</div>
                 <div class="length">
                   <span class="length-content">{{list.length}}</span>
                   <span class="length-val">个</span>
                  </div>
               </div>
               <ul class="item1-list">
                 <li v-for="(item, index) in list" :key="index">{{list[index].customer_title}}</li>
               </ul>
             </div>
           </div>
           <el-dialog
                title="客户信息选择列表"
                :visible.sync="showList"
                width="80%"
                :center="true"
                >
            <div class="word-box">
                <div class="word-serial">
                    <span>客户编号&nbsp;&nbsp;
                        <select name="name" id="">
                            <option value=""></option>
                        </select>
                    </span>
                     <span>客户编号&nbsp;&nbsp;
                        <select name="name" id="">
                            <option value=""></option>
                        </select>
                    </span>
                    <span slot="footer" class="dialog-footer">
                        <el-button>查 询</el-button>
                    </span>
                </div>
                <div class="info-title">
                    <div class="info-border"></div>
                    <p>基本信息</p>
                </div>
               <table class="sharingTable">
						<tr>
							<th>客户简称</th>
							<th>办理业务</th>
							<th>行业类型</th>
							<th>负责人</th>
							<th>客户地址</th>
							<th>接件日期</th>
							<th>标准完成日期</th>
							<th>是否市场？</th>
                            <th>是否紧急？</th>
							<th>收费金额</th>                          
						</tr>
						<tr v-for="(item,index) in Customerlist"
            :key = "index">
							<td class="blue">
                <router-link to="/New" class="blue">{{item.customer_title}}</router-link>
              </td>
							<td class="blue">{{item.customer_type}}</td>
							<td>{{item.customer_company_type}}</td>
							<td>{{item.employee_name}}</td>
							<td>{{item.customer_business_address}}</td>
							<td>{{item.customer_found_date}}</td>
							<td>{{item.customer_finish_date}}</td>
							<td>{{item.is_marke}}</td>
							<td>{{item.is_pressing}}</td>
							<td>{{item.expense_amt}}</td>
						</tr>
					</table>
            </div>
            </el-dialog>
            <!-- 短信对话框 -->
            <el-dialog
                title="短信发送"
                :visible.sync="dialogVisible"
                width="50%"
                :center="true"
                >
            <div class="message-box">
                <div class="serial">
                    <span>客户编号&nbsp;&nbsp;
                        <select name="name" id="">
                            <option value=""></option>
                        </select>
                    </span>
                    <span>客户编号&nbsp;&nbsp;<input type="text"></span>
                </div>
                <div class="serial">
                    <span>客户编号&nbsp;&nbsp;<input type="text"></span>
                </div>
                <div class="serial">
                    <span>客户编号&nbsp;&nbsp;
                        <select name="name" id="">
                            <option value=""></option>
                        </select>
                    </span>
                    <span>客户编号&nbsp;&nbsp;<input type="text"></span>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
           <!-- 用户数据 -->
          <div class="user-list">
            <div class="user-list-title">
              <div class="border"></div>
              <div>用户数据</div>
            </div>
            <div class="user-list-box">
              <div class="item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img1.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/user-samll.png" alt="">
                </div>
                <div class="item-top-text">{{count.all}}</div>
                <div class="item-buttom-text">总客户(户)</div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img2.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/jiahao.png" alt="">
                </div>
                <div class="item-top-text">{{count.new}}</div>
                <div class="item-buttom-text">新增客户(户)</div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img1.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/rectangle.png" alt="">
                </div>
                <div class="item-top-text">{{count.contract}}</div>
                <div class="item-buttom-text">到期合同(户)</div>
              </div>
              <div class="item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img1.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/exclamation.png" alt="">
                </div>
                <div class="item-top-text">{{count.warning}}</div>
                <div class="item-buttom-text">预警审批(户)</div>
              </div>
            </div>
          </div>
          <!-- 财务数据 -->
          <div class="financial">
            <div class="user-list-title">
              <div class="border"></div>
              <div>财务数据</div>
            </div>
            <div class="financial-list">
              <div class="financial-box">
              <div class="financial-item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img2.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/jiahao.png" alt="">
                </div>
                <div class="item-top-text">{{count.cost}}</div>
                <div class="item-buttom-text">总计账费(元)</div>
              </div>
            </div>

            <div class="financial-box">
              <div class="financial-item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img2.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/jiahao.png" alt="">
                </div>
                <div class="item-top-text">{{count.large_bills}}</div>
                <div class="item-buttom-text">大额票据客户(户)</div>
              </div>
            </div>

            <div class="financial-box">
              <div class="financial-item">
                <div class="item-img">
                  <img src="../../assets/images/home/user_img2.png" alt="">
                </div>
                <div class="item-icon-img">
                  <img src="../../assets/images/home/jiahao.png" alt="">
                </div>
                <div class="item-top-text">{{count.financial}}</div>
                <div class="item-buttom-text">财务待审批客户(户)</div>
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
  name: 'home',
  data () {
    return {
      showList: false,
      dialogVisible: false,
      // 用户数据/财务数据
      count:{},
      list: [],
      Customerlist:{}
    }
  },
  created () {
    this.getdata();
  },
  methods: {
    async getdata () {
      const {data: res} = await this.$axios.post('fs/customer_index', {
        current_page:1,
        user_id: this.getCookie('id'),
        token: this.getCookie('token'),
        
      })
      if (res.code == 1 ) {
        this.count = res.data.count
        this.list = res.data.customers    
      }
    },
    async getdata0 () {
      const {data: res} = await this.$axios.post('fs/choose_customer', {
        user_id: this.getCookie('id'),
        token: this.getCookie('token')
      })
      if (res.code == 1 ) {
        this.Customerlist = res.data.customers
      }
      // console.log(res.data.customers)
    },
  },
  components: {
    'home-header': Header,
  }
}
</script>

<style scoped>
.home-temp {
  width: 100%;
  padding: 0 130px;
}
.home-com {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.home-item {
  position: relative;
  width: 22.5%;
  height: 0px;
  border-radius:8px;
  overflow: hidden;
  padding-bottom: 175px;
}
.home-img {
  position: absolute;
  top: 0;
  left: 0;
}
.home-item1 {
  position: relative;
  width: 30%;
  height: 0px;
  overflow: hidden;
  padding-bottom: 175px;
  border-radius:8px;
  background-color: #fff;
}
.home-item1 img {
  width: 100%;
}
.item-icon {
  width: 65px;
  height: 59px;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.home-text {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 125px;
  line-height: 25px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.black {
  color: #000;
}
/* 重要工作提醒 */
.remind {
  position: absolute;
  top: 13px;
  left: 0;
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: space-between;
  line-height: 33px;
  color: #fff;
  padding-left: 27px;
}
.length {
  margin-right: 75px;
}
.length .length-val {
  color: #666666;
}
.length-content {
  font-size: 45px;
  font-weight: 600;
  background: linear-gradient(to right, #3848EA, #04C0ED);
        -webkit-background-clip: text;
        color: transparent;
}
.item1-list {
  position: absolute;
  top: 80px;
  left: 27px;
  font-size: 14px;
  color:rgba(102,102,102,1);
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
}
.item1-list li {
  margin-bottom: 8px;
}
/* 用户数据 */
.user-list {
  width: 100%;
}
.user-list-title {
  margin-top: 10px;
  line-height: 20px;
  display: flex;
}
.border {
  width:6px;
  height:20px;
  background:rgba(2,166,237,1);
  border-radius:3px;
  margin: 0 14px 14px 14px;
}
.user-list-box {
  display: flex;
  justify-content: space-between;
}
.item {
  position: relative;
  width: 24.4%;
  height: 180px;
  background:rgba(255,255,255,1);
  border-radius:8px;
}
.item-top-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin-top: 100px;
  font-size: 34px;
  font-weight: 600;
}
.item-buttom-text {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 15px;
  left: 0;
}
.item-img {
  width: 100%;
}
.item-icon-img {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;;
}
/* 财务数据 */
.financial-box {
  width: 32.8%;
}
.financial-item {
  position: relative;
  height: 180px;
  background:rgba(255,255,255,1);
  border-radius:8px;
}
.financial-list {
  display: flex;
  justify-content: space-between;
}

.info-title {
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
}
.word-serial select {
    width: 200px;
    height: 34px;
}
.info-border {
    width: 4px;
    height: 16px;
    margin-right: 15px;
    background:rgba(2,166,237,1);
    border-radius:3px;
}
/* 表格 */
.sharingTable tr, td {
    width: 149px;
    text-align: center;
    line-height: 31px;
}
.sharingTable th {
    background-color: #F0F0F0;
}
.sharingTable td {
    border-left: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
}
.blue {
    color:rgba(2,166,237,1);
}
/* 短信发送 */
.serial {
    display: flex;
    justify-content: space-between;
}
.serial select {
    width: 173px;
}
.message-box {
    padding: 40px 0;
}
.message-box .serial {
    margin-bottom: 10px;
}
.dialog-footer {
    text-align: center;
}
</style>
