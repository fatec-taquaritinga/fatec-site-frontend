<template>
    <el-row>
		<el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
		  REALIZAR PESQUISA
		</el-dialog>
	
		<menu-fixo></menu-fixo>
        <menu-mobile></menu-mobile>
		<menu-superior></menu-superior>
		<menu-inferior></menu-inferior>
        
        <curso-banner></curso-banner>

        <curso-content></curso-content>

        <app-apoio></app-apoio>
        
        <carrocel></carrocel>

        <corpo-docente></corpo-docente>
        
        <app-footer></app-footer>
    </el-row> 
</template>

<script>
    import CursoBanner from '../../layouts/cursos/Banner.vue'
    import CursoContent from '../../layouts/cursos/Content.vue'
    import AppApoio from '../../layouts/Apoio.vue'
    import AppFooter from '../../layouts/Footer.vue'
	import menuSuperior from '../../layouts/Menu-superior.vue'
	import menuInferior from '../../layouts/Menu-inferior.vue'
    import menuMobile from   '../../layouts/Menu-mobile.vue'
	import menuFixo from   '../../layouts/Menu-fixo.vue'
    import carrocel from   '../../layouts/cursos/Carrocel.vue'
    import CorpoDocente from   '../../layouts/cursos/CorpoDocente.vue'
	
	import Events    from '../../components/Events.js'
	  
    export default {
        components: {
            CursoBanner, CursoContent, AppApoio, AppFooter, menuSuperior, menuInferior, menuMobile, menuFixo, carrocel, CorpoDocente
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
	
    #titulo-carrocel {
        height: 10vh;
        line-height: 10vh;
        font-size: 1.5em;
        margin-top: -5px;
    }

    .corpo-doc {
        padding-top:30px;
        padding-bottom:30px;
        background-color:#f5f5f5;        
        padding-bottom: 20vh;
    
    }

    .titulos {
        text-align: center;
    }

    .titulos h1 {
        color: #00a0e6;
        font-size: 2.5em;
    }

    #img-carrocel {
        width: 100%;
        margin-top: 5vh;
    }

    .profs {
        margin-top: 3vh;
    }

    .img-prof {
        margin-left: -45px;
        margin-top: -45px;
        width:90px;
        height:90px;
        border-radius:50%;
        border: 3px solid #00a0e6;
    }

    .content-profs {
        background: #fff;
        margin-top: 45px;
        margin-left: 45px;
        display: flex;
    }

    .text-profs {
        margin-left: 1vh;
        margin-top: 1vh;
        margin-bottom: 3vh;
    }

    .text-profs a {
        padding: 2px;
        margin: 2px;
    }

    .text-profs p span {
        background: gray;
        margin: 1vh;
        border-radius: 5%;
        color: #fff;
    }
</style>