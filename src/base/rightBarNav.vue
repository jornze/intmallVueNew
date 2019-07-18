<template>
    <div v-show='showSiderBarNav'>
        <div class='mask' @click="emitToParent()"></div>
        <div  class='siderBarNav' v-show='showSiderBarNav'>
            <router-link  tag='p' to='/'><i class='iconfont icon-Imall-shouye'></i><span>首页</span></router-link>
            <router-link  tag='p' to='/style'><i class='iconfont icon-Imall-fenleiorguangchangorqita'></i><span>分类</span></router-link>
            <router-link tag='p'  to='/goodsDetail'><i class='iconfont icon-Imall-gouwuche'></i><span>购物车</span></router-link>
            <router-link  tag='p' to='/my'><i class='iconfont icon-Imall-home'></i><span>我的</span></router-link>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            showSiderBarNav:false
        }
    },
    methods:{
        show(){
            this.showSiderBarNav=true;
            
        },
        hide(){
             this.showSiderBarNav=false
             
        },
        emitToParent(){
            this.showSiderBarNav=false
            this.$emit('hideTopNav',false)
        }
    }
}
</script>
<style>
.siderBarNav{
    position: absolute;
    right: 30px;
    top: 110px;
    width:320px;
    background: #fff;
    opacity: .9;
    border-radius: 10px;
    box-shadow:0 0 50px #1f1b1b;
    padding: 20px;
}
.siderBarNav:before{
    border-width:30px;
    border-color:transparent transparent #fff transparent;
    border-style: solid;
    content: "";
    position: absolute;    
    height: 0;
    right:20px;
    top:-60px;
    
}
.siderBarNav p{
    height:80px;
    line-height: 80px;
    color:#000;
    font-size: 35px;
}
.siderBarNav p i{
    font-size: 50px;
    margin-right:5%;
    display: inline-block;
    width:20%;
}
.siderBarNav p span{
    display: inline-block;
    border-bottom: 1px solid #000;
    width:75%;
}
.mask{
    position: fixed;
    width:100%;
    height:calc(100vh);
    background: #fff;
    opacity:0;
    top:0;
    left:0;
}
</style>


