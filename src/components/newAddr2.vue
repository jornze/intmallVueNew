<template>
	<transition name='addAddr'>
		<div class='addAddr'>
			<header class='header headerTopBgR'>
				<a class='backPre' @click='$router.go(-1)'></a>
				地址管理
			</header>	
			<article class='addAddress'>
				<section class='addressDet'>
					<mt-field label="收货人姓名"  placeholder="收货人姓名" v-model="name"></mt-field>
					<mt-field label="手机号码" placeholder="手机号码" type="number" v-model="phone"></mt-field>
					<mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="5" v-model="address"></mt-field>
				</section>
				<section class='setdefault'>
					<mt-switch v-model="isdef">设为默认地址</mt-switch>
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
				aid:this.$route.params.addmsg.id,
				isdef:this.$route.params.isd,
				name:this.$route.params.addmsg.name,
				phone:this.$route.params.addmsg.phone,
				address:this.$route.params.addmsg.address,
				addorUpdate:this.$route.params.addorUp//判断是新增‘add’还是编辑‘up’ 
			}
		},
		props:{
			
		},
		watch:{
			//value(val){//用于判断默认地址是否打开
				//this.value=(this.$route.params.addmsg.isdefault==1?true:false)
			//},
			//value(val){//用于判断默认地址是否打开
				//this.value=val;
			//}
			
		},
		computed:{
			
		},
		mounted(){
			this.$nextTick(function(){
				//console.log(this.$route.params.addmsg)
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
				let isdefNm=this.isdef==true?1:0;
				let addnewaddress={
					"isdefault":isdefNm,
					"name":this.name,
					"phone":this.phone,
					"address":this.address
				};
				if(this.addorUpdate=='add'){
					if(this.name.length>20){
						Toast('名字不能太长哦');
						this.name='';
					}else if(!/^\d{11}$/.test(this.phone)){
						Toast('请输入正确的手机号码');
						//this.phone='';
					}else if(this.address.length>100){
						Toast('地址不能超过100个字哦');
						//this.address='';
					}else{
						Indicator.open({
						  text: '正在保存...',
						  spinnerType: 'fading-circle'
						});
						this.$axios.post('/api/users/addAddress',addnewaddress)
						.then(res=>{
							console.log(addnewaddress)
							if(res.data.state){
								setTimeout(()=>{
									Indicator.close();
									Toast('保存成功');
									//this.$router.push('/')
									this.showaddr=false;
									setTimeout(()=>{
										this.$router.go(-1)//刷新当前路由 重新加载数据
									},200)
									
								},1500);
								
							}
						})
						.catch(err=>{
							Indicator.close();
							Toast('保存失败');
						})
					}
					
				}else{
					Indicator.open({
					  text: '正在更新...',
					  spinnerType: 'fading-circle'
					});
					addnewaddress.aid=this.aid;
					this.$axios.post('/api/users/updateAdd',addnewaddress)
					.then(res=>{
						console.log(addnewaddress)
						if(res.data.state){
							setTimeout(()=>{
								Indicator.close();
								Toast('更新成功');
								//this.$router.push('/')
								setTimeout(()=>{
									this.$router.go(-1)//刷新当前路由 重新加载数据
								},200)
								
							},1500);
							
						}else{
							Indicator.close();
							Toast('更新失败');
						}
					})
					.catch(err=>{
						Indicator.close();
						Toast('更新失败');
					})
				}
				
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
		width:16rem;
		left:50%;
		margin-left:-8rem;
		height:100%;
		top:0;
		bottom:0;
		background: #f4f4f4;
	}
</style>