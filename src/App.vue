<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
		background-image: url(bgimg);
		font-family: fontFamily;
	}
	.flex { display: flex; align-items: center; justify-content: center;}
	.flex-left { justify-content: flex-start;} 
	.flex-right { justify-content: flex-end;} 
	.flex-item { flex: 1;}
	a { text-decoration: none; display: block; width: 100%; height: 100%;}
	
</style>
