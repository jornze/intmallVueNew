<template>
	<div type="scroll-tab-view" title="ScrollTab">
    <div slot="content">
      <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
      <div class="right-panel">
        <cube-scroll ref="scroll">
          <ul>
            <li v-for="(hero, index) in scrollData" :key="index">
              <img :src="hero.avatar" alt="">
              <span>{{hero.name}}</span>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
	import {Scroll,TabBar} from 'cube-ui'
    import * as DATAS from '@/assets/js/tab-bar.js'
	 const DATA_MAP = {
    '全部': DATAS.ALL_HEROES,
    '近战': DATAS.MELEE_HEROES,
    '远程': DATAS.REMOTE_HEROES,
    '辅助': DATAS.SUPPORT_HEROES,
    '法师': DATAS.MAGIC_HEROES,
    '打野': DATAS.JUNGLE_HEROES,
    '坦克': DATAS.TANK_HEROES,
    '隐身': DATAS.INVISIBLE_HEROES,
    '后期': DATAS.CARRY_HEROES,
    '闪烁': DATAS.BLINK_HEROES,
    '爆发': DATAS.HIGH_DAMAGE_HEROES,
    '召唤': DATAS.INVOKE_HEROES,
    '眩晕': DATAS.DIZZY_HEROES,
    '治疗': DATAS.HEALER_HEROES
  }
  const genTabLabels = Object.keys(DATA_MAP).map(label => ({
    label
  }))
  export default {
    data () {
      return {
        selectedLabel: '全部',
        scrollData: [],
        tabs: genTabLabels
      }
    },
    created () {
      this.scrollData = DATA_MAP[this.selectedLabel]
    },
    methods: {
      changeHandler (label) {
        this.scrollData = DATA_MAP[label]
        this.$nextTick(() => {
          // reset better-scroll'postion
          this.$refs.scroll.scrollTo(0, 0)
          // you need to caculate scroll-content height when your dom has changed in nextTick
          this.$refs.scroll.refresh()
        })
      }
    },
    components: {
      
    },
    watch: {
      selectedLabel (newV) {
        console.log(newV)
      }
    }
  }
</script>

<style>
	.cube-scroll-list-wrapper .cube-tab-bar{
		flex-wrap: wrap;
		display: block!important;
	}
      .cube-scroll-content{
      	width:100%
      }
      .cube-tab{
      	width: 100%;
        flex-basis: unset;
        height:2.2rem;
        line-height: 2.2rem;
        font-size:0.58rem;
        color: #fff;
        transition: all .3s ease-in;
        border-bottom: 0.05rem solid #ddd;
      }
        
        .cube-tab_active{
         color: #fff;
          font-size: 0.6rem;
          background-color: #F0F0F0;
        }
          
  .left-panel{
  	position: absolute;
    top: 0.2rem;
    left: 0;
    bottom: 0;
    width: 3.6rem;
    background-color: #fff;
  }
    
  .right-panel{
  	position: absolute;
    top: 0.2rem;
    left: 3.6rem;
    right: 0;
    bottom: 0;
    background-color: #171819;
  }
    
   .right-panel li{
    	height: 4rem;
      display: flex;
      align-items: center;
      background-color: #171819;
     }
     .right-panel li img{
      	width:4rem;
        margin: 0 0.2rem 0 0.4rem;
        border: 1px solid #ff9f38;
        border-radius: 3px;
        box-shadow: 0 1px 5px 0 #000;
      }
      	
        
     .right-panel li span{
     	
        color: #db8931;
    }
      
</style>