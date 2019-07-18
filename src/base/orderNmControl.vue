<template>
    <div class='nmcontrolComponent'>
        <span class='iconfont icon-Imall-jianhao' @click="orderNmControlReduce()" :class="orderNmDefault==1? 'disabled' : 'nmcontrolBtn'"></span>
        <input type="text" class='nmcontrolInput' v-model="orderNmDefault">
        <span class='iconfont icon-Imall-plus' @click="orderNmControlAdd()" :class="orderNmDefault==orderNm? 'disabled' : 'nmcontrolBtn'"></span>
    </div>
</template>
<script>
export default {
    props:{
        orderNm:Number
    },
    data(){
        return{
            orderNmDefault:1,
        }
    },
    methods:{
        orderNmControlAdd(){
           
            if(this.orderNmDefault==this.orderNm){
               
               this.orderNmDefault=this.orderNm
            }else{
                 this.orderNmDefault++;
                 
            }
            
        },
        orderNmControlReduce(){
            
            if( this.orderNmDefault==1){
                this.orderNmDefault==1
            }else{
                this.orderNmDefault--;
            }
            

        }
    }
}
</script>
<style>
.nmcontrolComponent{
    width:240px;
    height:60px;
}
.nmcontrolBtn{
    height:60px;
    width:60px;
    font-size:30px;
   float: left;
    line-height: 60px;
    border:1px solid #ccc;
    display: block;
    text-align: center;
    background: #fff;
}
.nmcontrolInput{
    float:left;
    width:120px;
    border:1px solid #ccc;
    text-align: center;
    line-height: 60px;
    height:60px
}
.disabled{
    height:60px;
    width:60px;
    font-size:30px;
   float: left;
    line-height: 60px;
    border:1px solid #ccc;
    display: block;
    text-align: center;
    background: #ddd;
}
</style>


