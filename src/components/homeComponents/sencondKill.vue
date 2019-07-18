<template>
	<div class='SencondKillbd'>
		<cube-scroll
		  ref="SencondKillscroll"
		  :data="secondKiiLists"
		  direction="horizontal"
		  class="horizontal-scroll-list-wrap">
		  <ul class="list-wrapper">
		    <li v-for="(item,index) in secondKiiLists" :key='index' class="SencondKillbdlist-item">
		    	<img v-lazy='item.showPic' alt=""/>
		    	<p class='secondPrice'>{{item.price | filterPrice('元')}}</p>
		    	<p class='secondQuanlty'>仅剩:{{item.surplus | filterPrice('件')}}</p>
		    </li>
		  </ul>
		</cube-scroll>
	</div>
</template>

<script>
import {Lazyload} from 'mint-ui'
import {Scroll} from 'cube-ui'
export default{
	data(){
		return{
			
		}
	},
	props:{
		secondKiiLists:{
			type:Array
		}
	},
	filters:{
		filterPrice(value,unit){
			return '￥'+value+unit
		}
	},
	created(){
		
	},
	methods:{
		
	}
}
</script>

<style>
	/*scroll 必须样式*/
  .cube-scroll-content{
  	display: inline-block;
  }   
  .list-wrapper{
    white-space: nowrap;
  }
  .SencondKillbdlist-item{
  	display: inline-block;
  }
    
</style>