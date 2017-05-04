<template>
    <el-col id="top" class="fundo" :xs="24">
      <menu-superior></menu-superior>
      <menu-inferior></menu-inferior>
    </el-col>
</template>

<script>
  import menuSuperior from './Menu-superior.vue';
  import menuInferior from './Menu-inferior.vue';

  export default {
    components: {
      menuSuperior, menuInferior
    }
  }
</script>

<style>
/* XS */
#top{z-index:4;border-top:5px solid #941611;position:fixed;top:0;right:0;left:0;height:16vh;overflow:hidden;}

.fundo
{
  background : -moz-linear-gradient(50% 0% -90deg,rgba(255, 255, 255, 1) 0%,rgba(252, 252, 252, 1) 44.96%,rgba(243, 244, 244, 1) 76.21%,rgba(230, 231, 232, 1) 100%);
  background : -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
  background : -webkit-gradient(linear,50% 0% ,50% 100% ,color-stop(0,rgba(255, 255, 255, 1) ),color-stop(0.4496,rgba(252, 252, 252, 1) ),color-stop(0.7621,rgba(243, 244, 244, 1) ),color-stop(1,rgba(230, 231, 232, 1) ));
  background : -o-linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
  background : -ms-linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#E6E7E8' ,GradientType=0)";
  background : linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
  opacity : 0.97;
  box-shadow : 7px 7px 50px rgba(0, 0, 0, 0.65);
  filter: alpha(opacity=97) progid:DXImageTransform.Microsoft.Alpha(opacity=97) progid:DXImageTransform.Microsoft.dropshadow(OffX=7, OffY=7, Color='#000000') progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',endColorstr='#E6E7E8' , GradientType=0);
}

/* SM */
@media screen and (min-width: 768px){}

/* MD */
@media screen and (min-width: 992px)
{
  #top{border-top:none;}
}

/* LG */
@media screen and (min-width: 1200px){}

</style>