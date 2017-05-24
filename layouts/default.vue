<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src:local('Material Icons'),
  local('MaterialIcons-Regular'),
  url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2)format('woff2');
}

.v-modal{z-index:3 !important}

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

html
{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 100%;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
</style>
