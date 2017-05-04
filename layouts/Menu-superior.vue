<template>
    <el-row>
        <el-col id="red-menu" :xs="24" :md="24">
            <el-col id="content-red-menu" :xs="24" :md="{span:14,offset:8}" :lg="{span:10,offset:12}">
       
                <el-col :xs="6" :md="3" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/biblioteca.svg" alt="Biblioteca"/>  Biblioteca</el-col>
                <el-col :xs="6" :md="3" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/siga.svg" alt="Siga"/>  Siga</el-col>
                <el-col :xs="6" :md="3" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/moodle.svg" alt="Moodle"/>  Moodle</el-col>
                <el-col :xs="6" :md="3" :lg="3" class="item-red-menu"><img src="../assets/icons-menu-sup/email.svg" alt="E-mail"/>  E-mail</el-col>
            
                <el-col :md="6" :lg="7" id="redeSociais">
                    <span>Encontre-nos:</span>
                    <img src="../assets/icons-menu-sup/facebook.svg"/>
                    <img src="../assets/icons-menu-sup/instagram.svg"/>
                    <img src="../assets/icons-menu-sup/youtube.svg"/>
                </el-col>

                <el-col :md="5" :lg="5" id="login">
                    <img src="../assets/icons-menu-sup/login.svg" />
                    <span>Entrar/Registrar</span>
                </el-col>
                
            </el-col>
        </el-col>
    </el-row>
</template>

<style>
#red-menu{position:fixed;bottom:0;left:0;right:0;height:10vh;background-color:#b01116;}
#content-red-menu{height:10vh;display:flex;justify-content:space-between;color:#fff;font-size:.8em;}
#content-red-menu img{filter:brightness(500%);margin-right:1%;}
.item-red-menu{display:flex;flex-direction:column;align-items:center;justify-content:center;border-left:1px solid #d81c21;border-right:1px solid #a3060b;}
.item-red-menu img{width:12%;}

#redeSociais{display:none;color:#fff;height:2vh;margin-top:1vh;padding-left:0.5%;padding-right:0.5%;border-left:1px solid #ccc;}
#redeSociais img{height:15px;}

#login{display:none;color:#fff;height:2vh;margin-top:1vh;padding-left:0.5%;border-left:1px solid #ccc;}


/* SM */
@media screen and (min-width: 768px){}

/* MD */
@media screen and (min-width: 992px)
{
    #red-menu{position:static;height:4vh;}
    #content-red-menu{height:4vh;}
    .item-red-menu{flex-direction:row;border:none;}
    .item-red-menu img{width:15%;}
     #redeSociais{display:flex;justify-content:space-around;align-items:center;}
    #redeSociais img{width:9%;}
    #login{display:block;justify-content:space-around;display:flex;align-items:center;padding-left:1%;}
    #login img{width:9%;}
    #content-red-menu img:nth-child(4){width:12%;}
    .item-red-menu:nth-child(4) img{width:20%;}
}

/* LG */
@media screen and (min-width: 1200px)
{
    .item-red-menu img{width:18%;}
    #content-red-menu img:nth-child(4){width:12%;}
    .item-red-menu:nth-child(4) img{width:22%;}
    #content-red-menu{font-size:.75em;}
}
</style>