<template>
  <div class="start wmain">
    <el-carousel height="100%" :interval="3000" arrow="never" class="wmain" @change="change">
      <el-carousel-item v-for="item in start" :key="item" >
				<router-link :to="item.url"><img :src="item.img" width="100%" height="100%"></router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      start: config.start,
			thisIndex:0,
    }
  },
	watch:{
		thisIndex(){
			 if(this.thisIndex == 7){
			  window.location.href =  config.mapsUrl
			 }
		}
	},
	methods:{
		change(e){
			var self = this;
			self.thisIndex++;
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
	.start .el-carousel__indicators { display: none;}
</style>

