<template>
	
	<div class="personnel comprehensive-main">
		<el-carousel :autoplay="false" arrow="always"  :initial-index="$route.query.page" :loop="false"  class="btn-one"  @change="change">
			
			<el-carousel-item class="is-animating">
				<el-row >
						<el-col  :span="8"  class="item-list">
								<router-link :to="list[0].url">
										<img :src="list[0].img">
										<div class="item-title flex">{{list[0].title}}</div>
								</router-link>
						</el-col>


					<template v-if="worldMap ">

						<el-col  :span="8"  class="item-list">
								<a href="javascript:void" @click="showvideo(list[1].url)">
										<img :src="list[1].img">
										<div class="item-title flex">{{list[1].title}}</div>
								</a>
						</el-col>
					</template>

					<template v-else>

						<el-col  :span="8"  class="item-list">
								<router-link :to="list[1].url">
										<img :src="list[1].img">
										<div class="item-title flex">{{list[1].title}}</div>
								</router-link>
						</el-col>
					</template>

						<el-col  :span="8"  class="item-list">
								<router-link :to="list[2].url">
										<img :src="list[2].img">
										<div class="item-title flex">{{list[2].title}}</div>
								</router-link>
						</el-col>
				</el-row>
			</el-carousel-item>
			
			<el-carousel-item class="is-animating">
				<el-row>
						<el-col  :span="8"  class="item-list">
								<router-link :to="list[3].url">
										<img :src="list[3].img">
										<div class="item-title flex">{{list[3].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="8"  class="item-list">
								<router-link :to="list[4].url">
										<img :src="list[4].img">
										<div class="item-title flex">{{list[4].title}}</div>
								</router-link>
						</el-col>
						<el-col  :span="8"  class="item-list">
						</el-col>
				</el-row>
			</el-carousel-item>
			
			
		</el-carousel>
	</div>
</template>

<script>
export default {
  name: 'personnel',
  data () {
    return {
      list: config.comprehensive.children[2].children,
    }
  },
	beforeCreate(){
		this.$store.dispatch('fetchLeftnav',{data:"personnel"})
	},
	computed:{
		worldMap:() => worldMap
	},
	mounted() {
	},
	methods:{
		change(e){
			var self = this;
			this.$router.push({path: '/home/comprehensive/personnel', query: {page: e}})
			
		},
		showvideo(url){
			var self = this;
			var videourl = url.split('/')[2]
			self.worldMap.doPlayVideo('video'+videourl+'.mp4')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">
	.personnel a { height: 3.3rem;}
	.personnel  .el-row { margin-left:-0.125rem;  margin-right:-0.125rem;}
	.personnel  .item-list { padding-left:0.175rem}
	.personnel .el-carousel__container { height: 3.6rem;}
	.personnel .el-carousel__container a { position: relative; color: fontColor; font-size: 0.3rem; line-height: 0.5rem; border-radius:0.1rem; text-align: center; font-weight: 600;}
	.personnel .el-carousel__container .three-link  a { height: 1.6rem; box-sizing: border-box;}
	.personnel .el-carousel__container .three-link a:nth-child(1) { width: 48.5%; float: left; margin-bottom: 0.125rem; }
	.personnel .el-carousel__container .three-link a:nth-child(2) { width: 48.5%; float:right; margin-bottom: 0.125rem;  }
	.personnel .el-carousel__indicators { display: none;}
	.personnel .item-title { height: .8rem; line-height: .8rem;}
	.personnel .item-list img { height:2.5rem}


	
	
</style>

