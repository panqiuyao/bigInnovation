<template>
<div class="video flex">
		<router-link to="/videoplay/1"><img :src="videoSrc"></router-link>

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


			this.$store.dispatch('fetchHeaderimg',{data:config.header.left.logoimg})
			this.$store.dispatch('fetchLogo',{data:false})

	},
	mounted() {
	},
	methods:{
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
    margin-top: 0.6rem;
        display: flex;
    justify-content: center;
    align-items: center;
	
}
.video img { width: 100%; display: block;}
	.video a { height:auto;}
	
	

</style>

