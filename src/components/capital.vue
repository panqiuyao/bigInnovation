<template>
<div class="capital comprehensive-main">
		<el-carousel :autoplay="false" arrow="never" class="btn-one">
			
			<el-carousel-item >
				<el-row>
						<el-col  :span="5"  class="item-list">
								<router-link :to="list[0].url">
										<img :src="list[0].img">
										<div class="item-title flex">{{list[0].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="8"  class="item-list">
								<router-link :to="list[1].url">
										<img :src="list[1].img">
										<div class="item-title flex">{{list[1].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="5"  class="item-list">
								<router-link :to="list[2].url">
										<img :src="list[2].img">
										<div class="item-title flex">{{list[2].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="5"  class="item-list item-two">
								<router-link :to="list[3].url">
										<img :src="list[3].img">
										<div class="item-title flex">{{list[3].title}}</div>
								</router-link>
								<router-link :to="list[4].url">
										<img :src="list[4].img">
										<div class="item-title flex">{{list[4].title}}</div>
								</router-link>
						</el-col>
				</el-row>
			</el-carousel-item>
			
			
			<el-carousel-item >
				<el-row>
						<el-col  :span="5"  class="item-list">
								<router-link :to="list[0].url">
										<img :src="list[0].img">
										<div class="item-title flex">{{list[0].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="8"  class="item-list">
								<router-link :to="list[1].url">
										<img :src="list[1].img">
										<div class="item-title flex">{{list[1].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="5"  class="item-list">
								<router-link :to="list[2].url">
										<img :src="list[2].img">
										<div class="item-title flex">{{list[2].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="5"  class="item-list item-two">
								<router-link :to="list[3].url">
										<img :src="list[3].img">
										<div class="item-title flex">{{list[3].title}}</div>
								</router-link>
								<router-link :to="list[4].url">
										<img :src="list[4].img">
										<div class="item-title flex">{{list[4].title}}</div>
								</router-link>
						</el-col>
				</el-row>
			</el-carousel-item>
			
			
		</el-carousel>
	</div>
</template>

<script>
export default {
  name: 'capital',
  data () {
    return {
      list: config.comprehensive.children[3].children,
    }
  },
	beforeCreate(){
						this.$store.dispatch('fetchLeftnav',{data:"capital"})
						
	},
	computed:{
	},
	mounted() {
	},
	methods:{
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
	.capital a { height: 3.15rem;}
	.capital .el-carousel__container { height: 3.6rem;}
	.capital .el-carousel__container a { position: relative; color: fontColor; font-size: 0.3rem; line-height: 0.5rem; border-radius:0.1rem; text-align: center; font-weight: 600;}
	.capital .el-col-5 { width: 22.8%;}
	.capital .el-col-8 { width: 31.6%;}
	.capital .item-title { height: 0.85rem; line-height: 0.85rem;}
	.capital .item-two  a { height: 1.55rem; position: relative;}
	.capital .item-two  a:nth-child(2) {  margin-top: 0.2rem;}
	.capital .item-two .item-title { background: none; position: absolute; left: 0; top:0; bottom: 0; right: 0; width: 100%; height: 100%;}
	.capital .item-two .item-title:hover { background: none;}
	.capital .el-carousel__indicators { display: none;}
	.capital .item-title { height: 1.05rem; line-height: 1.05rem;}
	
	
	.capital .item-title { height: .8rem; line-height: .8rem;}
	
	.capital .item-list img { height:2.5rem}
	.capital .item-list.item-two  img { height:1.55rem;}
	.capital  .el-row { margin-left:-0.125rem;  margin-right:-0.125rem;}
	.capital  .item-list { padding-left:0.175rem; padding-right:0;}

</style>

