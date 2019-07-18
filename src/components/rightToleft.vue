<template>
    <div  class='rightToleftbox'>
        <!--兑换遮罩层-->
		<div class='shadow' @click='hide()' v-show='showRightBar'></div>
        <transition name='rightToleft'>
            <div ref='rightToleft' class='rightToleft' v-show='showRightBar'>
                <div @click="hide()" class='iconfont icon-Imall-close-circle clscbtn'></div>
               <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                showRightBar:false
            }
        },
        methods:{
            show(){
                this.showRightBar=true
            },
            hide(){
                this.showRightBar=false
            }
        }
    }
</script>
<style scoped>
.rightToleft{
    height:calc(100vh);
    background: #fff;
    position: fixed;
    width:80%;
    top:0;
    right:0;
    z-index:9;
    
}
	.rightToleft-enter-active, .rightToleft-leave-active {
      transition: all .3s linear;
  	}
  	.rightToleft-enter, .rightToleft-leave-active {
  	  right:-80%;
      }
      
.clscbtn{
    font-size: 40px;
    position: absolute;
    top:20px;
    right:20px;
}
</style>

