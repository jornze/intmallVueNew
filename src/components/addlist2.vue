<template>
	<transition name='addlist'>
		<div class='addlist'>
			<header class='header headerTopBgR'>
				<router-link tag='a' class='backPre' to='/'></router-link>
				收件地址列表
			</header>	
			<article class='addNewAddress'>
				<button @click='addnew(canadd)' :class="{'noadd':canadd}"><i></i>添加新地址</button>
			</article>
			<article class='addressLists'>
				<section class='addressMsg' v-for='item in addrlist'>
					<a class='editBtn' @click='showAdd(item)'></a>
					<div class='msgList'>
						<p class='orderAddUser'>
							<span class='userName'>{{item.name}}</span>
							<span class='userTel'>{{item.phone}}</span>
						</p>
						<p class='userAddDet'>{{item.address}}</p>
					</div>
					<div class='DefaultAddIcon' v-show="item.isdefault==0?false:true"></div>
				</section>
			</article>
          
            
		</div>
	</transition>
</template>

<script>
	//import newAddr from '@/components/newAddr'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				additem:{
					type:Object
				},
				isdefaul:{//用于判断默认地址是否打开
					type:Object
				},
				canadd:false,//地址不满5条时可以新增地址
				addrlist:[
					
				]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.fetchaddresslists();
			})
		},
		components:{
			//newAddr
		},
		methods:{
			showAdd(item){
				this.additem=item;
				this.isdefaul=item.isdefault==1?true:false;
				this.$router.push({name:'newaddr',params:{addmsg:this.additem,isd:this.isdefaul,addorUp:'up'}});
			},
			addnew(canadd){
				if(canadd){
					Toast('最多可有五条收件地址，请编辑已有地址')
				}else{
					this.$router.push({name:'newaddr',params:{addmsg:this.additem,isd:false,addorUp:'add'}});
				}
				
			},
			fetchaddresslists(){
				this.$axios.post('/api/users/checkToken',{auth:localStorage.getItem('token')})
				.then(res=>{
					if(res.data.state){
						console.log(res.data.msg);
						this.$axios.get('/api/users/addresslists',{})
						.then(res=>{
							if(res.data.state){
								this.addrlist=res.data.lists;
								console.log(res.data)
								if(res.data.lists.length>4){
									this.canadd=true;//地址5条时禁止新增
								}
							}
							
						})
					}else{
						this.$router.push('/login');
					}
				})
				
			}
		}
	}
</script>

<style scoped>
	.addlist-enter-active, .addlist-leave-active{
		transition: all .3s linear;
	}
	.addlist-enter, .addlist-leave-active{
		transform: translateX(-100%);
	}
	.addlist{
		position: absolute;
		width:16rem;
		left:50%;
		margin-left: -8rem;
		height:100%;
		top:0;
		bottom:0;
	}
	.noadd{
		background: #eee!important;
	}
</style>