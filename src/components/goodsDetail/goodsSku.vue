<template>
    <div class='shopSku'>
        <div class='skuTop pad20'>
            <div>
                <img src="https://gfs17.gomein.net.cn/T1ZmCQBTAv1RCvBVdK_160.jpg?v=20170727" alt="">
            </div>
            <div>
                <p>￥78</p>
                <p>有货</p>
            </div>
        </div>
        <div class='pad20'>
            <ul class='skuStylebox'>
                <h4 class='skuTitle'>颜色</h4>
                <li>红色</li>
                <li>黄色</li>
                <li>红色</li>
                <li>黄色</li>
                <li>红色</li>
                <li>黄色</li>
                <li>红色</li>
                <li>黄色</li>
                <li>红色</li>
                <li>黄色</li>
                <li>红色</li>
                <li>黄色</li>
                <li>红色</li>
                <li>黄色</li>
            </ul>
             <ul class='skuStylebox'>
                <h4 class='skuTitle'>版本</h4>
                <li>双支</li>
                <li>一盒（4支）</li>
                <li>一盒（4支）</li>
                <li>一盒（4支）</li>
                <li>一盒（4支）</li>
            </ul>
        </div>
        
        <div class='skuNm pad20'>
            <p>
                <label for="">数量</label>
                <span>(限购{{limitNm}})</span>
            </p>
            <p>
                <OrderNmControl :orderNm="limitNm"></OrderNmControl>
            </p>
        </div>
        <hr class='skuHr'/>
        <div class='skuByNow'>
            <p>加入购物车</p>
            <p>立即购买</p>
        </div>
    </div>
</template>
<script>
import OrderNmControl from '../../base/orderNmControl'
export default {
    data(){
        return{
            limitNm:20
        }
    },
    components:{
        OrderNmControl
    }
}
</script>
<style>
.pad20{
    padding: 20px;
}
.margBtm{
    margin-bottom: 20px;
}
.skuTop{
    display:flex;
    border-bottom: 1px solid #ccc;
}
.skuTop>div:nth-child(1){
    flex-basis: 160px;
    height:160px;
    margin-right: 20px;
    border:1px solid #ddd;
}
.skuTop>div:nth-child(1) img{
    width:100%;
    height:100%;
}
.skuTop>div:nth-child(2){
    flex:1;
    padding: 30px 0;
}
.skuTop>div:nth-child(2) p{
    line-height: 50px;
    
}
.skuTitle{
    height:100px;
    line-height: 100px;

}
.skuStylebox li{
    float:left;
    padding:20px;
    border:1px solid #ddd;
    font-size: 28px;
    margin-right: 20px;
    margin-bottom:20px;
}
.skuStylebox:after{
    content: "";
    display: block;
    clear: both;
    height: 0;
}
.skuNm{
   display: flex;
}
.skuNm p{
    line-height: 60px;
    flex:1;
}
.skuByNow{
    display: flex;
    width:100%;
    position: absolute;
    bottom: 0;
}
.skuByNow p{
     line-height: 100px;
     color:#fff;
     font-size: 35px;
     flex:1;
     text-align: center
}
.skuByNow p:first-child{
     background: linear-gradient(to right,#FAC905 0,#FF9500 100%);
    
}
.skuByNow p:last-child{
    background: linear-gradient(to right,#FA1E8C 0,#FC1E56 100%);
    
}
.skuHr{
    margin:20px;
    background: #ccc;
    height:2px;
}
</style>

