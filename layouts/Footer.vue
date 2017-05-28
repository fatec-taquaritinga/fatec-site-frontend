<template>
    <el-row>
        <el-col id="footer" :span="24">
            <el-col class="box" :xs="24" :sm="12" :md="8" :lg="6">
                <div class="content-box">
                    <p style="margin-top:-11%; font-size:5em" >Fatec</p>
                    <p style="margin-top:-10%; margin-left:51%">Taquaritinga</p>
                </div>
            </el-col>

            <el-col class="box" :xs="24" :sm="12" :md="8" :lg="6">
                <div class="content-box">
                    <p><img src="../assets/icons-footer/room.svg">Av. Dr. Flávio Henrique Lemos, 585</p>
                    <p class="parag">Portal Itamaracá, Taquaritinga - SP</p>
                    <p class="parag">CEP: 15.900-000</p>
                </div>
            </el-col>

            <el-col class="box" :xs="24" :sm="12" :md="8" :lg="6">
                <div class="content-box">
                    <p><img src="../assets/icons-footer/phone.svg">(16) 3252-5250</p>
                    <p class="parag">(16) 3252-5152</p>
                </div>
            </el-col>

            <el-col class="box" :xs="24" :sm="12" :md="8" :lg="6">
                <div class="content-box">
                    <p><img src="../assets/icons-footer/info_outline.svg">www.fatectq.edu.br</p>
                    <p class="parag">facebook.com/fatec-taquaritinga</p>
                    <p class="parag">youtube.com/fatectaquaritinga</p>
                </div>
            </el-col>

        </el-col>
    </el-row>
</template>

<style>
    #footer{
        clear:both;
        background-color:#3a5461;
        color: #fff;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .box {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-top: 5%;
        margin-bottom: 4%;
    }

    .parag {
         margin-left: 21px;
    }

    
</style>
