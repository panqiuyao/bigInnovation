<template>
<div class="video flex">

					<template v-if="worldMap">
						    <a href="javascript:"> 
								<img :src="listData.img"/>
							</a>
					</template>
					<template v-else>
							<router-link :to="listData.url">
								<img :src="listData.img"/>
							</router-link>
					</template>



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
			self.worldMap.doPlayVideo('http://202.91.242.168/video/video'+videourl+'.mp4')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
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
	
	

</style>

