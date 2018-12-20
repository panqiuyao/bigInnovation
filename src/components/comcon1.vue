<template>
<div class="images">
					
		<template v-if="this.$route.params.id == 'capital4'">
				<!--小微金融-->
				<router-link to="/home/comcon/capital4_1/1"  class="flex"><img :src="imagesSrc" v-if="num == 1" ></router-link>

		</template>
		<template  v-else>
				
					<template  v-if="num == 1">
							<img :src="imagesSrc" >

					</template>
					<template  v-else>




						  <div class="comconcarousel">
						    <el-carousel height="100%" :autoplay="false" :interval="3000" arrow="always" class="conmain" @change="change">
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
position:absolute;
left:3%;
right:3%;
top:3%;
bottom:3%;
}

.comconcarousel .el-carousel__indicators { display:none; }

.comconcarousel	.el-carousel__arrow--left  {

	    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    background:none;
}
.comconcarousel	.el-carousel__arrow--right  {

	    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    background:none;
}

	.comconcarousel	.el-carousel__arrow--left  i,
	.comconcarousel	.el-carousel__arrow--right  i { display:none;}
	.comconcarousel .goback { width:1rem; height:1rem; position:absolute; left:0; top:0; z-index:100}

</style>

