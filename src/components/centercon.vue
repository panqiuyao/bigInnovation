<template>
<div class="centercon">
		<template  v-if="num == 1">
				<img :src="imagesSrc" >

		</template>
		<template  v-else>

				<span v-on:click="prevpage()" class="goback"></span>



			  <div class="start wmain centercon">
			    <el-carousel height="100%" :autoplay="false" :interval="3000" arrow="always" class="wmain" @change="change">
			      <el-carousel-item v-for="item in imagesSrc" :key="item" >
							<img :src="item" width="100%" height="100%">
			      </el-carousel-item>
			    </el-carousel>
			  </div>

		</template>


	</div>
</template>

<script>
export default {
  name: 'centercon',
  data () {
    return {
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
						arr.push( config.staticUrl+this.$route.params.id+'_'+i+'.jpg')
				}
				return arr;
			}
		}
	},
	beforeCreate(){
			
			this.$store.dispatch('fetchBack',{data:true})
			this.$store.dispatch('fetchNav',{data:"center"})
			this.$store.dispatch('fetchSearch',{data:false})
			this.$store.dispatch('fetchLogo',{data:false})


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
.centercon {
	    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin-top: 0;    
    display: flex;
    justify-content: center;
    align-items: center;
	
}
.centercon .el-carousel__indicators { display:none; }
.centercon img { width: 100%; display: block; }
.centercon	.el-carousel__arrow--left  {

	    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    background:none;
}
.centercon	.el-carousel__arrow--right  {

	    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    background:none;
}

	.centercon	.el-carousel__arrow--left  i,
	.centercon	.el-carousel__arrow--right  i { display:none;}
	.centercon .goback { width:1rem; height:1rem; position:absolute; left:0; top:0; z-index:100}

</style>

