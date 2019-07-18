<template>
	<!--我的-->
	<section class='mybox'>
		<header class='header headerTopBgR'>
				<router-link tag='a' class='backPre' to='/'></router-link>
				我的ZQ
				<a class='McoinDetailed'></a>
		</header>
		<div class='myState'>
			<cube-upload
			  ref="upload"
			  v-model="files"
			  :action="action"
			  @files-added="addedHandler"
			  @file-error="errHandler">
			  <div class="clear-fix">
			    <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
			    <cube-upload-btn :multiple="false" >
			      	<div class='myHead mypubStyle'>
						<span class='myHeadLable label'>头像</span>
						<span class='myHeadPic'>
							<img src="../../assets/img/1.jpg" alt="" />
						</span>
					</div>
			    </cube-upload-btn>
			  </div>
			</cube-upload>
			<div class='myNick mypubStyle'  @click="editNick">
				<span class='myNickLable label'>昵称</span>
				<span class='myNickName'>大白</span>
			</div>
			<div class='mySex mypubStyle' @click="showPickerStyle">
				<span class='mySexLable label'>性别</span>
				<span class='mySexType'>男</span>
			</div>
			<div class='myBirthday mypubStyle label' @click="showFormatPicker">
				<span class='myBirthdayLable'>生日</span>
				<span class='myBirthdayDate'>2018-11-29</span>
			</div>
		</div>
		<router-link  class='myState mypubStyle' tag='div' to='addlist2'>
			<p>我的地址</p>
		</router-link>
		<div class='myState mypubStyle'>
			<p>我的收藏</p>
		</div>
	</section>
</template>

<script>
	import {Upload,ActionSheet,DatePicker,Dialog} from 'cube-ui'
	export default {
  data() {
    return {
      action: '//jsonplaceholder.typicode.com/photos/',
      files: []
    }
  },
  created(){
  	
  },
  mounted(){
  	
  },
  methods: {
  	//上传头像
    addedHandler() {
      const file = this.files[0]
      file && this.$refs.upload.removeFile(file)
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: 'warn',
        txt: 'Upload fail',
        time: 1000
      }).show()
    },
    //上传头像
    
    //编辑昵称
     editNick() {
      this.dialog = this.$createDialog({
        type: 'prompt',
        title: '昵称编辑',
        prompt: {
          value: '',
          placeholder: '昵称'
        },
        onConfirm: (e, promptValue) => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: `您的昵称是: ${promptValue || ''}`
          }).show()
        }
      }).show()
    },
    //选择性别
     showPickerStyle() {
      this.$createActionSheet({
        title: '请选择性别',
        pickerStyle: true,
        data: [
          {
            content: '男'
          },
          {
            content: '女'
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `性别:${item.content}`,
            type: 'correct',
            time: 1000
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            txt: `未选择!`,
            type: 'warn',
            time: 1000
          }).show()
        }
      }).show()
    },
    
    //生日选择
     showFormatPicker() {
      if (!this.formatPicker) {
        this.formatPicker = this.$createDatePicker({
          title: '请选择生日',
          min: new Date(1990, 1, 1),
          max: new Date(2030, 9, 20),
          value: new Date(),
          format: {
            year: 'YYYY年',
            month: 'MM月',
            date: ' D 日'
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.formatPicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `您的生日是:${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: '未选择！',
        time: 1000
      }).show()
    }
  }
}
</script>

<style>
</style>