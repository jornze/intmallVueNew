<template>
	<div>
		<cube-slide ref="slide" :data="items" @change="changePage" :auto-play='false' :loop='false'>
		  <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
		    <a :href="item.url" :class="{'slideLast':index==itemsLength-1}">
		      <img :src="item.image" >
		      <span class='nowUse' ref='nowUse' v-if='index==itemsLength-1' @click='toHome'>立即使用</span>
		    </a>
		  </cube-slide-item>
		</cube-slide>
		
	</div>
</template>

<script>
	import {Slide} from 'cube-ui'
	export default{
		data(){
			return{
				itemsLength:0,
				items: [
			        {
			          url: '#',
			          image: 'https://ustbhuangyi.github.io/better-scroll/static/img/spring.8396ee1.jpeg'
			        },
			        {
			          url: '#',
			          image: 'https://ustbhuangyi.github.io/better-scroll/static/img/summer.1b31a24.jpeg'
			        },
			        {
			          url: '#',
			          image: 'https://ustbhuangyi.github.io/better-scroll/static/img/fall.0e0be3c.jpeg'
			        },
			        {
			          url: '#',
			          image: 'https://ustbhuangyi.github.io/better-scroll/static/img/winter.74aecef.jpeg'
			        }
			    ]
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.itemsLength=this.items.length;
			})
		},
		methods:{
			changePage(current) {
			     
			    },
		    clickHandler(item, index) {
		      console.log(item, index)
		    },
		    toHome(){
		    	this.$router.push('/home');
		    }
		}
	}
</script>

<style>
	.cube-slide-item > a > img{
		width:100%;
		height: 100%;
	}
	.cube-slide-dots{
		bottom:1rem!important;
	}
	.slideLast{
		position: relative;
	}
	.nowUse{
		position: absolute;
	    bottom: 2rem;
	    display: block;
	    width: 130px;
	    text-align: center;
	    padding: 15px 0;
	    border: 4px solid hsla(0,0%,100%,.7);
	    border-radius: 4px;
	    color: hsla(0,0%,100%,.7);
	    font-size: 20px;
	    left:50%;
	    margin-left:-65px;
	}
</style>