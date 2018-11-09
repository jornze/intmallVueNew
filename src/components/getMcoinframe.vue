<template>
	<div  @touchmove.prevent>
		<!--领取M币弹窗-->
		<!--遮罩层-->
		<div class='taskCentershadow' v-show='showWindow'></div>
		<transition name='getMwindow'>
			<div id='getMwindow' v-show='showWindow'>
				<div class='getMwindowPic'>	
				</div>
				<p class='getMwindowMnm'>+<span id='getMwindowMnm'>{{Mnm}}</span>M币</p>
			</div>
		</transition>	
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				showWindow:false
			}
		},
		props:{
			Mnm:{
				required:true,
				default:0
			}
		},
		methods:{
			show(){
				this.showWindow=true
			},
			hide(){
				this.showWindow=false
			}
		}
	}
</script>

<style scoped>
	.getMwindow-enter-active, .getMwindow-leave-active{
		transition: all .3s linear;
	}
	.getMwindow-enter, .getMwindow-leave-active{
		transform: rotateX(60deg);
		transform: scale(0);
	}
</style>