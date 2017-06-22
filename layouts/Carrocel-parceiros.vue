<template>
    <div class="box_carrossel">

        <div class="nav back" @click="clickBack">
		    <img src="data:image/png;base64,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" />
		</div>

        <ul class="carrossel">
            <li class="item" v-for="img of imgs">
                <img :src="img.src" :title="img.title" :alt="img.alt"/>
            </li>
        </ul>

        <div class="nav forth" @click="clickForch">
		    <img src="data:image/png;base64,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" />
		</div>
                
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgs: [
                    {src: require('../assets/carrocel-parceiros/1.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/2.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/3.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/4.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/5.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/6.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/1.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/2.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/3.png'), title: 'titulo 1', alt: ''},
                    {src: require('../assets/carrocel-parceiros/4.png'), title: 'titulo 1', alt: ''}
                ],
                totalImgs: 0,
                ident: 0,
                count: 0,
                slide: 0
            }
        },
        mounted() {
            //const carrossel       = document.querySelector(".carrossel")
            const item            = document.querySelector(".carrossel .item")
            this.totalImgs         = this.imgs.length
            this.setCarrosselWidth(parseInt(item.clientWidth) + (parseInt(item.clientWidth) * this.totalImgs))
            
            this.getTela()
            window.onresize = ()=>this.getTela()
        },
        methods: {
            clickBack() {
                if(this.ident >= 1){
                    this.ident--
                    this.setCarrosselmMarginLeft((parseInt(this.getCarrossel().marginLeft) + this.slide) + 'px')
                }
            },
            clickForch() {
                if(this.ident < this.count){
                    this.ident++
                    this.setCarrosselmMarginLeft((parseInt(this.getCarrossel().marginLeft) - this.slide) + 'px')
                }
            },
            getCarrossel() {
                return document.querySelector(".carrossel").style
            },
            setCarrosselWidth(width) {
                document.querySelector(".carrossel").style.width = width
            },
            setCarrosselmMarginLeft(mgLeft) {
                document.querySelector(".carrossel").style.marginLeft = mgLeft
            },
            getTela() { 
                let marginPadding = 30
                let numImages

                if( window.innerWidth <= 768  )numImages = 2
                else numImages = 4

                this.ident = 0
                this.setCarrosselmMarginLeft('0px')
                this.count = Math.floor( (this.totalImgs / numImages) - 1 )
                this.slide = (numImages * marginPadding) + ( document.querySelector(".carrossel img").clientWidth * numImages )
            }
        }
    }
</script>

<style>
    img{
        max-width:100%;
    }

    .box_carrossel{
        width:80%;
        margin: 10% auto;
        position:relative;
        padding:10px 30px;
        background-color:#fff;
        overflow:hidden;
        margin-top: 0;
        margin-bottom: 0;
    }

    .box_carrossel .nav{
        position:absolute;
        top:0;
        padding:0 5px;
        height:72px;
        background:#ccc;
        color:#fff;
        cursor:pointer;
        display:flex;
        align-items:center;
    }

    .box_carrossel .nav img{
        width:20px;
    }

    .box_carrossel .nav:hover{
        filter:invert(100%);
    }

    .box_carrossel .nav.back{
        left:0;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
    }

    .box_carrossel .nav.forth{
        right:0;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }

    .carrossel{
        list-style:none;
        width:1000%;
        background-color:#fff;
        transition:1s ease-in-out;
        padding:0;
        display:flex;
        align-items:center;
    }

    .carrossel .item{
        width:85px;
        padding:10px;
        margin-left:10px;
    }


    @media screen and (min-width: 480px) {
        .carrossel .item{width:173px;}
        .box_carrossel .nav{height:110px;}
    }
</style>