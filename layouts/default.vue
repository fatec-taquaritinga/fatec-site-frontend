<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src:local('Material Icons'),
  local('MaterialIcons-Regular'),
  url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2)format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
			
@font-face {
	font-family: Source Sans Pro;
	src: url('../assets/fonts/SourceSansPro-Light.otf');
	
	/*
		src: url('../assets/fonts/SourceSansPro-LightIt.otf');
		src: url('../assets/fonts/SourceSansPro-Black.otf');
		src: url('../assets/fonts/SourceSansPro-BlackIt.otf');
		src: url('../assets/fonts/SourceSansPro-Bold.otf');
		src: url('../assets/fonts/SourceSansPro-BoldIt.otf');
		src: url('../assets/fonts/SourceSansPro-ExtraLight.otf');
		src: url('../assets/fonts/SourceSansPro-ExtraLightIt.otf');
		src: url('../assets/fonts/SourceSansPro-It.otf');
		src: url('../assets/fonts/SourceSansPro-Regular.otf');
		src: url('../assets/fonts/SourceSansPro-Semibold.otf');
		src: url('../assets/fonts/SourceSansPro-SemiboldIt.otf');
	*/
}

html
{
  font-family: "Source Sans Pro", sans-serif;
  font-size: 100%;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
</style>
