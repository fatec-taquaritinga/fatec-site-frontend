<template>
    <el-row>
		<el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
		  REALIZAR PESQUISA
		</el-dialog>
	
		<menu-fixo></menu-fixo>
        <menu-mobile></menu-mobile>
		<menu-superior colorDefault="#00A0E6" ></menu-superior>
		<menu-inferior colorDefault="#00A0E6" ></menu-inferior>

        <app-banner>
            <img  class="el-banner" slot="imagem"  src="http://blog.portalpravaler.com.br/wp-content/uploads/2015/08/curso-de-sistemas-de-informacao.jpg" v-if="!video" >
        </app-banner>

        <div class="barra-banner">
            <p>Curso Superior de Graduação, modalidade presencial | Duração: 6 meses | Período: Manhã</p>
        </div>

        <curso-content></curso-content>
        <app-apoio></app-apoio>
        <curso-carousel></curso-carousel>
        <corpo-docente></corpo-docente>
        
        <app-footer></app-footer>
    </el-row> 
</template>

<script>
    import AppBanner from '../../layouts/Banner.vue'
    import CursoContent from '../../layouts/cursos/Content.vue'
    import AppApoio from '../../layouts/Apoio.vue'
    import CursoCarousel from '../../layouts/cursos/Carousel.vue'
    import CorpoDocente from '../../layouts/cursos/CorpoDocente.vue'
    import AppFooter from '../../layouts/Footer.vue';
	import menuSuperior from '../../layouts/Menu-superior.vue';
	import menuInferior from '../../layouts/Menu-inferior.vue';
    import menuMobile from   '../../layouts/Menu-mobile.vue';
	import menuFixo from   '../../layouts/Menu-fixo.vue';
	
	import Events    from '../../components/Events.js'
	  
    export default {
        components: {
            AppBanner, CursoContent, AppApoio, CursoCarousel, CorpoDocente, AppFooter, menuSuperior, menuInferior, menuMobile, menuFixo
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