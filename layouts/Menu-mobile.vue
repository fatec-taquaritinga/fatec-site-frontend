<template>
    <div> 
        <input type="checkbox" id="mobile">   
        <div class="barra">
            <img src="../assets/logos/logo.svg"  />

            <nav>
                <a href><div class="link-menu-mobile"><i class="material-icons">business</i> Institucional <i class="material-icons down">keyboard_arrow_down</i> </div></a>
                <a href><div class="link-menu-mobile"><i class="material-icons">school</i> Cursos <i class="material-icons down">keyboard_arrow_down</i></div></a>
                <a href><div class="link-menu-mobile"><i class="material-icons">public</i> Área acadêmica <i class="material-icons down">keyboard_arrow_down</i></div></a>
                <a href><div class="link-menu-mobile"><i class="material-icons">info_outline</i> Vestibular <i class="material-icons down">keyboard_arrow_down</i></div></a>
                <a href><div class="link-menu-mobile"><i class="material-icons">group</i> Contato</div></a>
                <a href><div class="link-menu-mobile">FALTA ABRIR SUB-MENUS</div></a>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            window.addEventListener("resize", ()=>{
                document.querySelector("#mobile").checked = false
            })
        }
    }
</script>

<style>
    #mobile{
        display:none;
    }

    .barra img{
        width:100px;
        display:block;
        margin:auto;
        margin-top:10px;
        margin-bottom:20px;
    }

    .barra{
        background-color: #fff;
        top:0;
        bottom:0;
        min-width:250px;
        position:fixed;
        transition: all .5s linear;
        left:-300px;
        box-shadow:2px 2px 2px #ccc;
        z-index:2000;
        opacity:0;
    }

    nav{
        width:100%;
    }

    nav a{
        text-decoration: none;
    }

    .link-menu-mobile{
        padding-left:50px;
        padding-top:10px;
        font-size:1.2em;
        transition:all .2s linear;
        color:#333;
        display:flex;
        align-items:center;
    }

    .link-menu-mobile:hover{
        color:#b01116;
    }

    #mobile:checked ~ .barra{
        opacity:1;
        transform:translateX(300px);
    }

    .down{
        content:"keyboard_arrow_down";
        margin-top:5px;
    }
</style>