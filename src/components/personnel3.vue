<template>
	<div class="flex personnel3">

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
	
	},
	beforeCreate(){
			this.$store.dispatch('fetchBack',{data:true})
			this.$store.dispatch('fetchSearch',{data:true})
			this.$store.dispatch('fetchNav',{data:"comprehensive"})
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

.personnel3 {

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
  .personnel3 .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    margin: 0;
  }
  
  .personnel3 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .personnel3 .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
	

</style>

