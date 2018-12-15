<template>
<div class="images">
		

		<img :src="imagesSrc" >

	</div>
</template>

<script>
export default {
  name: 'images',
  data () {
    return {
    }
  },
	computed:{
		imagesSrc(){
			return   config.staticUrl+'images'+this.$route.params.id+'.png'
		}
	},
	beforeCreate(){
			this.$store.dispatch('fetchBack',{data:true})
			this.$store.dispatch('fetchSearch',{data:true})



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
.images {
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
.images img { width: 100%; display: block;}
	
	
	

</style>

