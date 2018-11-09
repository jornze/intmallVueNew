<template>
	<div ref='signInTips' @touchmove.prevent>
			<!--遮罩层-->
			<div class='taskCentershadow' v-show='tipshow'></div>
			<!--签到规则提示-->
			<transition name='tipsframe' >
				<div id="signInTips" v-show='tipshow' >
					<p class='signInTipsTitl'>签到规则</p>
					<div class='signInTipsCont'>
						<p>1.如果签到中途中断，从初始值开始重新计算也就是第一天的10M币</p>
						<p>2.如果签到中途中断，从此如果签到中途中断从此</p>
					</div>
					<p class='signInTipsIKnow' @click='tipchange'>我知道了</p>
				</div>	
			</transition>
			
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tipshow:false
			}
		},
		created(){
			
		},
		methods:{
			tipchange(){
				this.tipshow=false
			}
			
		}
	}
</script>

<style scoped>
	.tipsframe-enter-active, .tipsframe-leave-active{
		transition:all .4s linear;
	}
	.tipsframe-enter, .tipsframe-leave-active{
		opacity: 0;
		transform: scale(0);
	}
</style>