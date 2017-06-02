<template>
    <el-row id="menu-fixo" >
        <el-col id="box-logo" :xs="{span:7, offset:1}" :sm="{span:4, offset:1}" :md="{span:3, offset:2}">
            <img src="../assets/logos/logo.svg" />
        </el-col>
        
        <el-col id="child-menu-fixed"  :sm="{span:10, offset:2}" >
            
        </el-col>

        <el-col id="box-gov" :sm="5">
            <img src="../assets/logos/cps.svg" />
            <img src="../assets/logos/gov.svg" />
        </el-col>

        <el-col id="call-menu-mobile" :xs="{span:5, offset:10}" :sm="{span:5, offset:14}">
            <label for="mobile" ><i class="material-icons">menu</i></label>
        </el-col>

    </el-row>
</template>


<style>

#menu-fixo{
    background-color:#fff;
    left:0;
    right:0;
    top:-100px;
    height:75px;
    z-index:2000;
    position:fixed;
    background : -moz-linear-gradient(50% 0% -90deg,rgba(255, 255, 255, 1) 0%,rgba(252, 252, 252, 1) 44.96%,rgba(243, 244, 244, 1) 76.21%,rgba(230, 231, 232, 1) 100%);
    background : -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
    background : -webkit-gradient(linear,50% 0% ,50% 100% ,color-stop(0,rgba(255, 255, 255, 1) ),color-stop(0.4496,rgba(252, 252, 252, 1) ),color-stop(0.7621,rgba(243, 244, 244, 1) ),color-stop(1,rgba(230, 231, 232, 1) ));
    background : -o-linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
    background : -ms-linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#E6E7E8' ,GradientType=0)";
    background : linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(252, 252, 252, 1) 44.96%, rgba(243, 244, 244, 1) 76.21%, rgba(230, 231, 232, 1) 100%);
    box-shadow : 7px 7px 50px rgba(0, 0, 0, 0.65);
    filter: alpha(opacity=97) progid:DXImageTransform.Microsoft.Alpha(opacity=97) progid:DXImageTransform.Microsoft.dropshadow(OffX=7, OffY=7, Color='#000000') progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',endColorstr='#E6E7E8' , GradientType=0);
}


#box-logo{height:72px;display:flex;align-items:center;}
#box-logo img{width:70%;height:60%;max-height:80%;}

#child-menu-fixed{display:none;height:74px;font-size:.9em;color:#4A555C;}
#child-menu-fixed span{z-index:3;height:100%;padding-left:2%;display:flex;align-items:center;padding-right:2%;cursor:pointer;text-align:center;}
#child-menu-fixed span:hover{color:#b01116;transition:1s;}

#call-menu-mobile{height:74px;display:flex;align-items:center;justify-content:space-around;}
#call-menu-mobile i{padding:3%;font-size:2.3em;color:#b01116;cursor:pointer;}

#box-gov{display:none;height:70px;justify-content:flex-end;}
#box-gov img:first-child{width:18%;margin-right:2%;}
#box-gov img:last-child{width:40%;margin-left:2%;}



@media screen and (min-width: 992px)
{
    #child-menu-fixed{display:flex;}
    #box-gov{display:flex;}
    #call-menu-mobile{display:none;}
    #child-menu-fixed span{font-size:1em;}
}
</style>