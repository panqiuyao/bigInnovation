
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state  = {
	back:false,
	logo:true,
	search:false,
	headerimg:"/static/images/logo.png",
	nav:"center",
	leftnav:"innovation",
	rightnav:true,
}
const getters = {
		//顶部返回
		getBack(state) {
				return state.back
		},
		//搜索
		getSearch(state) {
				return state.search
		},
		//headerimg
		getHeaderimg(state) {
				return state.headerimg
		},
		//logo
		getLogo(state) {
				return state.logo
		},
		//顶部nav
		getNav(state) {
			return state.nav
		},
		//左边nav
		getLeftnav(state) {
			return state.leftnav
		},
		//左边nav
		getRightnav(state) {
			return state.rightnav
		}
}
const mutations  = {
	//顶部返回
	setBack(state,data){
	     state.back = data
	 },
	//搜索
	setHeaderimg(state,data){
	     state.headerimg = data
	 },
	//搜索
	setLogo(state,data){
	     state.logo = data
	 },
	//搜索
	setSearch(state,data){
	     state.search = data
	 },
	//顶部nav
	setNav(state,data){
	     state.nav = data
	 },
	//左边nav
	setLeftnav(state,data){
	     state.leftnav = data
	 },
	//左边nav
	setRightnav(state) {

	     state.rightnav = data
	}

}
const actions = {
	//顶部返回
	fetchBack(self,data){
			self.commit('setBack',data.data)
	} ,
	//顶部图片
	fetchHeaderimg(self,data){
			self.commit('setHeaderimg',data.data)
	} ,
	//logo
	fetchLogo(self,data){
			self.commit('setLogo',data.data)
	} ,
	//搜索
	fetchSearch(self,data){
			self.commit('setSearch',data.data)
	} ,
	//顶部nav
	fetchNav(self,data){
			self.commit('setNav',data.data)
	} ,
	//左边nav
	fetchLeftnav(self,data){
			self.commit('setLeftnav',data.data)
	} ,
	//左边nav
	fetchRightnav(self,data){
			self.commit('setRightnav',data.data)
	} 
}


 const store = new Vuex.Store({
    state: state,
    getters:getters,
    mutations:mutations,
    actions:actions

 })

 
  export default store