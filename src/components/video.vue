<template>
<div class="video flex">
				
					<!--<template v-if="worldMap">
						    <a href="javascript:"> 
								<img :src="listData.img"/>
							</a>
					</template>
				-->
							<div class="videoimgmian">
						
								<template v-for="item,index in listData.url">
									<template v-if="item">
										<template v-if="item.indexOf('videoplay') >= 0">
											
												<template v-if="worldMap">
													    <a href="javascript:" @click="showvideo(item)" :class="'videolink'+index"> 
														</a>
												</template>
												<template v-else>
														<router-link :to="item"   :class="'videolink'+index"></router-link>
												</template>
										</template>
										<template v-else-if="item.indexOf('http') >= 0">
											
												<template v-if="worldMap">
													    <a href="javascript:" :class="'videolink'+index"  @click="worldMap.doShell(item)" > 
														</a>
												</template>
												<template v-else>
													<a :href="item"  :class="'videolink'+index" target="_blank"></a>
												</template>

										</template>
										<template v-else>
											
											<router-link :to="item"  :class="'videolink'+index"></router-link>

										</template>
									</template>

								</template>
								<img :src="listData.img"/>
								
							</div>



	</div>
</template>

<script>
export default {
  name: 'capital',
  data () {
    return {
    }
  },
	computed:{
		videoSrc(){
			return   config.staticUrl+'video'+this.$route.params.id+'.png'
		},
		listData(){
			var self = this;
			return   configRouter.video[self.$route.params.id]
			
		},
		worldMap:() => worldMap
	},
	created(){
		var self =this;
		self.$store.dispatch('fetchBack',{data:configRouter.video[this.$route.params.id].back})
		self.$store.dispatch('fetchNav',{data:configRouter.video[this.$route.params.id].rightNav})
		self.$store.dispatch('fetchHeaderimg',{data:configRouter.video[this.$route.params.id].headerImg})
		self.$store.dispatch('fetchLogo',{data:configRouter.video[this.$route.params.id].logo})
		self.$store.dispatch('fetchSearch',{data:configRouter.video[this.$route.params.id].search})

	},
	mounted() {
	},
	methods:{
		showvideo(url){
			var self = this;
			var videourl = url.split('/')[2]
			self.worldMap.doPlayVideo('video'+videourl+'.mp4')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" type="">
.video {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 2% 3%;
    display: flex;
    justify-content: center;
    align-items: center;
	
}
.video img { width: 100%; display: block;}
.video a { height:auto;}
.videoimgmian {  position: relative; }
.videoimgmian a { position: absolute; }
.videoimgmian a.videolink0 { width: 37%; height: 100%;  left:24.5%;}
.videoimgmian a.videolink1 { width: 18.5%; height: 48%; left:62.5%;}
.videoimgmian a.videolink2 { width: 18.5%; height: 48%; left:81.5%;}
.videoimgmian a.videolink3 { width: 18.5%; height: 48%; left:62.5%; top:52%;}
.videoimgmian a.videolink4 { width: 18.5%; height: 48%; left:81.5%; top:52%;}

	
	

</style>

