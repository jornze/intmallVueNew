<template>
	<transition name='login'>
		<div class='login' ref='login'>
			<header class='header headerTopBgW'>
				用户登录
			</header>
			<mt-field label="用户名" placeholder="请输入用户名" v-model="name"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" :state="status" type="password" v-model="password"></mt-field>
			<div class='loginBtn'>
				<mt-button plain size="large" @click.native="login" :disabled="isdisabled">登录</mt-button>
			</div>
			<p class='ptitle toregister'>
				还未注册？请<router-link to='register' tag='span' >注册</router-link>
			</p>
			
		</div>
	</transition>
</template>

<script>
	import {Field, Button,Toast} from 'mint-ui';
	export default{
		data(){
			return{
				isdisabled:false,
				status:'',
				name:'',
				password:''
			}
		},
		methods:{
			
			login(){
				let loginjson={
					"name":this.name,
					"password":this.password
				}
				this.$axios.post('/api/users/login',loginjson)
				.then((res)=>{
					console.log(res.data);
					if(res.data.state){
						Toast(res.data.msg);
						console.log(res.data.psd)
						localStorage.setItem('token',res.data.token);
						localStorage.setItem('user',res.data.user);
						//localStorage.setItem('psd',res.data.psd);
						this.$router.push('/')
					}else{
						Toast(res.data.msg);
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.login-enter-active, .login-leave-active{
		transition: all .4s linear;
	}
	.login-enter, .login-leave-active{
		transform: translateY(-100%);
	}
	.login{
		position: absolute;
		width:16rem;
		margin-left:-8rem;
		left:50%;
		height: 100%;
		background: #fff;
	}
	.ptitle{
		height:1.8rem;
		line-height: 1.8rem;
		text-align: left;
		font-size: 0.6rem;	
		padding-left: 0.4rem;
	}
	.ptitle span{
		color:#f40;
	}
	.toregister{
		text-align: left;
		padding-left: 0.3rem;
	}
	.loginBtn{
		text-align: center;
		padding: 0.2rem 0.5rem;
	}
	
</style>