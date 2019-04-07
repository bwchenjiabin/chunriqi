import Vue from 'vue'
import Router from 'vue-router'
// 登陆页
import Login from '@/pages/login/Login'
// 首页
import Home from '@/pages/home/Home'
// 业务管理页
import Operation from '@/pages/operation/Operation'
// 财务管理
import Finance from '@/pages/finance/Finance'
// 客户管理
import ClientManage from '@/pages/clientManage/ClientManage'
// 短信管理
import Message from '@/pages/message/Message'
// 短信发送记录
import MessageSend from '@/pages/message/MessageSend'
// 账户管理
import Account from '@/pages/account/Account'

// 子组件
import NewUserList from '@/pages/home/NewUserList'
import NewPlan from '@/pages/home/NewPlan'
import PointOut from '@/pages/home/PointOut'
import New from '@/pages/home/New'
import OperationList from '@/pages/operation/OperationList'
import WordInformation from '@/pages/operation/WordInformation'
// 财务管理详情
import Detailed from '@/pages/finance/Detailed'
// 财务支出
import Income from '@/pages/finance/Income'
// 支出管理
import Pay from '@/pages/finance/Pay'
// 支出详情
import PayDetailed from '@/pages/finance/PayDetailed'
// 合同管理续签
import Renew from '@/pages/finance/Renew'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: '/mobile/',
  scorllBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login
    }, {
      name: 'home',
      path: '/home',
      component: Home
    }, {
      name: 'NewUserList',
      path: '/NewUserList',
      component: NewUserList
    }, {
      name: 'NewPlan',
      path: '/NewPlan',
      component: NewPlan
    }, {
      name: 'PointOut',
      path: '/PointOut',
      component: PointOut
    }, {
      name: 'Operation',
      path: '/Operation',
      component: Operation
    }, {
      name: 'New',
      path: '/New',
      component: New
    }, {
      name: 'New',
      path: '/New',
      component: New
    }, {
      name: 'OperationList',
      path: '/OperationList',
      component: OperationList
    }, {
      name: 'WordInformation',
      path: '/WordInformation',
      component: WordInformation
    }, {
      name: 'Finance',
      path: '/Finance',
      component: Finance
    }, {
      path: '/Detailed',
      name: 'Detailed',
      component: Detailed
    }, {
      name: 'Income',
      path: '/Income',
      component: Income
    }, {
      name: 'Pay',
      path: '/Pay',
      component: Pay
    }, {
      name: 'PayDetailed',
      path: '/PayDetailed',
      component: PayDetailed
    }, {
      name: 'Renew',
      path: '/Renew',
      component: Renew
    }, {
      name: 'ClientManage',
      path: '/ClientManage',
      component: ClientManage
    }, {
      name: 'Message',
      path: '/Message',
      component: Message
    }, {
      name: 'MessageSend',
      path: '/MessageSend',
      component: MessageSend
    }, {
      name: 'Account',
      path: '/Account',
      component: Account
    }
  ]
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // 如果访问的时login页面直接放行
  if (to.path === '/') return next()
  // 获取token字符串
  const tokenStr = window.localStorage.getItem('token')
  // 如果没有token字符串，强制跳转登陆页
  if (!tokenStr) return next('/')
  // 证明有token字符串，直接放行
  next()
})
export default router
