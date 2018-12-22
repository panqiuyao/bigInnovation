<template>
<div class="images">
					



		<template v-if="this.$route.params.id == 'personnel1'" >

				<!--海外交流营-->


					<template v-if="worldMap">
						 <a  class="personnel1" href="javascript:void" @click="showvideo('/videoplay/2')"> </a>
					</template>

					<template v-else>
						    <router-link to="/videoplay/2" class="personnel1"> </router-link>
					</template>




		</template>


		<template v-if="this.$route.params.id == 'industry1'" >

				<!--3d协同-->


				<a href="javascript:void()" class="flex" @click="dojoinhangzhou()"><img :src="imagesSrc" ></a>


		</template>


		<template v-else-if="this.$route.params.id == 'center1'" >


						  <div class="comconcarousel">
						    <el-carousel height="100%" :autoplay="false" :loop="false" :interval="3000" arrow="always" class="conmain" @change="change">
						      <el-carousel-item v-for="(item,index) in imagesSrc" :key="item" class="flex" >
										<a href="javascript:void()" class="flex" @click="dojoin(index)"><img :src="item" width="100%"></a>
						      </el-carousel-item>
						    </el-carousel>
						  </div>

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
    	center:[
    		{
    			"id":"IC1528001261375",
    			"name":"宁波东部新城创新中心",
    			"str":'{"name":"宁波创新中心","mark":"70-85-C2-81-D2-9A"}'
    		},
    		{
    			"id":"IC1528001584312",
    			"name":"苏州创新中心",
    			"str":'{"name":"苏州创新中心","mark":"70-85-C2-81-D2-9A"}'
    		}
    	]
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

						self.$store.dispatch('fetchBack',{data:true})
						self.$store.dispatch('fetchNav',{data:"comprehensive"})
						self.$store.dispatch('fetchHeaderimg',{data:config.staticUrl+this.$route.params.id+'header'+1+'.png'})
						self.$store.dispatch('fetchLogo',{data:false})


					switch (self.$route.params.id) {
						case 'personnel3':
									//海高人才营需要搜索
									self.$store.dispatch('fetchSearch',{data:true})
							break;
						case 'center1':
									//部分创新中心		
									self.$store.dispatch('fetchNav',{data:"center"})
				
							break;
						default:
									self.$store.dispatch('fetchSearch',{data:false})
							break;
					}







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
		},
		dojoin(index){
			var self = this;
			try {
				self.worldMap.doJoin(self.center[index].id,self.center[index].name,self.center[index].str);

			} catch(e) {
				// statements
				console.log(e);
			}
			

		},
		dojoinhangzhou(){

			var self = this;
			try {
				self.worldMap.doJoin('IC1521620094998','杭州创新中心','{"name":"杭州创新中心","mark":"70-85-C2-81-D2-9A"}');

			} catch(e) {
				// statements
				console.log(e);
			}
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

.personnel1 {     position: absolute;
    width: 20%;
    height: 50%;
    left: 30%;
    top: 10%;
    display: block;}


</style>

