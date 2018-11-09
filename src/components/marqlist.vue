<template>
	<div id="">
		<section class='taskNotice'>
			<div class='noticeIcon'></div>
			<div id="noticeList" :class="{anim:animate==true}">
				<p v-for='item in marqlist'>{{item}}</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				animate:false,
				marqlist:[
					'我是一行汉字我是一行汉字我是一行汉字我是一行汉字我是一行汉字我是一行汉字',
					'wosoyigehaoeno nyaoshi zhichiwo  zzhida ba  afasa afvdfd'
					]
				}
			
		},
		created(){
			setInterval(this.showMarquee,2000)
		},
		methods:{
			showMarquee() { 
	                this.animate = true; 
	                setTimeout(()=>{ 
	               	this.animate = false;
	                this.marqlist.push(this.marqlist[0]); 
	                this.marqlist.shift();  
	            },800)
            }
		}
	}
</script>

<style scoped>
	.taskNotice{
		overflow: hidden;
	}
	.anim{
		transition: all 2s;
		margin-top: -0.4rem;
	}
</style>