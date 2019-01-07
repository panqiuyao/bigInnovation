<template>
  <div class="start wmain">


  	 <div class="swiper-container wmain">
	    <div class="swiper-wrapper">

 			<div class="swiper-slide blue-slide" v-for="item in start" :key="item" >
				<router-link :to="item.url"><img :src="item.img" width="100%" height="100%"></router-link>
      		</div>
	  </div>
	</div>


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
			 if(this.thisIndex == 2){
			  window.location.href =  config.mapsUrl
			 }
		}
	},
	mounted(){
			var self = this;
			   var mySwiper = new Swiper('.swiper-container',{
			    	
				  autoplay: {
				    delay: 3000,//1秒切换一次
				  },
			       loop: true, // 循环模式选项
			       on: {
						slideChangeTransitionStart: function(){
							if(this.activeIndex == 4){
						      self.thisIndex++;
							}
					  	}
					 }
				})
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

