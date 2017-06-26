<template>
    <div class="cards" :body-style="{padding:0}">
        <img :src="img" class="image" />

        <div class="info-curso" >
            <h1 :style="{color:colorDefault}">{{nome}}</h1>
            <h2><strong>Período:</strong>{{periodo}}</h2>
            <div class="btn-curso" :style="{backgroundColor:colorDefault}">Saiba Mais...</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["img","nome","periodo","colorDefault"]
    }
</script>

<style>
    .cards{
        margin:auto;
        margin-bottom:20px;
        max-width:500px;
        border-radius:7px;
        border:1px solid #eee;
        box-shadow: 5px 5px 5px #eee;
        overflow:hidden;
    }

    .image{
        max-width:100%;
        max-height:400px;
        width: auto;
        height: auto;
    }

    .info-curso h1{
        text-align:center;
        font-size:1.2em;
        color:#2bb673;
        height:45px;
    }

    .info-curso h2{
        text-align:center;
        color:#58595b;
        font-size:.9em;
        font-weight:normal;
    }

    .btn-curso{
        width:110px;
        color:#fff;
        border-radius:5px;
        margin:auto;
        padding:7px;
        text-align:center;
        margin-bottom:30px;
        margin-top:8px;
        cursor:pointer;
        font-size:.8em;
    }

    .btn-curso:hover{
        opacity:.8;
    } 

    @media screen and (min-width: 758px)
    {
        .cards{
            width:48%;
            max-height:400px;
        }
    }

    @media screen and (min-width: 992px)
    {
        .cards{
            width:32%;
            margin-bottom:16px;
        }
    }
</style>