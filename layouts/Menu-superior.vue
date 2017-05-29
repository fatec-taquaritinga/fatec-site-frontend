<template>
    <el-row id="menu-superior">
        <el-col id="red-menu" :xs="24" :md="24" >

            <el-col id="content-red-menu" :md="{span:12,offset:10}" :lg="{span:10,offset:12}" >

                <el-col :md="4" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/biblioteca.svg" alt="Biblioteca"/>  Biblioteca</el-col>
                <el-col :md="4" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/siga.svg" alt="Siga"/>  SIGA</el-col>
                <el-col :md="4" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/moodle.svg" alt="Moodle"/>  Moodle</el-col>
            
                <el-col :md="6" :lg="7" id="redeSociais">
                    <span>Encontre-nos:</span>
                    <img src="../assets/icons-menu-sup/facebook.svg"/>
                    <img src="../assets/icons-menu-sup/instagram.svg"/>
                    <img src="../assets/icons-menu-sup/youtube.svg"/>
                </el-col>

                <el-col :md="1" :lg="1" id="pesquisar">
                    <i class="material-icons" @click="openModal">search</i>               
                </el-col>

                <el-col :md="4" :lg="4" id="login">
                    <div class="flex"><i class="material-icons">person</i>Área Restrita</div>                    
                </el-col>

            </el-col>

        </el-col>
    </el-row>
</template>

<script>
  import Events    from '../components/Events.js'

  export default {
    methods: {
      openModal(){
        Events.$emit('modal')
      }
    }
  }
</script>

<style>
    .flex{display:flex;align-items:center;font-size:.8em;}
    #red-menu{display:none !important;height:4vh;background-color:#b01116;}
    #content-red-menu{height:4vh;display:flex;justify-content:space-between;color:#fff;font-size:.8em;cursor:pointer;}
    #content-red-menu img{filter:brightness(500%);margin-right:1%;width:12%;}

    .item-red-menu{display:flex;flex-direction:row;border:none;align-items:center;justify-content:center;}
    
    .item-red-menu:hover{background-color:#990c10;transition:400ms ease-in-out;}

    #redeSociais{display:none;justify-content:space-around;align-items:center;color:#fff;height:2vh;margin-top:1vh;padding-left:0.5%;padding-right:0.5%;border-left:1px solid #ccc;border-right:1px solid #ccc;}
    #redeSociais img{height:15px;width:9%;}
    #login{display:none;justify-content:space-between;align-items:center;padding-left:1%;color:#fff;height:2vh;margin-top:1vh;border-left:1px solid #ccc;font-size:1.1em;}
    #login img{width:9%;}

    #pesquisar{display:none;}
    #pesquisar i{font-size:1.7em;margin-top:12%;}

/* MD */
@media screen and (min-width: 992px)
{
    #red-menu{display:block !important;}
    #redeSociais{display:flex;}
    #login{display:flex;}
    #pesquisar{display:block;}
    .item-red-menu img{width:16% !important;}
}

@media screen and (min-width: 1200px)
{
    .item-red-menu img{width:22% !important;}
    #content-red-menu img:nth-child(4){width:12%;}
    .item-red-menu:nth-child(4) img{width:22%;}
    #content-red-menu{font-size:.75em;}
    #pesquisar i{font-size:2em;margin-top:14%;}
}

</style>