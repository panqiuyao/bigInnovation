<template>
	
	<div class="comprehensive">
		<div class="comp-title" >{{title}}</div>
		<el-row  :gutter="0">
				<el-col  :span="4"  class="left-nav">
					 <template  v-for="item in list">
						 <router-link :to="item.url" :class="{ active : leftnav == item.name }">{{item.title}}</router-link>
					 </template>
					
				</el-col>
				<el-col  :span="20"  class="right-nav" >
					
					<div class="nav-right">
							<transition :name="transitionName">
										<router-view class="childs-view"/>
							</transition>
					</div>
							
				</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: 'comprehensive',
  data () {
    return {
      title: config.comprehensive.title,
      list: config.comprehensive.children,
			transitionName: 'slide-top',
    }
  },
	beforeCreate(){

		
						this.$store.dispatch('fetchBack',{data:false})
						this.$store.dispatch('fetchNav',{data:"comprehensive"})


			this.$store.dispatch('fetchBack',{data:false}),
			this.$store.dispatch('fetchHeaderimg',{data:config.header.left.logoimg})
			this.$store.dispatch('fetchSearch',{data:false})
			this.$store.dispatch('fetchLogo',{data:true})
						
	},
	computed:{
		leftnav(){
			return  this.$store.getters.getLeftnav;
		}
	},
	mounted() {
	},
  watch:{
    '$route' (to, from) {
       if(to.meta.index >= from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-top';
      }else{
        this.transitionName = 'slide-bottom';
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
	.comprehensive      { width: 100%;}
	.comprehensive .el-row { width: 100%; margin-top: .25rem;}
	.left-nav   a { display: block; width: 2.25rem; height: 0.7rem; background: fcBg; 
	 border-radius:0.7rem;
	 margin: 0.12rem 0;
	 border:0.025rem solid fcBgB;
	 color: fontColor;
	 font-size: 0.25rem;
	 text-align: center;
	 line-height: 0.7rem;
	  font-weight: bold;
	}
	.comp-title { color: fontColor1; 
    font-size: 0.3rem;
    top: 0.4rem;
    position: absolute; font-weight: 600;
		opacity: 1;
		transition: all .5s;
		display: block;
		}
		
		.slide-left-enter-to .comp-title,
		.slide-right-enter-to .comp-title,
		{  opacity: 0;}
		
		.slide-left-leave-to .comp-title,
		.slide-right-leave-to .comp-title
		{  opacity: 0; display: none;}
		
		
	.left-nav   a:hover { background: fcBgH; color: fcfff;}
	.left-nav   a.active {background:fcBgA;  border: 0.025rem solid rgba(48,84,135,0.35); }
	.nav-right { height: 3.625rem; position: relative; top:-0.125rem;     }
	.nav-right .el-carousel {     padding: 0 0.55rem 0 1.0rem;box-sizing: border-box;}
	.btn-one  .el-carousel__arrow { width: 0.575rem; height: 0.575rem; background-color:rgba(0,0,0,.1)}
	.btn-one  .el-carousel__arrow:hover { background: fcBgH;}
	.btn-one  .el-carousel__arrow i { font-size: 0.3rem;}
	.btn-one  .el-carousel__arrow.el-carousel__arrow--left  { left: -0.75rem;}
	.btn-one  .el-carousel__arrow.el-carousel__arrow--right  { right: -0.55rem;}
	.left-nav { width: 13.5%;}
	.right-nav { width: 86.5%;}
	
	
	.childs-view {
	  transition: all .8s cubic-bezier(.55,0,.1,1);
	}
	
	
		.slide-bottom-leave-active,.slide-top-enter {
			    width: 100%;
			position: absolute;
			opacity: 0;
			transition: all .8s;
			transform: translate(0, 100%) ;
		}
		
		.slide-top-leave-active , .slide-bottom-enter {
			    width: 100%;
			position: absolute;
			opacity: 0;
			transition: all .8s;
			transform: translate(0, -100%) ;
		}
		
		
</style>

