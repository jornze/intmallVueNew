<template>
	<div id='home'>
		<header class='header headerTopBgW'>
			<!--<a class='backPre'></a>-->
			ZQ  商城
			<span v-show="islogin" @click='exit'>退出{{myname}}</span>
		</header>	
		<article class='banner'>
			<!--<router-link class='exchangeRecord' to='login'>兑换记录</router-link>
			<p class='bannerMcoin'>
				<i></i>{{newnm}}
			</p>-->
			<Slider></Slider>
		</article>
		<!--秒杀-->
		<article class='goodsExchange'>
			<section class='exchangeTitle senconKill'>
				<div> ZQ秒杀	
				</div>
				<div>
					<div>12点场</div>
					<i>01</i>
					<i>:</i>
					<i>23</i>
					<i>:</i>
					<i>05</i>	
				</div>
				<div>秒抢好货&gt;</div>
			</section>
		</article>
		<Sencondkill :secondKiiLists='secondKillData'></Sencondkill>
		<!--特卖-->
		<article class='goodsExchange'>
			<section class='exchangeTitle'>
				<span>促销特卖</span>
			</section>
		</article>
		<div class='wrapperbd'>
			<div ref='wrapper' class='homewrapper'>
				<article class='goodsLists' >
					<section class='goods' v-for="(item,index) in goods" :key="index">
						<div class='goodsPic'>
							<img v-lazy='item.pic' alt="" class='picCom'/>
							<!--<div :style="{'background':'url('+item.pic+') no-repeat',backgroundSize:'contain'}" class='picCom'></div>-->
						</div>
						<p class='goodsDet'>
							<span class='LimitQuantity' v-if="item.limit">限量</span>
							<span class='goodsName'>{{item.name}} </span>
							<span class='spec'>{{item.sku}}</span>
						</p>
						<p class='goodsPrice'>
							<i></i>{{item.price}}
						</p>
						<a href="javascript:;" class='ExchangeNow' @click='nowExchange(item)'>立即抢购</a>
					</section>
				</article>
			</div>
		</div>
		<!--精选品类-->
		<article class='goodsExchange'>
			<section class='exchangeTitle styletitle'>
				<div>精选品类</div>
				<div>更多品类&gt;</div>
			</section>
		</article>
		<StyleBetter :styleData='styleBetterD'></StyleBetter>
		<homeUpBuy ref='shopDet' :det='shopdata'></homeUpBuy>
		<NavBottom></NavBottom>
	</div>
</template>

<script>
	import {Lazyload} from 'mint-ui'
	import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
	import BScroll from 'better-scroll'
	import homeUpBuy from './homeUpBuy.vue'
	import Slider from './homeComponents/slider' //顶部焦点图
	import NavBottom from './homeComponents/navBottom' //底部导航栏
	import Sencondkill from './homeComponents/sencondkill'
	import StyleBetter from './homeComponents/styleBetter'
	export default{
		components:{
			homeUpBuy,
			Slider,
			NavBottom,
			Sencondkill,
			StyleBetter
		},
		data(){
			return{
				islogin:false,//是否登录
				myname:'',//登录人账号
				newnm:0,
				secondKillData:{
					type:Array
				},
				shopdata:{
					type:Object
				},
				goods:{
					type:Array
				},
				lists:['1','2','3','4'],
				 allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      			scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
				loading:false,
				styleBetterD:[
					{
						url:'',
						pic:'https://gfs9.gomein.net.cn/wireless/T1cJhQBmDv1RCvBVdK_281_398.jpg'
					},
					{
						url:'',
						pic:'https://gfs9.gomein.net.cn/wireless/T1UodsBbdv1RCvBVdK_278_398.jpg'
					},
					{
						url:'',
						pic:'https://gfs6.gomein.net.cn/wireless/T1YYbvByCv1RCvBVdK_281_398.jpg'
					},
					{
						url:'',
						pic:'https://gfs5.gomein.net.cn/wireless/T148_bB4Av1RCvBVdK_281_398.jpg'
					},
				]
			}
			
		},
		computed: {
	  	// 使用对象展开运算符将 getters 混入 computed 对象中
		    ...mapGetters([
		      'getCount',
		      'getallm'
		    ])
	    },
		mounted(){
			this.$nextTick(function(){
				/*this.scroll();*/
				this.loginstate();
			})
		},
		created(){
			//this.$store.dispatch('allMcoin');
			this.$axios.get('../static/data.json',{})
			.then(res=>{
				this.goods=res.data.shopsList.slice(0,4);
				//this.secondKillData=res.data.shopsList;
				//this.allMcoin=res.data.allMcoin;
				})
			.catch(err=>{
				console.log(err)
			});
			this.$axios.get('https://www.easy-mock.com/mock/5c2c592f86edfe7a71848bac/vuemall/secondKill',{})
			.then(res=>{
				console.log(res.data.data.list)
				this.secondKillData=res.data.data.list;
				
				})
			.catch(err=>{
				console.log(err)
			});
			this.$axios.get('/api/users/mcoin',{})
			.then(res=>{
					if(res.data.status=='200'){
						this.newnm=res.data.data[0].mcoinnm;
					}
				})
			.catch(err=>{
				console.log(err)
			});
			this.$axios.get('/api',{})
			.then(res=>{
					console.log(document.cookie);
				})
			.catch(err=>{
				console.log(err)
			});
		},
		methods:{
			loginstate(){
				let storage=localStorage.getItem('token');
				if(storage){
					this.islogin=true;
					this.myname=localStorage.getItem('user')
				}else{
					this.islogin=false;
				}
				
			},
			exit(){
				this.islogin=false;
				localStorage.removeItem('token');
			},
			//去除了better-scroll
			/*scroll(){
				
				this.scroll=new BScroll(this.$refs.wrapper,{
					click: {
						        type: Boolean,
						        default: true
						      }
				})
			},*/
			nowExchange(item){
				this.shopdata=item;
				this.$refs.shopDet.show();
			},
			...mapActions([
			      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
			      'decrement'
			    ])
		}
			
	}
</script>

<style scoped>
	img[lazy=loading]{
		background: rgba(245,245,245, .7);
	}
</style>