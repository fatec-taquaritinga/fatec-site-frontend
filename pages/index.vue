<template>
  <el-row>  
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
      REALIZAR PESQUISA
    </el-dialog>
    
    <menu-fixo></menu-fixo>
    <menu-mobile></menu-mobile>
    <menu-superior colorDefault="#B01116" ></menu-superior>
    <menu-inferior colorDefault="#B01116" ></menu-inferior>

    <app-banner>
        <img  class="el-banner" slot="imagem"  src="../assets/banner.jpg" v-if="!video" >
        <video class="el-banner" id="video" autoplay muted  loop src="video.mp4" v-if="video" ></video>
    </app-banner>


    <app-cursos></app-cursos>
    <app-apoio></app-apoio>
    <app-noticias></app-noticias>
    <app-footer></app-footer>

  </el-row>
</template>

<script>
  import menuSuperior from '../layouts/Menu-superior.vue';
  import menuInferior from '../layouts/Menu-inferior.vue';
  import menuMobile from   '../layouts/Menu-mobile.vue';
  import menuFixo from   '../layouts/Menu-fixo.vue';

  import AppBanner from '../layouts/Banner.vue';
  import AppCursos from '../layouts/Cursos.vue';
  import AppApoio from '../layouts/Apoio.vue';
  import AppNoticias from '../layouts/Noticias.vue';
  import AppFooter from '../layouts/Footer.vue';

  import Events    from '../components/Events.js'

  export default {
    components: {
      AppBanner, AppCursos, AppApoio, AppNoticias, AppFooter, menuMobile, menuSuperior, menuInferior, menuFixo
    },

    data() {
      return {
        dialogVisible:false,
        largura: '20%',
        view: '0',

        video:true
      }
    },

    mounted(){
        window.onscroll = () => {
            let top = window.pageYOffset || document.documentElement.scrollTop

            if( (top > 200) && ( window.innerWidth > 992) ){
              document.getElementById("menu-fixo").classList.add("menu-fixo")

            }else if( (top < 800) && ( window.innerWidth > 992) ){
              document.getElementById("menu-fixo").classList.remove("menu-fixo")
            }
        },

        Events.$on('modal', ()=>{
          this.open()
       })
    },

    methods:{
        open(){
            this.dialogVisible=true
            this.largura = '20%'
            this.view="1"    
        },
        handleClose() {
            this.dialogVisible=false
            this.largura = '0'
            this.view="0"
        }
    }
  }
</script>


<style>
    .menu-fixo{
        top:0px !important;
        transition:top 1s;
    }
</style>