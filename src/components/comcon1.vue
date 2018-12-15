<template>
<div class="images">
					
		<template v-if="children">
			
				<router-link :to="children"><img :src="imagesSrc" v-if="num == 1" ></router-link>

		</template>
		<template  v-else>

				<img :src="imagesSrc" v-if="num == 1" >
			
		</template>


	</div>
</template>

<script>
export default {
  name: 'images',
  data () {
    return {
    }
  },
	computed:{
		num(){

			return   this.$route.params.num
		},
		children(){
			var self =this;
			var id = self.$route.params.id;
			if(id == 'capital4'){
				return '/home/comcon1/capital4_1/1'
			}else{
				return false
			}
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
			
			this.$store.dispatch('fetchBack',{data:true})
			this.$store.dispatch('fetchNav',{data:"comprehensive"})
			this.$store.dispatch('fetchHeaderimg',{data:config.staticUrl+this.$route.params.id+'header.png'})
			this.$store.dispatch('fetchSearch',{data:false})
			this.$store.dispatch('fetchLogo',{data:false})


	},
	mounted() {
		
	},
	methods:{
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
	
	
	

</style>

