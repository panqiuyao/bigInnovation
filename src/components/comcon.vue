<template>
<div class="images">
					
		<template v-if="this.$route.params.id == 'personnel1'" >

				<!--海外交流营-->
					<router-link to="/home/comcon1/personnel1_1/1" class="personnel1"></router-link>
					 <a  class="personnel1" href="javascript:void" @click="showvideo('/videoplay/2')"> 
						<img :src="videoSrc">
					</a>
					<router-link to="/home/comcon1/personnel1_3/1" class="personnel1"></router-link>

					<img :src="imagesSrc" >
		</template>



		<template  v-else>
				
					<template  v-if="num == 1">
							<img :src="imagesSrc" >

					</template>
					<template  v-else>




						  <div class="comconcarousel">
						    <el-carousel height="100%" :autoplay="false" :loop="false" :interval="3000" arrow="always" class="conmain" @change="change">
						      <el-carousel-item v-for="item in imagesSrc" :key="item" class="flex" >
										<img :src="item" width="100%">
						      </el-carousel-item>
						    </el-carousel>
						  </div>

					</template>

			
		</template>


	</div>
</template>

<script>
export default {
  name: 'images',
  data () {
    return {
    	headerid:0,
    	children:false,
    }
  },
  watch:{
  		headerid(){
  			var thisid = this.headerid+1;
			this.$store.dispatch('fetchHeaderimg',{data:config.staticUrl+this.$route.params.id+'header'+thisid+'.png'})

  		}
  },
	computed:{
		worldMap:() => worldMap,
		num(){
			return   this.$route.params.num
		},
		imagesSrc(){
			var self = this;
			if(self.num == 1){

				return   config.staticUrl+this.$route.params.id+'img'+self.num+'.png'
			}else{
				var arr = []
				for(var i = 1; i<=self.num;i++){
						arr.push( config.staticUrl+this.$route.params.id+'img'+i+'.png')
				}
				return arr;
			}
		}
	},
	beforeCreate(){
			
				var self =this;
			switch (self.$route.params.id) {
				case 'personnel3':
							//海高人才营需要搜索
							self.$store.dispatch('fetchSearch',{data:true})
					break;
				default:
							self.$store.dispatch('fetchSearch',{data:false})
					break;
			}

						self.$store.dispatch('fetchBack',{data:true})
						self.$store.dispatch('fetchNav',{data:"comprehensive"})
						self.$store.dispatch('fetchHeaderimg',{data:config.staticUrl+this.$route.params.id+'header'+1+'.png'})
		
						self.$store.dispatch('fetchLogo',{data:false})



	},
	mounted() {
		
	},
	methods:{
		change(i){
				this.headerid = i;
		},
		showvideo(url){
			var self = this;
			var videourl = url.split('/')[2]
			self.worldMap.doPlayVideo('http://202.91.242.168/video/video'+videourl+'.mp4')
		}
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
	
	
.comconcarousel	.conmain { 
position:absolute !important;
padding:0% 4%  !important;
left:0  !important;
right:0  !important;
top:0  !important;
bottom:0  !important;
}

.comconcarousel .el-carousel__indicators { display:none; }


.comconcarousel	.el-carousel__arrow--left  {
 width:.5rem  !important;
 height:.5rem  !important;
 border-radius:0  !important;
 background:url('/static/images/btn-left.png')  !important;
 background-size:100% 100%  !important;
 left:-.6rem  !important;

}
.comconcarousel	.el-carousel__arrow--right  {

 width:.5rem  !important;
 height:.5rem  !important;
 border-radius:0  !important;
 background:url('/static/images/btn-right.png')  !important;
 background-size:100% 100%  !important;
 right:-.6rem  !important;

	
}
.comconcarousel	.el-carousel__arrow--right:hover{

	background-image:url('/static/images/btn-righth.png')  !important
}

.comconcarousel	.el-carousel__arrow--left:hover{

	background-image:url('/static/images/btn-lefth.png')  !important
}

	.comconcarousel	.el-carousel__arrow--left  i,
	.comconcarousel	.el-carousel__arrow--right  i { display:none;}
	.comconcarousel .goback { width:1rem; height:1rem; position:absolute; left:0; top:0; z-index:100}

.personnel1 { position:absolute; width:28%; height:100%; display:block;}
.personnel1:nth-child(1) { left:12%;}
.personnel1:nth-child(2) { left:40%;}
.personnel1:nth-child(3) { left:70%;}
</style>

