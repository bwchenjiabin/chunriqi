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
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/NewUserList',
      name: 'NewUserList',
      component: NewUserList
    }, {
      path: '/NewPlan',
      name: 'NewPlan',
      component: NewPlan
    }, {
      path: '/PointOut',
      name: 'PointOut',
      component: PointOut
    }, {
      path: '/Operation',
      name: 'Operation',
      component: Operation
    }, {
      path: '/New',
      name: 'New',
      component: New
    }, {
      path: '/New',
      name: 'New',
      component: New
    }, {
      path: '/OperationList',
      name: 'OperationList',
      component: OperationList
    }, {
      path: '/WordInformation',
      name: 'WordInformation',
      component: WordInformation
    }, {
      path: '/Finance',
      name: 'Finance',
      component: Finance
    }, {
      path: '/Detailed',
      name: 'Detailed',
      component: Detailed
    }, {
      path: '/Income',
      name: 'Income',
      component: Income
    }, {
      path: '/Pay',
      name: 'Pay',
      component: Pay
    }, {
      path: '/PayDetailed',
      name: 'PayDetailed',
      component: PayDetailed
    }, {
      path: '/Renew',
      name: 'Renew',
      component: Renew
    }, {
      path: '/ClientManage',
      name: 'ClientManage',
      component: ClientManage
    }, {
      path: '/Message',
      name: 'Message',
      component: Message
    }, {
      path: '/MessageSend',
      name: 'MessageSend',
      component: MessageSend
    }, {
      path: '/Account',
      name: 'Account',
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
