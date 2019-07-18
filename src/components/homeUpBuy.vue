<template>
	
	<div id='homeUpBuy' >
		<!--兑换遮罩层-->
		<div class='shadow' @click='hide()' v-show='showShop'></div>
		<!--兑换弹窗-->
		<transition name='shopsUp'>
			<div class='buyGoodsbox list-content' ref='wrapper2' v-show='showShop'>
				<div >
					<section class='buyGoodsDet'>
						<div class='buyGoodsPic' :style="{'background':'url('+det.pic+')  no-repeat','background-size':'contain'}"></div>
						<div class='buyGoods'>
							<p class='buyGoodsName'>{{det.name}}</p>
							<p class='buyGoodsMcoin'>
								<span class='GoodsMnm'>
									<i></i><span id='totalCoin'>{{totalPrice}}</span>
								</span>
								<span class='allMnm'>
									<label for="">可用M币：</label>
									<span id='talMnm'>{{getallm}}</span>
								</span>
							</p>
						</div>
						<div class='iconfont icon-Imall-close-circle' style='font-size:1rem;color:#999;position: absolute;top:0.1rem;right:0rem' @click='hide()'></div>
					</section>
					<section class='goodsNum'>
						<div class='goodsNumTitle'>数量</div>
						<div class='goodsNumOp'>
							<span id='nmRd' class='nmcom' @click='nmRd(det.quantity)'>-</span>
							<span id='nm'>{{defaultNm}}</span>
							<span id='nmAd' class='nmcom' @click='nmAd(det.quantity)'>+</span>
						</div>
					</section>
					<section class='indexAddress'>
						<div class='orderAddIcon'></div>
						<div class='orderAddMsg'>
							<p class='orderAddUser'>
								<span id='orderUser'>Soda</span>
								<span id='orderUserTel'>1335798555</span>
								<span class='changeAdd'>
									<router-link tag='a' to='addlist2'>更换收货地址</router-link>
								</span>
							</p>
							<p id='orderUserAddMsg'>杭州市拱墅区城西银泰写字楼城西银城西银银城西银银城西银城西银</p>
						</div>
					</section>
					<section class='getMcoin'>
							<router-link  to='taskcenter' class='MnotEnough' v-if='isenough'>
								<p >
								<i></i>
								<span >可用M币不足，去获取{{isenough}}</span>
								</p>
							</router-link>
							<router-link   to='recordsuccess' class='mEnough ' v-else>
								<p >确认购买</p>
							</router-link >
						
						
					</section>
					<section style='height:0.2rem;'></section>
					
				</div>
			</div>	
		</transition>
	</div>
	
</template>

<script>
	import {Toast} from 'mint-ui'
	import { mapGetters } from 'vuex'
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				showShop:false,
				defaultNm:1
			}
		},
		props:{
			det:Object
		},
		created(){
			this.$store.dispatch('allMcoin')
		},
		mounted(){
			this.$nextTick(function(){
				this.scroll();
			})
		},
		computed: {
	  	// 使用对象展开运算符将 getters 混入 computed 对象中
		    ...mapGetters([
		      'getallm'
		    ]),
		    isenough(){
				return parseInt(this.totalPrice)>parseInt(this.getallm)?true:false
			},
			totalPrice(){
				return parseInt(this.det.price)*this.defaultNm;
			}
	    },
		methods:{
			show(){
				this.showShop=true;
			},
			hide(){
				this.showShop=false;
				this.defaultNm=1;
			},
			scroll(){
				this.scroll=new BScroll(this.$refs.wrapper2,{
					click: {
						        type: Boolean,
						        default: true
						      }
				})
			},
			nmAd(totalnm){
				
				if(this.defaultNm>totalnm){
					Toast('库存不够');
					this.defaultNm--;
				}else if(this.totalPrice>this.getallm){
					Toast('M币不够，请获取');
				}else{
					this.defaultNm++;
					if(this.totalPrice>this.getallm){
						Toast('M币不够，请获取');
					}
				}
			},
			nmRd(totalnm){
				if(this.defaultNm==1){
					this.defaultNm=1
				}else{
					this.defaultNm--;
				}
				
			}
		}
	};
</script>

<style>
	.buyGoodsbox{
		position: fixed;
		bottom:0;
		left:50%;
	}
	.shopsUp-enter-active, .shopsUp-leave-active {
      transition: all .3s linear;
  	}
  	.shopsUp-enter, .shopsUp-leave-active {
  	  bottom:-11.9467rem;
  	}
</style>