<template>
	
	<div class="innovation comprehensive-main">
    <el-carousel :autoplay="false" arrow="always" class="btn-one">
      <el-carousel-item v-for="item,index in length" :key="item" >
					
					<el-row  >
							<el-col  :span="8" >
								<router-link :to="list[0].url" v-html="list[0].title" v-bind:style="{ 'background': list[0].bgColor }" class="flex"></router-link>
							</el-col>
							<el-col  :span="8" >		
								<router-link :to="list[1].url" v-html="list[1].title" v-bind:style="{ 'background': list[1].bgColor }" class="flex"></router-link>
					
							</el-col>
							<el-col  :span="8"  class="three-link">								
										 <router-link :to="list[2].url" v-html="list[2].title" v-bind:style="{ 'background': list[2].bgColor }" class="flex"></router-link>
							
											<router-link :to="list[3].url" v-html="list[3].title" v-bind:style="{ 'background': list[3].bgColor }" class="flex"></router-link>
											<router-link :to="list[4].url" v-html="list[4].title" v-bind:style="{ 'background': list[4].bgColor }" class="flex"></router-link>
								
							</el-col>
					</el-row>
					
				
				
      </el-carousel-item>
    </el-carousel>
	</div>
</template>

<script>
export default {
  name: 'innovation',
  data () {
    return {
      list: config.comprehensive.children[0].children,
    }
  },
	beforeCreate(){
			this.$store.dispatch('fetchLeftnav',{data:"innovation"})

	},
	computed:{
			length(){
				return Math.ceil(this.list.length/5)
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
	.innovation a { height: 3.3rem;}
	.innovation .el-carousel__container { height: 3.6rem;}
	.innovation .el-carousel__container a { position: relative; color: fontColor; font-size: 0.3rem; line-height: 0.5rem; border-radius:0.1rem; text-align: center; font-weight: 600;}
	.innovation .el-carousel__container a:hover:before { display: block; width: 100%; height: 100%; border-radius:0.1rem; position: absolute; left:0; top:0; background: rgba(255,255,255,.5); content: '';}
	.innovation .el-carousel__container .three-link  a { height: 1.6rem; box-sizing: border-box;}
	.innovation .el-carousel__container .three-link a:nth-child(2) { width: 48.5%; float: left; margin-top: 0.125rem; }
	.innovation .el-carousel__container .three-link a:nth-child(3) { width: 48.5%; float:right; margin-top: 0.125rem;  }
.innovation .el-carousel__indicators { display: none;}


	.innovation .el-row  {  margin-left:-0.125rem;  margin-right:-0.125rem;}
	.innovation .el-row .el-col { padding-left:.125rem }
</style>

