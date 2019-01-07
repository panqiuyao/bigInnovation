<template>
	<div>
	  <div id="app">
	    <router-view/>
	  </div>
	  <img src="/static/images/bg.png" class="bodybg"/>
	</div>
</template>

<script>
export default {
  name: 'App',

  beforeCreate(){
  		var self = this;
	   try{

          new QWebChannel(qt.webChannelTransport, function(channel){
                      var worldMap = channel.objects.worldMap;
					  self.$store.dispatch('fetchWorldMap',{data:worldMap})

                  }
          )

        }catch(e){
          console.log(e)
        }
	}
}
</script>

<style lang="stylus">
	*{ padding: 0; margin:0}
	.wmain,html {
			width: 100%; height: 100%; 
			position: absolute; left: 0; top:0;
	}
	body {
		width: 100%; height: 100%; 
		position: absolute; left: 0; top:0;
		overflow: hidden; 
		background-size: 100% 100%;
		font-family: fontFamily;
		background: #103d6f;
	}
	.bodybg { width:100%; height:100%;    display: block;
    position: absolute; z-index:0}
    #app { width:100%; height:100%;    display: block;
    position: absolute; z-index:1}
	.flex { display: flex; align-items: center; justify-content: center;}
	.flex-left { justify-content: flex-start;} 
	.flex-right { justify-content: flex-end;} 
	.flex-item { flex: 1;}
	a { text-decoration: none; display: block; width: 100%; height: 100%;}

	.mh {filter:blur(.2rem);}
	.anm    {    transition: all 0.5s ease-in-out;}
	.po-r { position:relative;}
</style>
