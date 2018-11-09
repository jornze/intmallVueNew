<template>
	<transition name='taskcenter'>
		<div class='taskcenter' style='font-size: 16px;'>
			<siginTips ></siginTips>
			<getMcoinframe ref='getMwindow' :Mnm='getMnm'></getMcoinframe>
			<scroll class='taskscroll'>
				<div>					
				<article class='taskCenterBanner'>
					<header class='header hearTopTansp'>
						<router-link tag='a' class='backPre' to='/'></router-link>
						任务中心
						<router-link tag='a' class='McoinDetailed' to='reciveR'></router-link>
					</header>
					<section class='taskCenterBannerContent'>
						<div class='mCoinIcon'></div>
						<p class='myMcoin'>我的M币</p>
						<p class='myMcoinNm'>{{getallm}}</p>
						<p class='todayGetMnm'>
							今日已得：<span id='getMnm'>666</span>
						</p>
					</section>
					<section class='marketAddReward'>
						<div class='marketaotu market'>
							<a href=""><i></i><span>M币商场</span></a>
						</div>
						<div class='marketAddRewardLine'></div>
						<div class='marketaotu Reward'>
							<a href=""><i></i><span>转盘抽奖</span></a>
						</div>
					</section>
				</article>
				<marqlist></marqlist>
				<article class='main'>
					<section class='newbieTask mainCom'>
						<div class='newbieTaskHead'>
							<span class='newbieTaskTit'>新手任务<i></i></span>
							<span id='newbieTaskStatus' class='newbieTaskHeadGetM' v-if='!novicetaskstate'>进行中</span>
							<span  class='newbieTaskHeadGetM youCanGet' v-if="!novicetask.isget && novicetaskstate" @click="getM(1000,'task')">领取</span>
							<span  class='newbieTaskHeadGetM CanGeted' v-if='novicetask.isget' @click="geted('您已领取新手任务奖励')">已领取</span>
						</div>
						<p class='newbieTaskExplain'>完成以下任务获得1000M币</p>
						<div class='newbieTaskList'>
							<p class='thumbsUp'>1.点赞一次<span id='thumbsUp' class='flRtSpan'>{{this.novicetask.thumbsup}}/1</span></p>
							<p class='comment'>2.评论一次<span id='comment' class='flRtSpan'>{{this.novicetask.comment}}/1</span></p>
							<p class='browse'>3.浏览30条视频<span id='browse' class='flRtSpan'>{{this.novicetask.read}}/30</span></p>
							<p class='Forward'>4.转发1次<span id='Forward' class='flRtSpan'>{{this.novicetask.repeat}}/1</span></p>
							<p class='ContLand'>5.连续登陆2天<span id='ContLand' class='flRtSpan'>{{this.novicetask.contiloading}}/2</span></p>
						</div>
					</section>
					<section class='signIn mainCom'>
						<div class='newbieTaskHead'>
							<span class='newbieTaskTit'>签到<i></i></span>
							<span id='signInStatus' class='newbieTaskHeadGetM youCanGet' @click="getM(siginData.rewardnm,'sigin')" v-if='!siginData.isgetreward'>领取</span>
							<span id='signInStatus' class='newbieTaskHeadGetM CanGeted' v-else @click="geted('今日签到奖励已领取，明天再来哦')">已领取</span>
						</div>
						<p class='newbieTaskExplain'>
							你已经连续登陆<span id='alreadyDay'>5</span>天，今日已得<span id='signInGetM'>10</span>M币，
							明日登陆可得<span id='canGetM'>20</span>M币
						</p>
						<div class='signInball'>
							
						</div>
					</section>
					<section class='dayTask mainCom'>
						<div class='newbieTaskHead'>
							<span class='newbieTaskTit'>每日任务</span>	
						</div>
						<div class='dayTaskList' style='margin-top: 0.17rem;'>
							<div class='dayTaskListIcon'>
								<p>X<span>30</span></p>
							</div>
							<div class='dayTaskListMsg'>
								<p><span class='dayTaskListMsgTit'>评论<i></i></span><span id='dayTaskComment' class='youCanGet'>领取</span></p>
								<p>每日评论<span>3</span>个视频，每日可得<span id=''>30</span>M币</p>
							</div>
						</div>
						<div class='dayTaskList'>
							<div class='dayTaskListIcon'>
								<p>X<span>50</span></p>
							</div>
							<div class='dayTaskListMsg'>
								<p><span class='dayTaskListMsgTit'>点赞<i></i></span><span id='dayTaskthumbsUp'>0/3</span></p>
								<p>每日点赞<span>3</span>个视频，每日可得<span id=''>50</span>M币</p>
							</div>
						</div>
						<div class='dayTaskList'>
							<div class='dayTaskListIcon'>
								<p>X<span>100</span></p>
							</div>
							<div class='dayTaskListMsg'>
								<p><span class='dayTaskListMsgTit'> 分享视频<i></i></span><span id='dayTaskShareVideo'>0/3</span></p>
								<p>每日分享<span>10</span>个视频，每日可得<span id=''>50</span>M币</p>
							</div>
						</div>
					</section>
					<section class='videoReward mainCom'>
						<div class='newbieTaskHead'>
							<span class='newbieTaskTit'>优质视频奖励<i></i></span>
							<span id='newbieTaskStatus' class='newbieTaskHeadGetM'>领取<span class='videoGet'>600</span>M币</span>
						</div>
						<p class='newbieTaskExplain'>昨日已获得：<span class='videoGet'>600</span>M币</p>
						<div class='videoRewardCondition'>
							<p>1.发布作品收获他人点赞，每得到1人点赞，奖励视频做着<span id='releaseReward'></span>M币</p>
							<p>2.每天08:00更新昨日获得M币奖励</p>
						</div>
					</section>
					<section class='InvitationFriends mainCom'>
						<div class='newbieTaskHead'>
							<span class='newbieTaskTit'>邀请奖励<i></i></span>
						</div>
						<div class='videoRewardCondition'>
							<p>1.每成功邀请一个新用户，即可获得<span id='InvitationRewardOne'>xx</span>M币，被
							邀请者完成新手任务，邀请者再得到<span id='InvitationRewardTwo'>xx</span>M币</p>
							<p>2.邀请好友越多奖励越多</p>
						</div>
						<div class='goInvitationFriends'>邀请好友</div>
					</section>
				</article>
				<div class='taskCenterFoot'>
					<p>M币活动说明</p>
					<p>M币相关活动和APPLE.INC无关</p>
					<p>
						M币相关活动最终解释权归MOKA所有
					</p>
				</div>
				</div>
			</scroll>
			
		</div>
	</transition>
</template>

<script>
	import marqlist from './marqlist'
	import scroll from '@/base/betterScroll/scroll'
	import siginTips from '@/components/siginTips'
	import getMcoinframe from '@/components/getMcoinframe'
	import {mapGetters} from 'vuex'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				getMnm:'',
				novicetask:{
					"thumbsup":1,
					"comment":1,
					"read":31,
					"repeat":2,
					"contiloading":2,
					"isget":false
				},
				siginData:{
					"sigined":5,
					"rewardnm":66,
					"isgetreward":false
				}
			}
		},
		mounted(){
			
		},
		components:{
			siginTips,
			getMcoinframe,
			scroll,
			marqlist
		},
		computed:{
			...mapGetters([
				'getallm'
			]),
			novicetaskstate(){
				return this.novicetask.thumbsup>=1 && this.novicetask.comment>=1 &&
				 this.novicetask.read>=30 && this.novicetask.repeat>=1 && this.novicetask.contiloading>=2
			}
		},
		methods:{
			getM(nm,type){
				this.getMnm=nm;
				this.$refs.getMwindow.show();
				setTimeout(()=>{
					this.$refs.getMwindow.hide();
					if(type=='task'){
						this.novicetask.isget=true;
					}else if(type=='sigin'){
						this.siginData.isgetreward=true
					}
				},1000);
				
			},
			geted(tipsmsg){
				Toast(tipsmsg);
			}
		}
	}
</script>

<style scoped>
	.CanGeted{
		background: #eee;
		color:#fff;
		border:1px solid #eee;
	}
	.taskcenter{
		/*height:auto;
	    overflow: hidden;*/
	}
	.taskscroll{
		position: absolute;
	    width: 100%;
	    top:0;
	    bottom: 10px;
	    height: 100%;
	}
	.taskcenter-enter-active, .taskcenter-leave-active{
		transition:all .12s linear;
	}
	.taskcenter-enter, .taskcenter-leave-active{
		opacity: 0;
	}
</style>