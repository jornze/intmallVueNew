<template>
		<section class='taskNotice'>
			<div class='noticeIcon'></div>
			<div id="noticeList" >
				<cube-slide ref="newsSlide" :loop="true" :autoPlay="true" :direction="vertical" :showDots='false'>
				  <cube-slide-item v-for="(item, index) in marqlist" :key="index" >
				    <p href="" style='width:100%;height:1.7066666667rem;line-height:1.7066666667rem;'>
				    	{{item.title}}
				    </p> 
				  </cube-slide-item>
				</cube-slide>
			</div>
		</section>
</template>

<script>
	import {Slide} from 'cube-ui'
	export default{
		data(){
			return{
				vertical:'vertical',
				marqlist:[
						{
							'title':'范围广媳妇打死Greg',
							'name':'1'
						},
						{
							'title':'方式是否所代表的',
							'name':'2'
						}
					]
				 
			}
			
		}
		
	}
</script>

<style >
	.cube-slide-item{
		width:100%;
	}
</style>