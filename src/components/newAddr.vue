<template>
	<transition name='addAddr'>
		<div class='addAddr' v-show='showaddr'>
			<header class='header headerTopBgR'>
				<a class='backPre' @click='hide'></a>
				地址管理
			</header>	
			<article class='addAddress'>
				<section class='addressDet'>
					<mt-field label="收货人姓名"  placeholder="收货人姓名" v-model="adddata.name"></mt-field>
					<mt-field label="手机号码" placeholder="手机号码" type="number" v-model="adddata.phone"></mt-field>
					<mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="5" v-model="adddata.address"></mt-field>
				</section>
				<section class='setdefault'>
					<mt-switch v-model="value">设为默认地址</mt-switch>
				</section>	
				<section class='savebtn'>
					<button id='saveAddress' @click='addNewaddress' >保存地址</button>
				</section>
					
			</article>
		</div>
		
	</transition>
</template>

<script>
	import {Filed, Toast, Indicator, Switch} from 'mint-ui'
	export default{
		data(){
			return{
				showaddr:false,
				value:{ //用于判断默认地址是否打开
					default:0
				}
				
				
			}
		},
		props:{
			adddata:{
				type:Object
			},
			isde:{
				default:0,
			}
		},
		watch:{
			isde(val){//用于判断默认地址是否打开
				this.value=val==1?true:false
			},
			value(val){//用于判断默认地址是否打开
				this.value=val;
			}
			
		},
		computed:{
			
		},
		mounted(){
			this.$nextTick(function(){
				
			})
		},
		methods:{
			show(){
				this.showaddr=true
			},
			hide(){
				this.showaddr=false
			},
			addNewaddress(){
				Indicator.open({
				  text: '保存中...',
				  spinnerType: 'fading-circle'
				});
				let isd=(this.value==true?1:0);
				let addnewaddress={
					"isdefault":isd,
					"name":this.adddata.name,
					"phone":this.adddata.phone,
					"address":this.adddata.address
				};
				this.$axios.post('/api/users/addAddress',addnewaddress)
				.then(res=>{
					
					if(res.data.state){
						setTimeout(()=>{
							Indicator.close();
							Toast('保存成功');
							//this.$router.push('/')
							this.showaddr=false;
							setTimeout(()=>{
								this.$router.go(0)//刷新当前路由 重新加载数据
							},200)
							
						},1500);
						
					}
				})
				.catch(err=>{
					Indicator.close();
					Toast('保存失败');
				})
			},
			
		}
	}
</script>

<style scoped>
	.addAddr-enter-active, .addAddr-leave-active{
		transition: all .3s linear;
	}
	.addAddr-enter, .addAddr-leave-active{
		transform: translateX(100%);
	}
	.addAddr{
		position: absolute;
		width:100%;
		height:100%;
		top:0;
		bottom:0;
		background: #f4f4f4;
	}
</style>