<template>
  <el-row>  
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
      REALIZAR PESQUISA
    </el-dialog>

    <app-topo></app-topo>
    <app-banner></app-banner>
    <app-cursos></app-cursos>
    <app-apoio></app-apoio>
    <app-noticias></app-noticias>
    <app-footer></app-footer>
  </el-row>
</template>

<script>
  import AppTopo   from '../layouts/Topo.vue';
  import AppBanner from '../layouts/Banner.vue';
  import AppCursos from '../layouts/Cursos.vue';
  import AppApoio from '../layouts/Apoio.vue';
  import AppNoticias from '../layouts/Noticias.vue';
  import AppFooter from '../layouts/Footer.vue';

  import Events    from '../components/Events.js'

  export default {
    components: {
      AppTopo, AppBanner, AppCursos, AppApoio, AppNoticias, AppFooter
    },

    data() {
      return {
        dialogVisible:false,
        largura: '20%',
        view: '0'
      }
    },

    mounted(){
        window.onscroll = () => {
            let top = window.pageYOffset || document.documentElement.scrollTop

            if( (top > 90) && ( window.innerWidth > 992) ){
                document.getElementById("menu-superior").style.display='none'

            }else{
                document.getElementById("menu-superior").style.display='block' 
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
