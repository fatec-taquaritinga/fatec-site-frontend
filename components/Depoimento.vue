<template>
    <div class="depo">
        <div class="depo-txt">
            <p>{{texto}}</p>
            <p><strong>{{nome}}</strong></p>
            <p>{{info}}</p>
        </div>
        <img :src="img" >
    </div>
</template>

<script>
    export default {
        props: ["texto","nome","info","img"]
    }
</script>

<style>
    #depoimentos{
        width:80%;
        margin:auto;
        margin-bottom:100px;
    }

    .depo{
        margin-bottom:60px;
        background-color:#fff;
        border-radius:4px;
        height:200px;
        padding-top:3%;
        padding-left:3%;
        padding-right:3%;
    }

    .depo-txt{
        height:82%;
        color:gray;
        padding:2%;
    }

    .depo-txt p{
        text-align:justify; 
        font-size:1em;
    }
    .depo-txt p+p{
        margin-top:5px; 
        text-align:center; 
    }
    .depo-txt p:last-child{
        margin-bottom:5px; 
        text-align:center;  
    }

    .depo img{
        width:90px;
        height:90px;
        border-radius:50%;
        display:block;
        margin:auto;
        border:3px solid #eee;
        margin-bottom:-50px;
    }


    @media screen and (min-width: 480px){
        .depo-txt p{
            font-size:1.2em;
        }
    }

    @media screen and (min-width: 768px)
    {
        .depo-txt p{
            font-size:1.3em;
        }
        #depoimentos{
            width:82%;
        }
    }

    @media screen and (min-width: 992px)
    {
        #depoimentos{
            display:flex;
            justify-content:space-between;
        }
        .depo{
            width:32.5%;
            height:280px;
            margin-bottom:0;
            padding-top:2%;
            padding-left:2%;
            padding-right:2%;
        }
        .depo-txt p{
            font-size:1.2em;
        }
    }

    @media screen and (min-width: 1200px)
    {
        .depo-txt{
            height:75%;
        }
        .depo-txt p{
            font-size:1em;
        }
        .depo{
            height:190px;
        }
    }
</style>