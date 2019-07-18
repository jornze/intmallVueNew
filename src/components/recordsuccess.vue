<template>
	<transition  name='record'>
		<div ref='recordSuccess' class='recordBd'>
			<!--<header class='header headerTopBgR' id='orderGoodsName'>
				<a class='backPre' href='index.html'></a>
				兑换商品名字
			</header>-->	
			<article class='recordDetMsg'>
				<section class='tipsMsg'>
					<span>
						<i :class="orderDesc.orderstate.state?'recordOk':'recordFail'"></i>
						{{orderDesc.orderstate.msg}}
					</span>
				</section>
				<section class='orderStatus mTop10 padLR12' >
					<label class='msgTitle'>订单状态：</label><span class='statusMsg' id='orderStat'>{{orderDesc.paystate}}</span>
				</section>
				<section class='orderAddress mTop10 padLR12'>
					<div class='orderAddIcon'></div>
					<div class='orderAddMsg'>
						<p class='orderAddUser'>
							<span id='orderUser'>{{orderDesc.addInfo.user}}</span>
							<span id='orderUserTel'>{{orderDesc.addInfo.tel}}</span>
						</p>
						<p id='orderUserAddMsg'>{{orderDesc.addInfo.add}}</p>
					</div>
				</section>
				<section class='orderGoodsDetails mTop10 padLR12'>
					<div class='orderGoogsPic' :style="{'background':'url('+orderDesc.goodsdesc.pic+') no-repeat','background-size':'contain'}"></div>
					<div class='orderGoodsNameDet' id='orderGoodsNameDet'>{{orderDesc.goodsdesc.sku}}</div>
				</section>
				<section class='orderPrice padLR12'>
					<label class='msgTitle'>支付金额：</label><span id='orderPrice'>{{orderDesc.payprice}}</span>M币
				</section>
				<section class='orderId padLR12'>
					<label class='msgTitle'>订单编号：</label>
					<span id='orderId'>{{orderDesc.orderId}}</span>
				</section>
				<section class='orderTime padLR12'>
					<label class='msgTitle'>下单时间：</label>
					<span id='orderData'>
						{{orderDesc.ordertime}}
					</span>
				</section>
			</article>
		</div>
	</transition>
</template>

<script>
	export default{
		data(){
			return{
				orderDesc:
				{
					"orderstate":{
						"state":true,
						 "msg":'兑换成功'
					},
					"paystate":"已支付",
					"addInfo":{
						"user":"soda",
						"tel":"13888886666",
						"add":"杭州市拱墅区城西银泰写字楼城西银城西银城西银"
					},
					"goodsdesc":{
						"pic":"../static/img/integralGoods.png",
						"name":"iphoneX",
						"sku":"魔幻蓝"
					},
					"payprice":8000,
					"orderId":"083499323Kx",
					"ordertime":"2018-07-25 10:88:33"
				}
				
			}
		}
	}
</script>

<style scoped>
	.recordBd{
		z-index: 10000;
		position: absolute;
		top:0;
		height:100%;
		width:16rem;
		left:50%;
		margin-left:-8rem;
		background: #f4f4f4;
	}
	.record-enter-active, .record-leave-active {
      transition: all .4s linear;
  	}
  	.record-enter{
  	  top:-100%;
  	}
  	 .record-leave-active{
  	 	top:100%;
  	 }
</style>