<template>
  <div class="home wmain">
		    <header class="header flex">
						<el-row>
							<el-col :span="12" class="flex flex-left flex-item">
								<img :src="goback" v-if="backstate" style="height: .5rem;"  v-on:click="prevpage()"/>
								<img :src="crbernaut" v-if="logostate" style="height: .5rem; margin-top:-0.15rem" />
								<img :src="headerimg"  style="height: .5rem" />
								<img :src="search" v-if="searchstate"  style="margin-left: .25rem; height: .5rem"/>
							</el-col>


							<el-col :span="12" class="flex flex-right nav" style="padding-top: .25rem">
									<a :href="right[0].url" class="hundred"></a>
									<router-link :to="right[1].url" class="center" :class="{ active : navstate == 'center'}"></router-link>
									<router-link :to="right[2].url" class="comprehensive" :class="{ active : navstate == 'comprehensive'}"></router-link>
								
							</el-col>
						</el-row>
				</header>
				<div class="flex home-main">
							<transition :name="transitionName">
										<router-view class="child-view"/>
							</transition>
				</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
			crbernaut :config.header.left.crbernaut,
			goback :config.header.left.goback,
			search :config.header.left.search,
			logoImg:config.header.left.logoimg,
			right:config.header.right,
			transitionName: 'slide-left',
    }
  },
  watch:{
    '$route' (to, from) {
       if(to.meta.index >= from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
	computed:{
		navstate(){
			return  this.$store.getters.getNav;
		},
		backstate(){
			return  this.$store.getters.getBack;
		},
		searchstate(){
			return  this.$store.getters.getSearch;
		},
		logostate(){
			return  this.$store.getters.getLogo;
		},
		headerimg(){
			return  this.$store.getters.getHeaderimg;
		}
	},
	beforeCreate(){
			this.$store.dispatch('fetchBack',{data:false})
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
	.home { padding:2% 3%; box-sizing: border-box;}
	.header { height: .6rem; position: relative; z-index: 1000;}
	.header  .el-row { width: 100%; height: .6rem;}
	.header  .el-row .el-col { height:.6rem;}
	.header  .el-row .el-col img.back { height:.5rem}
	.header .nav  a { display: block; width: 1.78rem; height: .585rem; margin:0 .05rem; background-size:100% 100% !important;}
	.header .nav  a.hundred 				{ background: url(nav1); }
	.header .nav  a.hundred:hover 				{ background: url(nav1H); }
	.header .nav  a.hundred.active 				{ background: url(nav1A); }
	.header .nav  a.center 					{ background: url(nav2); }
	.header .nav  a.center:hover  					{ background: url(nav2H); }
	.header .nav  a.center.active 					{ background: url(nav2A); }
	.header .nav  a.comprehensive 	{ background: url(nav3); }
	.header .nav  a.comprehensive:hover  	{ background: url(nav3H); }
	.header .nav  a.comprehensive.active  	{ background: url(nav3A); }
	.home-main { position: absolute; bottom: 0; top:0; left:0; right:0; box-sizing: border-box; padding: 2% 3%; margin-top:.6rem;}
	.item-list img { width: 100%; display: block;}
	.item-title { width: 100%; height: .95rem; background: fcBg; color: fontColor; font-size: fontSize; border-bottom-left-radius: .1rem; border-bottom-right-radius: .1rem;}
	a:hover .item-title { background:fcBgH ; color: fcfff;}
	


.child-view {
  transition: all .8s cubic-bezier(.55,0,.1,1);
}


	.slide-right-leave-active,.slide-left-enter {
		position: absolute;
		opacity: 0;
		transition: all .8s;
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active , .slide-right-enter {
		position: absolute;
		opacity: 0;
		transition: all .8s;
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100%, 0);
	}
</style>

