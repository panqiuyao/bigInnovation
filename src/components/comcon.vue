<template>
<div class="images">
					


		<template v-if="this.$route.params.id == 'innovation6'">

				<!--全球创新技术展示-->
					<el-row class="flex innovation6" >

						  <el-col :span="3" v-for="item,index in listData" :key="index">
						  			

								<template v-if="worldMap && item.url.indexOf('videoplay') >= 0">
									 <a href="javascript:" @click="showvideo(item.url)"> 
										<img :src="item.images">
										<div class="item-title flex cententtitle">{{item.title}}</div>
									 </a>
								</template>
								<template v-else>
							    	<router-link :to="item.url"> 
										<img :src="item.images">
										<div class="item-title flex cententtitle">{{item.title}}</div>
									</router-link>
								</template>

						  </el-col>
						
					</el-row>
				

		</template>
		<template v-else-if="this.$route.params.id == 'personnel3'" class="personnel3">
				
				<!--海高人才引进-->
				
				<div class="personnel3 flex">
					<div class="left">
						<img :src="listData[0].img" width="100%">
					</div>
					<div class="flex-item">

						<div class="industry comprehensive-main">
							
							<el-carousel :autoplay="false"  :loop="false"  arrow="always" class="btn-one personnel3-main" >


								<template v-for="item,index in Math.ceil(listData[0].children.length/5)">
										
										<el-carousel-item v-if="item  == Math.ceil(listData[0].children.length/5)">
												<el-row>
											
													<el-col  :span="5" v-for="itemchild,indexchild in listData[0].children.length-index*5 " :key="indexchild" class="item" >	
														<div class="small"  @click="showpexpert(index,indexchild)">
															<img :src="listData[0].children[index*5+indexchild].img">
															<div class="title">
																<div class="t" v-html="listData[0].children[index*5+indexchild].name"></div>
																<div class="c" v-html="listData[0].children[index*5+indexchild].desc"></div>
															</div>
														</div>


													</el-col>
												</el-row>
										</el-carousel-item>
										<el-carousel-item v-else>
												<el-row>

													<el-col  :span="5" v-for="itemchild,indexchild in 5 " class="item" >	
														<div class="small"  @click="showpexpert(index,indexchild)">
															<img :src="listData[0].children[index*5+indexchild].img">
															<div class="title">
																<div class="t" v-html="listData[0].children[index*5+indexchild].name"></div>
																<div class="c" v-html="listData[0].children[index*5+indexchild].desc"></div>
															</div>
														</div>


													</el-col>
												</el-row>
										</el-carousel-item>

								</template>
							</el-carousel>

							<div class="popup-tck" :class="{show:popupTck,anm:popupTckAnm}" :style="popupStyle">
								<div class="flex">
									<div class="close"  @click="closeexpert"></div>
									<div class="img"><img :src="expert.img"></div>
									<div class="cont flex-item">
										<div class="t">
											{{expert.name}}<span class="d">{{expert.descCon}}</span>
										</div>
										<div class="c" v-html="expert.content"></div>
									</div>
								</div>
							</div>
							<div class="popup-zhanwei" :class="{show:popupTck}" @click="closeexpert"></div>

						</div>


					</div>
				</div>

		</template>

		<template v-else-if="this.$route.params.id == 'personnel1'" >

				<!--海外交流营-->


					<template v-if="worldMap">
						 <a  class="personnel1" href="javascript:" @click="showvideo('/videoplay/2')"></a>
					</template>
					<template v-else>
						 <router-link to="/videoplay/2" class="personnel1"> </router-link>
					</template>
					<img :src="listData[0].img" >



		</template>



		<template v-else-if="this.$route.params.id == 'center1'" >

			<!--部分创新中心-->
						  <div class="comconcarousel">
						    <el-carousel height="100%" :autoplay="false" :loop="false" :interval="3000" arrow="always" class="conmain" @change="change">
						      <el-carousel-item v-for="(item,index) in listData" :key="item" class="flex" >
						      			<div class="po-r">
											<a href="javascript:" class="center1link" @click="dojoin(item.id,item.name,item.str)"></a>
											<img :src="item.img" width="100%">
										</div>
						      </el-carousel-item>
						    </el-carousel>
						  </div>

		</template>



		<template v-else-if="this.$route.params.id == 'centerppt'" >

			<!--部分创新中心-->
						 <div class="pptback" v-on:click="prevpage()" ></div>
						  <div class="comconcarousel centerppt">
						    <el-carousel height="100%" :autoplay="false" :loop="false" :interval="3000" arrow="always" class="conmain" @change="change">
						      <el-carousel-item v-for="(item,index) in listData" :key="item" class="flex" >
						      			<div class="po-r">
											<a href="javascript:" class="center1link" @click="dojoin(item.id,item.name,item.str)"></a>
											<img :src="item.img" width="100%">
										</div>
						      </el-carousel-item>
						    </el-carousel>
						  </div>

		</template>


		<template  v-else-if="this.$route.params.id == 'industry1'" >

				<!--3d协同-->
				<div class="po-r">
				<a href="javascript:" class="industry1link" @click="dojoin(listData[0].id,listData[0].name,listData[0].str)"></a>
				<img :src="listData[0].img" >
				</div>


		</template>

		<template  v-else-if="this.$route.params.id == 'industry2'" >

		
						  <div class="comconcarousel">
						    <el-carousel height="100%" :autoplay="false" :loop="false" :interval="3000" arrow="always" class="conmain" @change="change">



									<template v-if="worldMap">
									      <el-carousel-item  class="flex" >
									      			<div class="po-r">
														<a href="javascript:" class="industry1link" @click="worldMap.doShell(listData[0].url)" ></a>
														<img :src="listData[0].img" width="100%">
													</div>
									      </el-carousel-item>
									</template>
									<template v-else>
									      <el-carousel-item  class="flex" >
									      			<div class="po-r">
														<a  :href="listData[0].url" class="industry1link" target="_blank" ></a>
														<img :src="listData[0].img" width="100%">
													</div>
									      </el-carousel-item>
									</template>

							      <el-carousel-item  class="flex" >
							      			<div class="po-r">
												<img :src="listData[1].img" width="100%">
											</div>
							      </el-carousel-item>
						    </el-carousel>
						  </div>


		</template>



		<template v-else>


						  <div class="comconcarousel">
						    <el-carousel height="100%" :autoplay="false" :loop="false" :interval="3000" arrow="always" class="conmain" @change="change">

						      <el-carousel-item v-for="item,index in listData" :key="index" class="flex" >
								<template  v-if="item.url.indexOf('http') >= 0">

									<template v-if="worldMap">
							    		<a href="javascript:" @click="worldMap.doShell(item.url)" class="flex"> 
											<img :src="item.img" width="100%">
										</a>
									</template>
									<template v-else>
							    		<a :href="item.url" target="_blank" class="flex"> 
											<img :src="item.img" width="100%">
										</a>
									</template>

								</template>

								<template  v-else-if="item.url.indexOf('videoplay') >= 0">

									<template v-if="worldMap">
							    		<a href="javascript:" @click="worldMap.doShell(item.url)" class="flex"> 
											<img :src="item.img" width="100%">
										</a>
									</template>
									<template v-else>
									    <router-link :to="item.url" class="flex"> 
											<img :src="item.img" width="100%">
										</router-link>
									</template>

								</template>

								<template v-else>

									<template v-if="item.url">
							    		<router-link :to="item.url" class="flex"> 
											<img :src="item.img" width="100%">
										</router-link>
									</template>
									<template v-else>
										<img :src="item.img" width="100%">
									</template>

								</template>
													   
			
						      </el-carousel-item>

						    </el-carousel>
						  </div>

			

			
		</template>


	</div>
</template>

<script>
export default {
  name: 'images',
  data () {
    return {
    	headerid:0,
    	//海高弹出框
    	popupTck:false,
    	popupTckAnm:false,
    	popupStyle:{
    		left:"",
    	},
    	expert:'',	//专家内容
    }
  },
  watch:{
  		headerid(){
  			//轮播切换状态 

			var self =this;
	 				
			self.$store.dispatch('fetchBack',{data:configRouter[this.$route.params.id][self.headerid].back})
			self.$store.dispatch('fetchNav',{data:configRouter[this.$route.params.id][self.headerid].rightNav})
			self.$store.dispatch('fetchHeaderimg',{data:configRouter[this.$route.params.id][self.headerid].headerImg})
			self.$store.dispatch('fetchLogo',{data:configRouter[this.$route.params.id][self.headerid].logo})
			self.$store.dispatch('fetchSearch',{data:configRouter[this.$route.params.id][self.headerid].search})



  		}
  },
	computed:{
		//qt对象
		worldMap(){

			return  this.$store.getters.getWorldMap;
		},
		//当前数据
		listData(){
			var self = this;
			switch (self.$route.params.id) {
				case "innovation6":
					//全球创新技术展示
					return   configRouter[self.$route.params.id][self.headerid].img
					break;
				default:
					return   configRouter[self.$route.params.id]
					break;
			}
		},

	},
	created(){
		//修改状态
		var self =this;
 				
		self.$store.dispatch('fetchBack',{data:configRouter[this.$route.params.id][self.headerid].back})
		self.$store.dispatch('fetchNav',{data:configRouter[this.$route.params.id][self.headerid].rightNav})
		self.$store.dispatch('fetchHeaderimg',{data:configRouter[this.$route.params.id][self.headerid].headerImg})
		self.$store.dispatch('fetchLogo',{data:configRouter[this.$route.params.id][self.headerid].logo})
		self.$store.dispatch('fetchSearch',{data:configRouter[this.$route.params.id][self.headerid].search})

	},
	mounted() {
		
	},
	methods:{
		//轮播切换状态
		change(i){
				this.headerid = i;

		},
		//显示视频
		showvideo(url){
			var self = this;
			var videourl = url.split('/')[2]
			self.worldMap.doPlayVideo('video'+videourl+'.mp4')
		},
		//加会
		dojoin(id,name,str){
			var self = this;
			try {
				self.worldMap.doJoin(id,name,str);

			} catch(e) {
				// statements
				console.log(e);
			}
			

		},
		//显示专家
		showpexpert(index,indexChild){
				var self = this;
				self.popupStyle.left = event.clientX+'px';

				self.expert = self.listData[0].children[index*5+indexChild];

				document.querySelector('.header').classList.add('mh')
				document.querySelector('.bodybg').classList.add('mh')
				document.querySelector('.personnel3 .left').classList.add('mh')
				document.querySelector('.personnel3-main').classList.add('mh')
				setTimeout(function(){
					self.popupTckAnm = true;
					self.popupTck = true;
					self.popupStyle.left = "55%";
				},100)

		},
		//关闭专家
		closeexpert(){
				var self = this;
				document.querySelector('.header').classList.remove('mh')
				document.querySelector('.bodybg').classList.remove('mh')
				document.querySelector('.personnel3 .left').classList.remove('mh')
				document.querySelector('.personnel3-main').classList.remove('mh')
				self.popupTck = false;
				setTimeout(function(){
					self.popupTckAnm = false;
				},500)

		},
		//返回上一页面
		prevpage(){
			this.$router.go(-1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" type="">
.images {
	position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 2% 3%;
    margin-top: 0rem;    
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


/*全球创新技术展示*/
.innovation6.el-row { width:100%;height:100%;}
.innovation6.el-row .el-col  { margin-left:.25rem; width:14.25%;}
.innovation6.el-row .el-col:nth-child(1)  { margin-left:0;}
.innovation6.el-row .el-col a { font-weight:600}



/*海高人才引进*/
.personnel3 { width:100%;}
.personnel3 .left { width:8.2%;}
.personnel3 	.flex-item	{ padding:0 0 0 .5rem;}
.personnel3  .el-carousel__container { padding:0 1rem; height:4rem !important;}
.personnel3 .btn-one .el-carousel__arrow.el-carousel__arrow--right { right:0}
.personnel3 .btn-one .el-carousel__arrow.el-carousel__arrow--left { left:0}
.personnel3 .el-carousel__item .el-row { margin:0 .625rem;}
.personnel3 .el-carousel__item .el-row .item { padding:0 .0625rem;}
.personnel3 .el-carousel__indicators { display:none;}
.personnel3  .el-col-5 { width:20%;}

.personnel3 .el-carousel__item .el-row .item .small { position:relative;  border-radius:.125rem; overflow:hidden; cursor:pointer;}
.personnel3 .el-carousel__item .el-row .item .small img { width:100%; height:100%;}
.personnel3 .el-carousel__item .el-row .item .small .title { background:rgba(17,108,176,.8); position:absolute; bottom:0; font-size:.3rem; color:#fff; text-align:center; left:0;right:0; padding:.15rem;}
.personnel3 .el-carousel__item .el-row .item .small:hover .title { background:#69c089; font-size:.3rem;}
.personnel3 .el-carousel__item .el-row .item .small .title  .t { font-weight:600}
.personnel3 .el-carousel__item .el-row .item .small .title  .c { font-size:.25rem;}
.personnel3 .el-carousel__item .big { display:none;}
.popup-zhanwei { z-index: 1000;  position: fixed; left: 0; top:0; bottom: 0; right: 0;  visibility: hidden;}
.popup-zhanwei.show { visibility: visible;}
.popup-tck { position:fixed; left:55%; top:25%; right:15%; bottom:10%; background:#115d98; color:#fff; z-index:1002;   border-radius:.25rem; overflow:hidden; opacity: 0; visibility: hidden; width:60%;     margin-left: -30%;}
.popup-tck.show { opacity: 1; visibility: visible;     }
.popup-tck .flex { width:100%; height:100%; }
.popup-tck  .img  { height:100%;}
.popup-tck  .img img { height:100%; width:auto;}
.popup-tck .cont { font-size:.25rem;     position:relative;}
.popup-tck .cont .t { font-size:.35rem; font-weight:600; position: relative; left: -.1rem;}
.popup-tck .cont .d  { font-size:.25rem; }
.popup-tck .cont .c  { font-size:.2rem; line-height: .3rem; text-align:justify;  padding-top:.15rem}
.popup-tck .close   {     position: absolute;
    background: url(/static/images/close.png) center center no-repeat;
    width: 0.4rem;
    height: 0.4rem;
    background-size: 70% 60%;
    right: 0.1rem;
    top: 0.1rem;}
    .personnel3  .popup-tck .flex-item { padding: 0 .5rem; }

    /*部分创新中心 */
 .center1link {     width: 22%;
    height: 20%;
    left: 3%;
    top: 65%; position: absolute; }
	.industry1link {
		
	     width: 18%;
    height: 20%;
    left: 80%;
    top: 60%; position: absolute; }

    /*ppt*/

    .comconcarousel.centerppt .conmain { padding: 0 2% !important; }
    .comconcarousel.centerppt .el-carousel__arrow--left {
    	    position: absolute;
		    width: 50% !important;
		    height: 100% !important;
		    left: 0 !important;
		    background: none !important;
    }   
     .comconcarousel.centerppt .el-carousel__arrow--right {
    	       position: absolute;
    width: 50% !important;
    height: 100% !important;
    right: 0 !important;
    background: none !important;
    }


    .comconcarousel.centerppt  .el-carousel__item { opacity:0; transform: translateX(0) scale(1) !important;

		transition: all 0.5s ease-in-out !important;
    }
   .comconcarousel.centerppt   .el-carousel__item.is-active { opacity:1;}
   .pptback {
	    width: 10%;
	    height: 13%;
	    position: absolute;
	    left: 0;
	    top: -12%;
	    z-index: 1000;
	
   }
</style>

