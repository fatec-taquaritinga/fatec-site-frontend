<template>
    <el-row>
        <el-col id="footer" :span="24">
            <el-col class="box" :xs="{span:20, offset:2}"  :sm="{span:12, offset:0}" :md="{span:5,offset:1}" :lg="5">
                <img src="../assets/logos/logo-footer.svg" />
            </el-col>

            <el-col class="box" :xs="{span:20, offset:2}" :sm="{span:12, offset:0}" :md="{span:5,offset:0}" :lg="5">
                <div class="icon">
                    <i class="material-icons">room</i>
                </div>
                <div class="parag">    
                    <p> Av. Dr. Flávio Henrique Lemos, 585</p>
                    <p>Portal Itamaracá, Taquaritinga - SP</p>
                    <p>CEP: 15.900-000</p>
                </div>
            </el-col>

            <el-col class="box" :xs="{span:20, offset:2}"  :sm="{span:12, offset:0}" :md="{span:5,offset:0}" :lg="5">
               <div class="icon">
                    <i class="material-icons">call</i>
               </div>
               <div class="parag">     
                    <p> (16) 3252-5250</p>
                    <p>(16) 3252-5152</p>
                </div>
            </el-col>

            <el-col class="box" :xs="{span:20, offset:2}"  :sm="{span:12, offset:0}" :md="{span:5,offset:0}" :lg="5">
                <div class="icon">
                    <i class="material-icons">info_outline</i>
                </div>
                <div class="parag">    
                    <p> www.fatectq.edu.br</p>
                    <p>facebook.com/fatec-taquaritinga</p>
                    <p>youtube.com/fatectaquaritinga</p>
                </div>
            </el-col>

        </el-col>
    </el-row>
</template>

<style>
    #footer{
        background-color:#3a5461;
        color: #fff;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        padding-bottom:60px;
    }

    .box {
        padding-top:10%;
        display:flex;
        justify-content: center;
    }

    .box img{
        width:45% !important;
        margin-top:-10%;
    }



    @media screen and (min-width: 992px)
    {
        .box img{
            width:65% !important;
        }

        .box{
           margin-bottom:60px;
        }

        #footer{
            padding-bottom:0px;
        }
    }

</style>
