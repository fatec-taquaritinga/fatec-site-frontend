<template>
    <el-row>
        <el-col id="banner" :span="24">
            <video  id="video" class="el-banner" autoplay muted loop src="video.mp4" v-if="video" ></video>
            <img class="el-banner" src="http://soriano.esy.es/banner.jpg" v-if="!video" >
        </el-col>
    </el-row>
</template>


<script>
  export default {
    data(){
        return{
            video:true
        }
    }
  }
</script>

<style>
    #banner{max-height:70vh;min-height:50vh;;overflow:hidden;margin-top:70px;}
    .el-banner{max-width:100%;height:auto;}

    @media screen and (min-width: 992px){
        #banner{margin-top:0 !important;}
    }
</style>
