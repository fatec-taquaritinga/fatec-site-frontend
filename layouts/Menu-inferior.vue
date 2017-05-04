<template>
    <el-row>

        <el-col id="parentLogo" :xs="{span:7, offset:1}" :sm="{span:4, offset:1}">
            <img src="../assets/logo.svg" />
        </el-col>
        
        <el-col id="menu-inf"  :sm="{span:11, offset:1}">
           <div id="active"></div>
           <span @mouseenter="animateActive" @mouseout="hideActive">Institucional</span>
           <span @mouseenter="animateActive" @mouseout="hideActive">Cursos</span>
           <span @mouseenter="animateActive" @mouseout="hideActive">Área acadêmica</span>
           <span @mouseenter="animateActive" @mouseout="hideActive">Serviços acadêmicos</span>
           <span @mouseenter="animateActive" @mouseout="hideActive">Vestibular</span>
        </el-col>

        <el-col id="logomarcas" :sm="5">
            <img src="../assets/cps.svg" />
            <img src="../assets/gov.svg" />
        </el-col>

        <el-col id="menu-mobile" :xs="{span:5, offset:10}" :sm="{span:5, offset:14}">
            <i class="material-icons">menu</i>
        </el-col>

    </el-row>
</template>

<script>
  export default {
    data(){
        return{
            menuAtivo:false
        }
    },

    methods: {
        animateActive(e){
            let position = e.currentTarget.offsetLeft
            let largura  = e.currentTarget.offsetWidth
            if(!this.menuAtivo)document.querySelector("#active").style.opacity='1'
            document.querySelector("#active").style.left=position+'px'
            document.querySelector("#active").style.width=largura+'px'
            this.menuAtivo = !this.menuAtivo
        },

        hideActive(){
            document.querySelector("#active").style.opacity='0'
            this.menuAtivo = !this.menuAtivo
        }
    }
  }
</script>


<style>
#active{height:100%;width:110px;background-color:#b01116;z-index:2;position:absolute;transition:1s;opacity:0;}
#parentLogo{height:15vh;display:flex;align-items:center;}
#parentLogo img{width:95%;height:75%;max-height:85%;}

#menu-inf{display:none;height:10vh;margin-top:2vh;font-size:.9em;color:#4A555C;}
#menu-inf span{z-index:3;padding-left:2%;padding-right:2%;cursor:pointer;padding-top:2vh;}
#menu-inf span:hover{color:#fff;transition:3s;}

#menu-mobile{height:15vh;display:flex;align-items:center;justify-content:space-around;}
#menu-mobile i{border:2px solid #b01116;padding:3%;font-size:3em;color:#b01116;border-radius:5px;box-sizing: border-box;cursor:pointer;}

#logomarcas{display:none;height:10vh;margin-top:1vh;}
#logomarcas img:first-child{width:20%;}
#logomarcas img:last-child{width:45%;}


/* SM */
@media screen and (min-width: 768px){}

/* MD */
@media screen and (min-width: 992px)
{
    #parentLogo{height:12vh;}
    #menu-inf{display:flex;justify-content:center;}
    #logomarcas{display:flex;justify-content:space-around;}
    #menu-mobile{display:none;}
}

/* LG */
@media screen and (min-width: 1200px){}

</style>