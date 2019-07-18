import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Loadmore from '@/components/loadmore'
import Recordsuccess from '@/components/recordsuccess'
import Taskcenter from '@/components/taskcenter'
import Login from '@/components/login'
import Register from '@/components/register'
import Addlist from '@/components/addlist'
import Addlist2 from '@/components/addlist2'
import NewAddr from '@/components/newAddr'//父子组件之间props传递数据
import NewAddr2 from '@/components/newAddr2'//路由之间传递数据
import ReciveRecord from '@/components/reciveRecord'
import BootAnimation from '@/components/bootAnimation/bootAnimation'
import My from '@/components/my/myIndex'
import StyleIndex from '@/components/style/styleIndex'
import GoodsDetail from '@/components/goodsDetail/goodsDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path:'/loadmore',
    	component:Loadmore
    },
    {
    	path:'/recordsuccess',
    	component:Recordsuccess
    },
    {
    	path:'/taskcenter',
    	component:Taskcenter
    },
    {
    	path:'/login',
    	component:Login
    },
    {
    	path:'/register',
    	component:Register
    },
    {
    	path:'/addlist',
    	component:Addlist
    },
    {
    	path:'/addlist2',
    	component:Addlist2
    },
    {
    	path:'/newAddr',
    	component:NewAddr
    },
    {
    	path:'/newAddr2',
    	name:'newaddr',
    	component:NewAddr2
    },
    {
    	path:'/reciveR',
    	component:ReciveRecord
    },
    {//我的
    	path:'/my',
    	component:My
    },
    {
    	path:'/style',
    	component:StyleIndex
    },
    {
      path:'/goodsDetail',
      component:GoodsDetail
    }
  ]
})
