<template>
	
  <el-row  :gutter="0">
			<el-col  :span="6"  class="item-list" v-for="item in list" :key="item.url">
				  <router-link :to="item.url">
							<img :src="item.img">
							<div class="item-title flex">{{item.title}}</div>
					</router-link>
						
			</el-col>
  </el-row>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      list: config.center
    }
  },
	beforeCreate(){
			this.$store.dispatch('fetchBack',{data:false}),
			this.$store.dispatch('fetchNav',{data:"center"})
			this.$store.dispatch('fetchHeaderimg',{data:config.header.left.logoimg})
			this.$store.dispatch('fetchSearch',{data:false})
			this.$store.dispatch('fetchLogo',{data:true})
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
	.el-row .item-list { padding:0 0.175rem}
	
</style>

