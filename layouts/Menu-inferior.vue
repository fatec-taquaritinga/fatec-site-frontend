<template>
    <el-row id="parent-menu-inf" :style="{borderTop:'3px solid'+colorDefault}">

        <el-col id="parentLogo" :xs="{span:7, offset:1}" :sm="{span:4, offset:1}" :md="{span:3, offset:2}">
            <img src="../assets/logos/logo.svg" />
        </el-col>
        
        <el-col id="menu-inf"  :sm="{span:10, offset:2}" >
           <div class="active" :style="{opacity:opacidade, width:largura,left:distancia, backgroundColor:colorDefault}" ></div>
           
           <el-popover ref="popover1" placement="bottom" width="200" trigger="hover">
                <span class="link-popover sub-divisao-pop">Sobre a Fatec</span>
                <span class="link-popover">Quem somos</span>
                <span class="link-popover">Departamentos</span>
                <span class="link-popover">Regimento e Regulamento</span>
                <span class="link-popover">Horários de funcionamento</span>
                <span class="link-popover">Concursos</span>
                <span class="link-popover">WebSAI</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover1>Institucional</span>

           <el-popover ref="popover2" placement="bottom" width="270" trigger="hover" content="Cursos">
                <span class="link-popover sub-divisao-pop">Graduação presencial</span>
                <span class="link-popover"><div style="background-color:#2bb673;" class="icon-curso" ></div> Agronegócio</span>
                <span class="link-popover"><div style="background-color:#2e3192;" class="icon-curso" ></div>Análise e Desenvolvimento de Sistemas</span>
                <span class="link-popover"><div style="background-color:#ed1c24;" class="icon-curso" ></div>Produção Industrial</span>
                <span class="link-popover"><div style="background-color:#00aeef;" class="icon-curso" ></div>Sistemas para Internet</span>
                <span class="link-popover sub-divisao-pop">Graduação à distância (EAD)</span>
                <span class="link-popover"><div style="background-color:#00a79d;" class="icon-curso" ></div>Gestão Empresarial</span>
                <span class="link-popover sub-divisao-pop">Pós-graduação</span>
                <span class="link-popover">Pós-Graduação em Gestão da Produção Industrial </span>
                <span class="link-popover sub-divisao-pop">Cursos extracurriculares</span>
                <span class="link-popover">Extensão Tecnológica</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover2>Cursos</span>

           <el-popover ref="popover3" placement="bottom" width="200" trigger="hover">
                <span class="link-popover sub-divisao-pop">Publicações</span>
                <span class="link-popover">Revista interface Tecnológica</span>
                <span class="link-popover">Grupos de Pesquisa</span>
                <span class="link-popover">Empresa Junior</span>
                <span class="link-popover">Diretório Acadêmico</span>
                <span class="link-popover sub-divisao-pop">Informações Gerais</span>
                <span class="link-popover">Calendário Letivo</span>
                <span class="link-popover">Horários de aulas</span>
                <span class="link-popover">Horários de monitoria</span>
                <span class="link-popover">Mapa de salas</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover3>Acadêmico</span>


           <el-popover ref="popover3" placement="bottom" width="200" trigger="hover">
                <span class="link-popover">Inscrições</span>
                <span class="link-popover">Provas e gabaritos</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover3>Vestibular</span>

           <span @mouseenter="animateActive" @mouseout="hideActive" >Contato</span>
        </el-col>

        <el-col id="logomarcas" :sm="5">
            <img src="../assets/logos/cps.svg" />
            <img src="../assets/logos/gov.svg" />
        </el-col>

        <el-col id="menu-mobile" :xs="{span:5, offset:10}" :sm="{span:5, offset:14}">
            <label for="mobile" ><i :style="{color:colorDefault}" class="material-icons">menu</i></label>
        </el-col>

    </el-row>
</template>

<script>
  export default {
    props: ["colorDefault"],
    data(){
        return{
            menuAtivo:false,
            opacidade:'0',
            largura:'0px',
            distancia:'0'
        }
    },
    mounted(){
        for(let l of document.querySelectorAll(".link-popover")){
            l.addEventListener("mouseenter", e=>e.currentTarget.style.background = this.colorDefault)
            l.addEventListener("mouseout", e=> e.currentTarget.style.background = "#fff")
        }

        for(let d of document.querySelectorAll(".sub-divisao-pop")) d.style.color=this.colorDefault

        for(let s of document.querySelectorAll("#menu-inf span")){
            s.addEventListener("mouseenter", e=> e.currentTarget.style.color=this.colorDefault)
            s.addEventListener("mouseout", e=> e.currentTarget.style.color="#4A555C")
        }
    },
    methods: {
        animateActive(e){
            let position = e.currentTarget.offsetLeft
            let largura  = e.currentTarget.offsetWidth
            if(!this.menuAtivo)this.opacidade='1'
            this.distancia=position+'px'
            this.largura=largura+'px'
            this.menuAtivo = !this.menuAtivo
        },

        hideActive(){
            this.opacidade='0'
            this.menuAtivo = !this.menuAtivo
        }
    }
  }
</script>


<style>
#parent-menu-inf{left:0;right:0;position:fixed;z-index:4;background-color:#fff;}
.icon-curso{width:10px;height:10px;margin-right:5px;}
.link-popover{display:flex;align-items:center;font-size:1.1em;cursor:pointer;line-height:18px;color:#4A555C;padding:1%;padding-left:5%;}
.link-popover:hover{color:#fff !important;}
.sub-divisao-pop{pointer-events:none;margin-top:8px;}

.el-popover{padding:0;border:none;}
.active{bottom:0;top:113px;height:3px;width:110px;position:absolute;transition:150ms ease-in-out;opacity:0;}

#parentLogo{height:81px;display:flex;align-items:center;}
#parentLogo img{width:85%;height:70%;max-height:75%;}

#menu-inf{display:none;height:80px;font-size:.9em;color:#4A555C;}
#menu-inf span{z-index:3;padding-left:2%;display:flex;align-items:center;padding-right:2%;cursor:pointer;text-align:center;}
#menu-inf span:hover{transition:1s;}

#menu-mobile{height:74px;display:flex;align-items:center;justify-content:space-around;}
#menu-mobile i{padding:3%;font-size:2.3em;cursor:pointer;}

#logomarcas{display:none;height:81px;justify-content:flex-end;}
#logomarcas img:first-child{width:20%;margin-right:2%;}
#logomarcas img:last-child{width:45%;margin-left:2%;}


/* MD */
@media screen and (min-width: 992px)
{
    #menu-inf{display:flex;}
    #logomarcas{display:flex;}
    #menu-mobile{display:none;}
    #menu-inf span{font-size:1em;}
    #parent-menu-inf{border:none;position:static;}
}
</style>