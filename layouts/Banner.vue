<template>
    <el-row>
        <el-col id="banner" :xs="24" :sm="24">
            <video :width="largura" id="video" autoplay muted loop src="video.mp4"></video>
        </el-col>
    </el-row>
</template>


<script>
  export default {
    data(){
        return{
            largura: 0
        }
    },
    mounted(){
        this.largura = window.innerWidth
        window.addEventListener("resize", ()=>{
            this.largura = window.innerWidth
        })
    }
  }
</script>

<style>
#banner{max-height:80vh;overflow:hidden;padding-top:10vh;}
</style>
