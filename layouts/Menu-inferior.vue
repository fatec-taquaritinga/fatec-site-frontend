<template>
    <el-row>

        <el-col id="parentLogo" :xs="{span:7, offset:1}" :sm="{span:4, offset:1}">
            <img src="../assets/logos/logo.svg" />
        </el-col>
        
        <el-col id="menu-inf"  :sm="{span:10, offset:2}">
           <div class="active" :style="{opacity:opacidade, width:largura,left:distancia}" ></div>

           <el-popover ref="popover1" placement="bottom" width="200" trigger="hover">
            <h2 style="cursor:pointer">
                <p><i class="material-icons">edit_location</i> Descrição 1</p>
                <p><i class="material-icons">beenhere</i> Descrição 2</p>
                <p><i class="material-icons">near_me</i> Descrição 3</p>
                <p><i class="material-icons">check</i> Descrição 4</p>
                <p><i class="material-icons">my_location</i> Descrição 5</p>
                <p><i class="material-icons">check</i> Descrição 6</p>
            </h2>
           </el-popover>

           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover1>Institucional</span>

           <el-popover ref="popover2" placement="bottom" width="200" trigger="hover" content="Cursos"></el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover2>Cursos</span>

           <el-popover ref="popover3" placement="bottom" width="200" trigger="hover" content="Área acadêmica & serviços acadêmicos"></el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover3>Área acadêmica</span>

           <span @mouseenter="animateActive" @mouseout="hideActive" >Vestibular</span>


           <span @mouseenter="animateActive" @mouseout="hideActive" >Outro menu</span>

        </el-col>

        <el-col id="logomarcas" :sm="5">
            <img src="../assets/logos/cps.svg" />
            <img src="../assets/logos/gov.svg" />
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
            menuAtivo:false,
            opacidade:'0',
            largura:'0px',
            distancia:'0'
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
.active{bottom:0;border-top:3px solid #b01116;width:110px;z-index:2;position:absolute;transition:150ms ease-in-out;opacity:0;}
#parentLogo{height:15vh;display:flex;align-items:center;}
#parentLogo img{width:95%;height:75%;max-height:85%;}

#menu-inf{display:none;height:10vh;margin-top:2vh;font-size:.9em;color:#4A555C;}
#menu-inf span{z-index:3;padding-left:2%;padding-right:2%;cursor:pointer;padding-top:2vh;}
#menu-inf span:hover{color:#b01116;transition:1s;}

#menu-mobile{height:15vh;display:flex;align-items:center;justify-content:space-around;}
#menu-mobile i{border:2px solid #b01116;padding:3%;font-size:3em;color:#b01116;border-radius:5px;box-sizing: border-box;cursor:pointer;}

#logomarcas{display:none;height:10vh;margin-top:1vh;}
#logomarcas img:first-child{width:20%;margin-right:2%;}
#logomarcas img:last-child{width:45%;margin-left:2%;}


/* SM */
@media screen and (min-width: 768px){}

/* MD */
@media screen and (min-width: 992px)
{
    #parentLogo{height:12vh;}
    #menu-inf{display:flex;}
    #logomarcas{display:flex;justify-content:flex-end;}
    #menu-mobile{display:none;}
}

/* LG */
@media screen and (min-width: 1200px){}

</style>