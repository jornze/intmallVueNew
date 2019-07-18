<template>
    <div class='goodsFoot'>
        <ul>
            <li >
                <span class='iconfont  icon-Imall-heart'>  </span>
                <span>收藏</span>
            </li>
            <li> 
                <span class='iconfont icon-Imall-gouwuche'>
                    <span class='shopCarNumber'>3</span>
                </span>
                <span>
                     购物车
                </span>
               
            </li>
            <li>加入购物车</li>
            <li>立即购买</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.goodsFoot{
    position: fixed;
    bottom: 0;
    left:0;
    height:100px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ccc;
}
.goodsFoot ul{
    display: flex;
}
.goodsFoot ul li{
    flex:1;
    text-align: center
    
}
.goodsFoot ul li>span{
    display:block;
    width:100%;
    text-align: center
}
.goodsFoot ul li>span:nth-child(1){
    height:60px;
    line-height: 60px;
    font-size: 55px;
    position: relative;
}
.goodsFoot ul li>span:nth-child(2){
    line-height:40px;
    height:40px;
    font-size: 25px;
   
}
.goodsFoot ul li:nth-child(3){
     background: linear-gradient(to right,#FAC905 0,#FF9500 100%);
     line-height: 100px;
     color:#fff;
     font-size: 30px;
}
.goodsFoot ul li:nth-child(4){
    background: linear-gradient(to right,#FA1E8C 0,#FC1E56 100%);
    line-height: 100px;
     color:#fff;
     font-size: 30px;
}
 .shopCarNumber{
     position:absolute;
     top:-3px;
     right:30%;
     font-size: 24px;
     display: inline-block;
     width:35px;
     height:35px;
     border-radius:25px;
     line-height: 35px;
     color:#fff;
     background: #F20C59;
 }

</style>

