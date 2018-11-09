<template>
	<div id='home'>
		<header class='header headerTopBgW'>
			<!--<a class='backPre'></a>-->
			ZQ  商城
			<span v-show="islogin" @click='exit'>退出{{myname}}</span>
		</header>	
		<article class='banner'>
			<router-link class='exchangeRecord' to='login'>兑换记录</router-link>
			<!--<a href="exchangeRcord.html" class='exchangeRecord'>兑换记录</a>-->
			<p class='bannerMcoin'>
				<i></i>{{newnm}}
			</p>
		</article>
		<article class='goodsExchange'>
			<section class='exchangeTitle'>
				<span>大家都在兑</span>
			</section>
		</article>
		<div v-show='false'>
					<h1 style='font-size: 14px;'>vuex 测试 Clicked: {{ getCount }} times</h1>
				    <button @click="increment">+</button>
				    <button @click="decrement">-</button>
		</div>
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
						<a href="javascript:;" class='ExchangeNow' @click='nowExchange(item)'>立即兑换</a>
					</section>
				</article>
			</div>
		</div>
		<homeUpBuy ref='shopDet' :det='shopdata'></homeUpBuy>
	</div>
</template>

<script>
	import {Lazyload} from 'mint-ui'
	import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
	import BScroll from 'better-scroll'
	import homeUpBuy from './homeUpBuy.vue'
	export default{
		components:{
			homeUpBuy,
		},
		data(){
			return{
				islogin:false,//是否登录
				myname:'',//登录人账号
				newnm:0,
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
				this.scroll();
				this.loginstate();
			})
		},
		created(){
			//this.$store.dispatch('allMcoin');
			this.$axios.get('../static/data.json',{})
			.then(res=>{
				this.goods=res.data.shopsList;
				//this.allMcoin=res.data.allMcoin;
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
			scroll(){
				
				this.scroll=new BScroll(this.$refs.wrapper,{
					click: {
						        type: Boolean,
						        default: true
						      }
				})
			},
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