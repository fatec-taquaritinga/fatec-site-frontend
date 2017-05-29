<template>
    <el-row>
        <iframe wframeborder="0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4416.693979282836!2d-48.51795703353!3d-21.42994720655985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b93bd3b48e7047%3A0x1808de33145ee4e0!2sFatec+Taquaritinga!5e0!3m2!1spt-BR!2sbr!4v1496014369733" allowfullscreen></iframe>

        <el-col id="footer" :span="24">
            <el-col id="footer-content" :span="20" :offset="2">

                <img width="200" src="../assets/logos/logo-footer.svg" />
                

                <div class="box">
                    <el-popover ref="popover111" placement="bottom" width="100" trigger="hover">
                        <p class="footer-popover"> (16) 3252-5250</p>
                        <p class="footer-popover">(16) 3252-5152</p>
                    </el-popover>
                    <i class="material-icons" v-popover:popover111>phone</i>


                    <el-popover  ref="popover222" placement="bottom" width="210" trigger="hover">
                        <p class="footer-popover"> www.fatectq.edu.br</p>
                        <p class="footer-popover">facebook.com/fatec-taquaritinga</p>
                        <p class="footer-popover">youtube.com/fatectaquaritinga</p>
                    </el-popover>
                    <i class="material-icons" v-popover:popover222>email</i>
                </div>
            </el-col>
        </el-col>
    </el-row>
</template>

<style>
    #footer{
        background-color:#3a5461;
        color: #fff;
    }

    #footer-content{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        align-items:center;
    }

    .box {
        display:flex;
        justify-content: space-between;
        align-items:center;
    }

    .box i{
        font-size:3em;
        cursor:pointer;
        border:1px solid #fff;
        border-radius:50% !important;
        margin-left:20px;
    }

    .footer-popover{
        text-align:center;
        font-size:1.1em;
    }


    iframe{
        width:100%;
        height:400px;
        border:0;
        margin-top:50px;
    }

    @media screen and (min-width: 992px)
    {

    }

</style>
