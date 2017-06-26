<template>
    <div class="item-noticia">
        <img :src="img" >
        <p>{{texto}}</p>
    </div>
</template>

<script>
    export default {
        props:["img","texto"]
    }
</script>

<style>
    .item-noticia{
        width:100%;
        margin-bottom:30px;
    }

    .item-noticia img{
        width:100%;
        max-width:500px;
        height:auto;
        border-radius:4px;
    }

    .item-noticia p{
        font-size:1em !important;
    }

    @media screen and (min-width: 768px)
    {
        .item-noticia{
            width:48%;
            margin-bottom:10px;
        }
    }

    @media screen and (min-width: 992px)
    {
        .item-noticia{
            width:25%;
            padding:1%;
        }
    }
</style>