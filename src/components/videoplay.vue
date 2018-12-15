<template>
<div class="videoplay">
				
				<span v-on:click="prevpage()" class="goback"></span>

				<video src="http://202.91.242.168/video/video.mp4" controls="controls" width="100%" autoplay="autoplay"></video>

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
		}
	},
	beforeCreate(){
			
			
			this.$store.dispatch('fetchBack',{data:true})
			this.$store.dispatch('fetchSearch',{data:false})
			this.$store.dispatch('fetchLogo',{data:false})

	},
	mounted() {
	},
	methods:{
		prevpage(){
			this.$router.go(-1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
.videoplay {
	    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
        display: flex;
    justify-content: center;
    align-items: center;
	
}
.videoplay img { width: 100%; display: block;}
	
	
	.videoplay .goback { width:1rem; height:1rem; position:absolute; left:0; top:0; z-index:100}

</style>
