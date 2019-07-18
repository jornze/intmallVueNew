<template>
  <div type="tab-composite-view" title="tab-composite" class='googsDetailbd'>
    <div slot="content">
      <div class='goodsDetailTabbar'>
        <router-link tag='div' class='tabbarIcon' to='/'></router-link>
          <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels" class='goodsDetailTabbarMenu'>
          </cube-tab-bar>
          <div class='McoinDetailed' @click="togshowTopBar()" ref='togShowTopbarBtn'></div>
          <RightBarNav ref='rightBarNav' @hideTopNav="hideTopNavFalse"></RightBarNav>
      </div>
      
      <div class="tab-slide-container">
        <!-- 商品图片 -->
        <!--<div style="width:100%;height:200px;overflow:hidden;" v-show="isone">
                  <Slider></Slider>
        </div>-->

        <cube-slide
          ref="slide"
          :loop="loop"
           :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 商品 -->
          <cube-slide-item class='scrollBd'>
            
            <cube-scroll :options="scrollOptions" >
             <div class='scrollBD'>
                  <article >
                    <section class='goodspicarr' @click="showImagePreview">
                      <img :src="followersData.img" alt="">
                      <span>点击查看更多大图</span>
                    </section>
                    <section class='priceDiv module'>
                      <p>
                        <i>自营</i>万象好乐家儿童保温杯大容量宝宝不锈钢便携饮水男女学生水杯新Q1/Q2(白 DQ2-500ml) 
                      </p>
                      <p>
                        ￥166
                        </p>
                      
                    </section>
                    <section class='goodsSku module' @click="showRightBar('sku')">
                      <p>
                        <span class='moduleLabel'>已选</span>
                        <span>粉1个</span>
                        <span>&gt;</span>
                      </p>
                      <p>
                        <span>推荐</span>
                        <span class='addServer'>增值服务</span>
                      </p>
                    </section>
                    <section class='module goodsSku'>
                      <p @click="showDrawer()">
                        <span class='moduleLabel'>送至</span>
                        <span><i class='iconfont  icon-Imall-dibiao'></i>{{selectedText}}</span>
                        <span>&gt;</span>
                      </p>
                      
                    </section>
                </article>
                <article class='evaluate module'>
                    <section class='evaluateTop'>
                      <p>
                        <span>评价(1000+)</span>
                        <span>好评率<i>99%</i>&gt;</span>

                      </p>
                      
                    </section>
                    <section class='evaluateMan' @click="toOtherModule(2)">
                      <p>
                        <span class='custPic'>
                          <img src="./../../assets/img/1.jpg" alt="">
                        </span>
                        <span>厚***德</span>
                        <span>
                            <cube-rate v-model="value" :disabled="ratedisabled" style="margin-top:20px"></cube-rate>
                        </span>
                      </p>
                      <p>很实惠，质量好，满意</p>
                      <p><span>蓝色</span></p>
                    </section>
                    <section class='evaluateHasPic'>
                        <p  @click="toOtherModule(2)">
                          <span>有图评价(93)</span>
                          <span>&gt;</span>
                        </p>
                        <div class='evaluateHasPicMain'>
                            <ul>
                              <li>
                                  <div class='evaluateHasPicMain-pic-box'>
                                    <img src="https://gfs5.gomein.net.cn/T1muYvB_D_1RCvBVdK_200.jpg" alt="">
                                    <span>2张</span>
                                  </div>
                                  <p class='evaluateName'>g***l</p>
                              </li>
                              <li>
                                  <div class='evaluateHasPicMain-pic-box'>
                                    <img src="https://gfs5.gomein.net.cn/T1muYvB_D_1RCvBVdK_200.jpg" alt="">
                                    <span>2张</span>
                                  </div>
                                  <p class='evaluateName'>g***l</p>
                              </li>
                              <li>
                                  <div class='evaluateHasPicMain-pic-box'>
                                    <img src="https://gfs5.gomein.net.cn/T1muYvB_D_1RCvBVdK_200.jpg" alt="">
                                    <span>2张</span>
                                  </div>
                                  <p class='evaluateName'>g***l</p>
                              </li>
                              <li>
                                  <div class='evaluateHasPicMain-pic-box'>
                                    <img src="https://gfs5.gomein.net.cn/T1muYvB_D_1RCvBVdK_200.jpg" alt="">
                                    <span>2张</span>
                                  </div>
                                  <p class='evaluateName'>g***l</p>
                              </li>
                            </ul>
                        </div>
                    </section>
                  
                </article>
                <section class='toAllDetail module' @click="toOtherModule(1)" >
                      <span>查看更多商品信息</span>
                      <span>&gt;</span>
                </section>
             </div>
              
               
            </cube-scroll>
            
            
            
          </cube-slide-item >
          <!-- 详情 -->
          <cube-slide-item class='scrollBd'>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <div class='scrollBD'>
                  <div class='detailsTop pad20'>
                      <div>
                          <img src="https://gfs17.gomein.net.cn/T1ZmCQBTAv1RCvBVdK_160.jpg?v=20170727" alt="">
                      </div>
                      <div>
                          <p>innisfree 悦诗风吟 薄荷散粉矿物质持久控油定妆丝柔散粉蜜粉5g</p>
                          <p>有货</p>
                      </div>
                  </div>
              </div>
              
            </cube-scroll>
          </cube-slide-item>
          <!-- 评价 -->
          <cube-slide-item class='scrollBd'> 
            <cube-scroll :data="hotData" :options="scrollOptions">
              <div class='scrollBD'>
                  <ul class="list-wrapper">
                    <li v-for="(item, index) in hotData" class="list-item" :key="index">
                      <div class="hot-title">
                        <span class="hot-sequence">{{item.sequence}}</span>
                        <span></span>
                        {{item.label}}
                      </div>
                      <div class="hot-content is-bold is-black">{{item.question}}</div>
                    </li>
                  </ul>
              </div>
              
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
    <!--右侧侧边栏-->
    <RightToLeft ref='rightToleft'>
       <GoodsSku v-if="changeSlot=='sku'?true:false"></GoodsSku>
      <!--<GetGoodsAddr v-if="changeSlot=='addr'?true:false" ref='openAdd'></GetGoodsAddr>-->
    </RightToLeft>
    <!--点击有图评价图片 显示评论内容和几星等级-->
    <div v-if="evaluateText" class='evaluateText'>fafa</div>
    <!--商品详情页底部收藏，下单-->
    <GoodsFoot></GoodsFoot>
    <!--地址选择器-->
     <cube-drawer
        ref="drawer"
        title="请选择"
        :data="data"
        :selected-index="selectedIndex"
        @change="changeHandler"
        @select="selectHandler"
        @cancel="cancelHandler"></cube-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {TabBar,Scroll,Slide,Rate,CascadePicker} from 'cube-ui'
  import { findIndex } from 'cube-ui/src/common/helpers/util'
  import RightToLeft from '../rightToleft'
  import GoodsFoot from './goodsFoot'
  import GetGoodsAddr from './getGoodsAddr'
  import GoodsSku from './goodsSku'
  import { provinceList, cityList, areaList } from '../../assets/js/area' //引入三级地址数据
  import RightBarNav from '../../base/rightBarNav'
  const addressData = provinceList
  addressData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })
  export default {
    data () {
      return {
        istogshowTopBar:false,//点击顶部右侧按钮切换菜单显示
        //地址选择器
         selectedIndex: [],
         selectedText:"请选择地址",//默认没有地址显示‘请选择地址’
        data: [
          provinceList,
          [],
          []
        ],

        changeSlot:'',//右侧弹出边栏加载对应插槽组件
        value:5,//星星数
        ratedisabled:true,
         imgs: [
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'
      ],
      evaluateText:false,//点击评价显示评语
        selectedLabel: '商品',
        disabled: false,
        tabLabels: [{
          label: '商品'
        }, {
          label: '详情'
        }, {
          label: '评价'
        }],
        loop: false,
        autoPlay: false,
        showDots: false,
        slideOptions: {
          listenScroll: true,
          probeType: 3,
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        followersData:
          {
            "img":"https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg"
          },
        recommendData: [
          {
            "question":"tuijian"
          }
        ],
        hotData: [
          {
            'sequence':'rebag',
            "label":'dad',
            "question":'dadadad'
          },
          ]
      }
    },
    created(){
        
    },
    mounted () {
     
     
  },
    methods: {
      //地址picker
      showDrawer() {
      this.$refs.drawer.show()
    },
    changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
      // fake request
      setTimeout(() => {
        let data
        if (index === 0) {
          // procince change, get city data
          data = cityList[item.value]
        } else {
          // city change, get area data
          data = areaList[item.value]
        }
        // refill panel(index + 1) data
        this.$refs.drawer.refill(index + 1, data)
      }, 200)
    },
    selectHandler(selectedVal, selectedIndex, selectedText) {
      /*this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()*/
      this.selectedText=selectedText.slice(1).join(" ");
    },
    cancelHandler() {
      console.log('cancel')
    },
      //点击触发轮播图
      showImagePreview() {
          this.evaluateText=true;
        if (!this.imagePreview) {
          this.imagePreview = this.$createImagePreview({
            imgs: this.imgs,
            onHide: () => {
              this.evaluateText=false;
            }
          })
        }
        this.imagePreview.show()
    },
      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        console.log(current)
        
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      },
      showRightBar(slotName){
        this.$refs.rightToleft.show();
        this.changeSlot=slotName;
      },
      toOtherModule(current){
        this.changePage(current)
      },
      //头部按钮点击显示菜单栏
      togshowTopBar(){
         this.istogshowTopBar = !this.istogshowTopBar;
         if(this.istogshowTopBar){
              this.$refs.rightBarNav.show();  
            }else{
              this.$refs.rightBarNav.hide();  
            }
      },
      hideTopNavFalse(para){
         this.istogshowTopBar=para;//点击其他地方侧导航栏消失
         console.log('hh');
      }
    },
    computed: {
       initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    },
    components: {
      RightToLeft,
      GoodsFoot,
      GetGoodsAddr,
      GoodsSku,
      RightBarNav
    }
  }
</script>
<style scoped>
 @import "../../assets/css/goodsDetail.css";
.scrollBd{
  height:calc(100vh);
  width:100%
}
</style>