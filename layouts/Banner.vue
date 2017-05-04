<template>
    <el-row>
        <el-col id="banner" :xs="24" :sm="24">
            <article>
                <div id="content">
                    <h1>LOREM IPSUM DOLO SIT AMET!</h1>
                    <p>Lorem ipsum dolor sit amet, suco de cevadiss, é um leite divinis, qui tem lupuliz. Interagi no mé, cursus quis, vehicula ac.</p>
                    <a href><img style="margin-bottom:-8px;margin-right:10px;filter:invert(100%);" width="30" src="http://faculdade.ienh.com.br/Theme/CSS/icon_faculdade_gray.png" />Learn More</a>
                </div>
            </article>
            <video id="video" autoplay muted loop src="http://soriano.esy.es/video.mp4"></video>
        </el-col>
    </el-row>
</template>

<style>
#banner{height:100vh;overflow:hidden;}
#video{z-index:1;min-width: 100%;}
#banner article{z-index:3;position:absolute;left:0;right:0;text-align: center;}
#content{margin:auto;margin-top:30vh;max-width:90%;}
#content h1 {margin-bottom:1.6em;color:#dd5456;letter-spacing:8px;}
#content p {margin-bottom: 32px;/*color:#4b5d7a;*/color:#3d3d3d3;text-shadow:2px 2px 2px #fff;font-size:1.4em;letter-spacing:3px;text-align:justify;}
#content a {margin:auto;display:block;width:50%;background-color:#4b5d7a;margin-top:20px;padding:1.5%;color:#f5f5f5;font-size:1.4em;text-decoration:none;border-bottom: solid 4px #374863;letter-spacing:3px;}


/* SM */
@media screen and (min-width: 768px){
    #content h1 {font-size:2em;}
    #content a {width:30%;margin-top:20px;padding:1.5%;font-size:22px;}
}

/* MD */
@media screen and (min-width: 992px){}

/* LG */
@media screen and (min-width: 1200px){
    #content h1 {font-size:2.6em;}
    #content p {font-size:1.5em;}
    #content a {width:25%;font-size:1.2em;}
    #content{max-width:70%;}
}
</style>
