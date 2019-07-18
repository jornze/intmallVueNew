<template>
	<transition name='register'>
		<div class='register' ref='register'>
			<header class='header headerTopBgW'>
				用户注册
			</header>
			<mt-field label="用户名" placeholder="请输入用户名" v-model="name"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" :state="status" type="password" v-model="password"></mt-field>
			<div class='regiserBtn'>
				<mt-button plain size="large" @click.native="register">注册</mt-button>
			</div>
			<p class='ptitle'>
				已注册，请<router-link to='login' tag='span'>登录</router-link>
			</p>
			<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    
</div>

		</div>
	</transition>
</template>

<script>
	import 'swiper/dist/css/swiper.min.css'

import  'swiper/dist/js/swiper.min.js'
import Swiper from 'swiper'
	import {Field,Toast} from 'mint-ui'
	export default{
		data(){
			return{
				cur:0,
				pag:['11','22','33','44','55'],
				items:['111','222','r33e','444','5555'],
				status:'',
				name:'',
				password:'',
				
			}
		},
		computed:{
			
      
		},
		 components:{
		   
		  },
		mounted() {
	       this.swiper();
	   
	    },
		methods:{
			swiper(){
				let text='';
				 new Swiper ('.swiper-container', {
			    //direction: 'vertical', // 垂直切换选项
			    //loop: true, // 循环模式选项
			    //autoplay: true,
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      clickable: true,
			      renderBullet: function (index, className) {
		          switch(index){
		            case 0:text='壹';break;
		            case 1:text='贰';break;
		            case 2:text='叁';break;
		            case 3:text='肆';break;
		            case 4:text='伍';break;
		          }
		          return '<span class="' + className + '">' + text + '</span>';
		        },
			    },
			     on: {
				    touchStart: function(event){
				      console.log('事件触发了');
				    },
				  },
			  })
			},
			register(){
				//localStorage.removeItem('token');
				let registjson={
					"name":this.name,
					"password":this.password
				}
				this.$axios.post('/api/users/regist',registjson)
				.then((res)=>{
					if(res.data.state){
						Toast(res.data.msg);
						this.$router.push('/login')
					}else{
						console.log('注册失败')
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	/*.swiper-pagination{
		display: none;
	}*/
	ul li{
		float:left;
	}
	.active{
		color:red;
	}
	 .swiper-pagination-bullet-custom {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-active{
    color: red;
    background: #007aff;
  }
  .swiper-pagination-bullet{
      width:100px; 
     height: 40px;
     display: inline-block; 
     border-radius: 100%;
    background: #fff; 
  }
	.swiper-container{
		height:200px;
		width:100%;
	}
	.register-enter-active, .register-leave-active{
		transition: all .4s linear;
	}
	.register-enter, .register-leave-active{
		transform: translateY(100%);
	}
	.register{
		position: absolute;
		width:16rem;
		left:50%;
		margin-left:-8rem;
		height: 100%;
		background: #fff;
	}
	.regiserBtn{
		text-align: center;
		padding: 0.2rem 0.5rem;
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
</style>
