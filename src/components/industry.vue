<template>
	
	<div class="industry comprehensive-main">
		
		<el-carousel :autoplay="false" arrow="always" class="btn-one">
			
			
			<el-carousel-item >
					
					
					<div class="flex flex-top">
						<router-link :to="list[0].url" v-html="list[0].title" v-bind:style="{ 'background': list[0].bgColor }" class="flex flex-item"></router-link>
						<router-link :to="list[1].url" v-html="list[1].title" v-bind:style="{ 'background': list[1].bgColor }" class="flex flex-item"></router-link>
						<router-link :to="list[2].url" v-html="list[2].title" v-bind:style="{ 'background': list[2].bgColor }" class="flex flex-item"></router-link>			
						<router-link :to="list[3].url" v-html="list[3].title" v-bind:style="{ 'background': list[3].bgColor }" class="flex flex-item"></router-link>
						<router-link :to="list[4].url" v-html="list[4].title" v-bind:style="{ 'background': list[4].bgColor }" class="flex flex-item"></router-link>
						
				
					</div>
					
					<div class="flex flex-bottom">

						<router-link :to="list[5].url" v-html="list[5].title" v-bind:style="{ 'background': list[5].bgColor }" class="flex flex-item"></router-link>		
						<router-link :to="list[6].url" v-html="list[6].title" v-bind:style="{ 'background': list[6].bgColor }" class="flex  flex-item"></router-link>
						<router-link :to="list[7].url" v-html="list[7].title" v-bind:style="{ 'background': list[7].bgColor }" class="flex  flex-item"></router-link>	


					</div>
					<!--
					<el-row >
							<el-col  :span="8"  class="three-link">								
										<router-link :to="list[0].url" v-html="list[0].title" v-bind:style="{ 'background': list[0].bgColor }" class="flex"></router-link>
										<router-link :to="list[1].url" v-html="list[1].title" v-bind:style="{ 'background': list[1].bgColor }" class="flex"></router-link>
										<router-link :to="list[2].url" v-html="list[2].title" v-bind:style="{ 'background': list[2].bgColor }" class="flex"></router-link>								
							</el-col>
							<el-col  :span="8"  class="three-link">								
										<router-link :to="list[3].url" v-html="list[3].title" v-bind:style="{ 'background': list[3].bgColor }" class="flex"></router-link>
										<router-link :to="list[4].url" v-html="list[4].title" v-bind:style="{ 'background': list[4].bgColor }" class="flex"></router-link>
										<router-link :to="list[5].url" v-html="list[5].title" v-bind:style="{ 'background': list[5].bgColor }" class="flex"></router-link>								
							</el-col>
							<el-col  :span="8"  class="three-link">								
										<router-link :to="list[6].url" v-html="list[6].title" v-bind:style="{ 'background': list[6].bgColor }" class="flex"></router-link>
										<router-link :to="list[7].url" v-html="list[7].title" v-bind:style="{ 'background': list[7].bgColor }" class="flex"></router-link>						
							</el-col>
					
					</el-row>
					-->
				
			</el-carousel-item>
			
			
			<el-carousel-item >
					
					
					<el-row >
							<el-col  :span="8" >								
										<router-link :to="list[8].url" v-html="list[8].title" v-bind:style="{ 'background': list[8].bgColor }" class="flex"></router-link>
							</el-col>
							<el-col  :span="8" >								
										<router-link :to="list[9].url" v-html="list[9].title" v-bind:style="{ 'background': list[9].bgColor }" class="flex"></router-link>
							</el-col>
							<el-col  :span="8" >								
										<router-link :to="list[10].url" v-html="list[10].title" v-bind:style="{ 'background': list[10].bgColor }" class="flex"></router-link>
							</el-col>
					</el-row>
				
			</el-carousel-item>
			
			
		</el-carousel>
	</div>
</template>

<script>
export default {
  name: 'industry',
  data () {
    return {
      list: config.comprehensive.children[1].children,
    }
  },
	beforeCreate(){
						this.$store.dispatch('fetchLeftnav',{data:"industry"})
						
	},
	computed:{
		leftnav(){
			return  this.$store.getters.getLeftnav;
		}
	},
	mounted() {
	},
	methods:{
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
	.btn-one .el-carousel__arrow.el-carousel__arrow--left { left:-.7rem;}
	.industry a { height: 3.3rem;}
	.industry .el-carousel__container { height: 3.6rem;}
	.industry .el-carousel__container a { position: relative; color: fontColor; font-size: 0.3rem; line-height: 0.5rem; border-radius:20px; text-align: center; font-weight: 600;}
	.industry .el-carousel__container a:hover:before { display: block; width: 100%; height: 100%; border-radius:0.1rem; position: absolute; left:0; top:0; background: rgba(255,255,255,.5); content: '';}
	.industry .el-carousel__container .three-link  a { height: 1.6rem; box-sizing: border-box;     overflow: hidden;}
	.industry .el-carousel__container .three-link a:nth-child(1) { width: 48.5%; float: left; margin-bottom: 0.125rem; }
	.industry .el-carousel__container .three-link a:nth-child(2) { width: 48.5%; float:right; margin-bottom: 0.125rem;  }
	.industry .el-carousel__indicators { display: none;}
	.industry .el-row  {  margin-left:-0.125rem;  margin-right:-0.125rem;}
	.industry .el-row .el-col { padding-left:.125rem }
	.industry .flex-top a { height: 1.728rem; box-sizing: border-box;     overflow: hidden;  margin:0 0.0625rem;}
	.industry .flex-bottom  { margin-top:0.125rem;}
	.industry .flex-bottom a { height: 1.728rem; box-sizing: border-box;     overflow: hidden; margin:0 0.0625rem;}


</style>

