<template>
    <el-row>
        <el-col id="banner" :span="24">
            <slot name="imagem"  ></slot>
            <slot></slot>
            <div  class="shadow"></div>
        </el-col>
    </el-row>
</template>

<style>
    #banner{
        max-height:70vh;
        min-height:50vh;
        overflow:hidden;
        margin-top:90px;
    }
    .el-banner{width:100%;height:auto;}

    @media screen and (min-width: 992px){
        #banner{margin-top:0 !important;}
    }

    .shadow {
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        box-shadow: inset 0px 0px 56px 36px rgba(0,0,0,0.45);
        top: 0;
        left: 0;
        pointer-events: none;
    }
</style>
