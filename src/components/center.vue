<template>
		
  <el-row  :gutter="0">
			<el-col  :span="8"  class="item-list" v-for="(item,index) in list" :key="item.url">
					<template v-if="worldMap && item.url.indexOf('videoplay') > 0">
						    <a href="javascript:" @click="showvideo(item.url)"> 
									<img :src="item.img">
									<div class="item-title flex cententtitle">{{item.title}}</div>
							</a>
					</template>

					<template v-else>
						    <router-link :to="item.url"> 
									<img :src="item.img">
									<div class="item-title flex cententtitle">{{item.title}}</div>
							</router-link>
					</template>


				
						
			</el-col>
  </el-row>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      list: config.center
    }
  },
	beforeCreate(){
			this.$store.dispatch('fetchBack',{data:false}),
			this.$store.dispatch('fetchNav',{data:"center"})
			this.$store.dispatch('fetchHeaderimg',{data:config.header.left.logoimg})
			this.$store.dispatch('fetchSearch',{data:false})
			this.$store.dispatch('fetchLogo',{data:true})
	},
	mounted(){

	},
	computed:{
		worldMap:() => worldMap
		
	},
	methods:{
		change(e){
			var self = this;
			self.thisIndex++;
			
		},
		showvideo(url){
			var self = this;
			var videourl = url.split('/')[2]
			self.worldMap.doPlayVideo(config.videoPath[videourl][this.$store.getters.getScreen])
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
	.el-row .item-list { padding:0 0.175rem}
	.cententtitle { font-weight:600;}
	
</style>

