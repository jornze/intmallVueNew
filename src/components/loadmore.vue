<template>
	<div >
		<!--<div style='height:700px'>dsd</div>-->
		<!--<div class='loadmore'>
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="false" ref="loadmore">
  <section class='goods' v-for="(item,index) in goods" :key="index">
						<div class='goodsPic'>
							<div :style="{'background':'url('+item.pic+') no-repeat',backgroundSize:'contain'}" class='picCom'></div>
						</div>
						<p class='goodsDet'>
							<span class='LimitQuantity' v-if="item.limit">限量</span>
							<span class='goodsName'>{{item.name}} </span>
							<span class='spec'>{{item.sku}}</span>
						</p>
						<p class='goodsPrice'>
							<i></i>{{item.price}}
						</p>
						<a href="javascript:;" class='ExchangeNow' @click='nowExchange(item)'>立即兑换</a>
		</section>
		
</mt-loadmore>
</div>-->
<ul ref='loadmore' 
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10" class='goodsLists '>
  <section class='goods' v-for="(item,index) in goods" :key="index">
						<div class='goodsPic'>
							<img v-lazy='item.pic' alt="" class='picCom'/>
							<!--<div :style="{'background':'url('+item.pic+') no-repeat',backgroundSize:'contain'}" class='picCom'></div>-->
						</div>
						<p class='goodsDet'>
							<span class='LimitQuantity' v-if="item.limit">限量</span>
							<span class='goodsName'>{{item.name}} </span>
							<span class='spec'>{{item.sku}}</span>
						</p>
						<p class='goodsPrice'>
							<i></i>{{item.price}}
						</p>
						<a href="javascript:;" class='ExchangeNow' @click='nowExchange(item)'>立即兑换</a>
		</section>
</ul>
<!--<mt-swipe :auto="0">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>-->
	</div>
</template>

<script>
	import {Loadmore, Lazyload, InfiniteScroll,Swipe, SwipeItem } from 'mint-ui'
	export default{
		data(){
			return{
				goods:{
					type:Array
				},
				lists:[1,2,3,4,5],
				list:[1,2,3,4],
				loading:false
			}
		},
		created(){
			this.$axios.get('../static/data.json',{})
			.then(res=>{
				this.goods=res.data.shopsList;
				})
			.catch(err=>{
				console.log(err)
			})
		},
		methods:{
			/*loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
},*/
			loadMore:function() {
				//this.lists.push('7');
				//console.log('ddd');
		      // 上拉加载
		       this.goods.push(
		       	{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				},
				{
					"pic":"./static/img/integralGoods.png",
					"limit":true,
					"name":"新加",
					"sku":"黑色",
					"price":"8000",
					"quantity":"10"
				}
		       );
		      //this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
		   }
		}
	}
</script>

<style scoped>
	img[lazy=loading]{
		background: rgba(245,245,245, .7);
	}
	.mint-swipe{
		height:200px;
		line-height: 200px;
		width:100%;
	}
	.loadmore{
		height: 100px;
		width:100%;
	}
</style>