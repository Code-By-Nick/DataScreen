<template>
  <div class="fill-parent"
       dg-chart-auto-resize="true"
       dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
       dg-chart-theme="{color:'#F0F0F0',actualBackgroundColor:'#141c47'}">
      <div class="head">
          <div class="title">
              <div class="title-left"></div>
              <div class="title-value"><label class="title-value-text">数据大屏展示</label><div class="header-img"></div></div>
              <div class="title-right"></div>
          </div>
      </div>
      <div class="content">
          <div class="layout layout-left-top">
              <div class="panel border-all title-bg">
                  <div class="title"><label>居民户籍</label></div>
                  <div class="chart" dg-chart-widget=""><ResidentRegist></ResidentRegist></div>
                  <div class="border-foot"></div>
              </div>
          </div>
          <div class="layout layout-left-center">
              <div class="panel border-all title-bg">
                  <div class="title"><label>党员年龄分布</label></div>
                  <div class="chart" dg-chart-widget=""><AgeDistribution></AgeDistribution></div>
                  <div class="border-foot"></div>
              </div>
          </div>
          <div class="layout layout-left-bottom">
              <div class="panel border-all title-bg">
                  <div class="title"><label>出生与死亡</label></div>
                  <div class="chart" dg-chart-widget=""><BirthDeath></BirthDeath></div>
                  <div class="border-foot"></div>
              </div>
          </div>
          <div class="layout layout-center-top">
              <div class="panel border-all">
                  <div class="title"><label>人口属性统计</label></div>
                  <div class="chart" dg-chart-widget="">
                      <div class="two_grid">
                          <div class="two_one"><SexClass></SexClass></div>
                          <div class="two_two"><AreaMap></AreaMap></div>
                          <div class="two_three"></div>
                          <div class="two_four"><PartyClass></PartyClass></div>
                      </div>
                  </div>
                  <div class="border-foot"></div>
              </div>
          </div>
          <div class="layout layout-center-bottom">
              <div class="panel border-all">
                  <div class="title"><label>疫情防控</label></div>
                  <div class="chart" dg-chart-widget=""><EpidemicPrevent></EpidemicPrevent></div>
                  <div class="border-foot"></div>
              </div>
          </div>
          <div class="layout layout-right-top">
              <div class="panel border-all title-bg">
                  <div class="title"><label>年龄分布</label></div>
                  <div class="chart" dg-chart-widget=""><PeopleCount></PeopleCount></div>
                  <div class="border-foot"></div>
              </div>
          </div>
          <div class="layout layout-right-bottom">
              <div class="panel border-all title-bg">
                  <div class="title"><label>居民社保</label></div>
                  <div class="chart" dg-chart-widget=""><SocialSecurity></SocialSecurity></div>
                  <div class="border-foot"></div>
              </div>
          </div>
      </div>
<!--      <canvas id="canvas" style="position: absolute;top: 0;left: 0;z-index: -1"></canvas>-->
  </div>
</template>

<script>
// @ is an alias to /src

// import echarts from "echarts";
//
import ResidentRegist from '@/components/ResidentRegist'
// import FoodSubsidy from '@/components/FoodSubsidy'
import BirthDeath from '@/components/BirthDeath'
import SocialSecurity from '@/components/SocialSecurity'
import EpidemicPrevent from '@/components/EpidemicPrevent'
import PeopleCount from '@/components/PeopleCount'

import PartyClass from '@/components/PartyClass'
import SexClass from '@/components/SexClass'
import AgeDistribution from "@/components/AgeDistribution";
import AreaMap from "@/components/AreaMap";


export default {
    name: 'HomeView',
    components: {
        ResidentRegist,
        // FoodSubsidy,
        BirthDeath,
        SocialSecurity,
        EpidemicPrevent,
        PeopleCount,
        SexClass,
        PartyClass,
        AgeDistribution,
        AreaMap
    }
}
</script>

<style scoped lang="scss">


.two_grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .two_one{
        grid-column: 1 / 3;
    }

    .two_two{
        grid-column: 3 / 9;
        grid-row: 1 / 3;
    }

    .two_three{
        grid-column: 7 / 9;
        grid-row: 1 / 3;
    }

    .two_four{
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }
}

.chart:empty{
    border: 1px dashed;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    opacity: 0.3;
}
.chart:empty::after{
    content: "图表";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1rem;
    margin-left: -1rem;
}

/*body{
    color: #FFF;
    margin: 0 0;
    padding: 0 0;
    background: url(../../public/bg.png);
}*/

.fill-parent{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #FFF;
    background: url(../../public/bg.png);
}
.head{
    height: 4rem;
}

.head .title .header-img {
    background: url(../../public/head.gif) no-repeat center center;
    background-size: 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 1.8rem;
}



.head .title{
    font-size: 1.8rem;
    text-align: center;
    margin-top: 0.5rem;
    height: 3rem;
    line-height: 3rem;
    position: relative;
}
.head .title .title-left{
    position: absolute;
    top: 50%;
    left: 0;
    width: 35%;
    height: 3px;
    margin-top: -1.5px;
    background: #0089ff;
}
.head .title .title-value{
    position: absolute;
    top: 0;
    left: 35%;
    right: 35%;
    bottom: 0;
    border-right: 3px solid #0089ff;
    border-left: 3px solid #0089ff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    .title-value-text{
        background: linear-gradient(to top, #00C6FF, #8AFFD2);;
        -webkit-background-clip: text;
        color: transparent;
    }
}
.head .title .title-right{
    position: absolute;
    top: 50%;
    right: 0;
    width: 35%;
    height: 3px;
    margin-top: -1.5px;
    background: #0089ff;
}
.content{
    position: absolute;
    top: 4.5rem;
    right: 0;
    bottom: 0;
    left: 0;
}
.layout{
    position: absolute;
    width: 25%;
}
.layout-left-top{
    left: 0;
    top: 0;
    height: 33.33%;
}
.layout-left-center{
    left: 0;
    top: 33.33%;
    height: 33.33%;
}
.layout-left-bottom{
    left: 0;
    top: 66.66%;
    height: 33.33%;
}
.layout-center-top{
    top: 0;
    left: 25%;
    right: 25%;
    width: 50%;
    height: 66.6%;
}
.layout-center-bottom{
    top: 66.6%;
    left: 25%;
    right: 25%;
    bottom: 0;
    width: 50%;
}
.layout-right-top{
    top: 0;
    right: 0;
    height: 50%;
}
.layout-right-bottom{
    top: 50%;
    right: 0;
    bottom: 0;
}
.panel{
    position: absolute;
    left: 0.5rem;
    top: 0.8rem;
    right: 0.5rem;
    bottom: 0.8rem;
    border: 1px solid #20558b;
    -webkit-box-shadow: #07417a 0 0 10px;
    -moz-box-shadow: #07417a 0 0 10px;
    box-shadow: inset 0 0 30px #07417a;
}
.panel.border-left-top:before,
.panel.border-all:before{
    position: absolute;
    width: 1rem;
    height: 1rem;
    content: "";
    border-top: 3px solid #488aff;
    border-left: 3px solid #488aff;
    left: -1px;
    top: -1px;
}
.panel.border-right-top:after,
.panel.border-all:after{
    position: absolute;
    width: 1rem;
    height: 1rem;
    content: "";
    border-top: 3px solid #488aff;
    border-right: 3px solid #488aff;
    right: -1px;
    top: -1px;
}
.panel.border-left-bottom .border-foot:before,
.panel.border-all .border-foot:before{
    position: absolute;
    width: 1rem;
    height: 1rem;
    content: "";
    border-bottom: 3px solid #488aff;
    border-left: 3px solid #488aff;
    left: -1px;
    bottom: -1px;
}
.panel.border-right-bottom .border-foot:after,
.panel.border-all .border-foot:after{
    position: absolute;
    width: 1rem;
    height: 1rem;
    content: "";
    border-bottom: 3px solid #488aff;
    border-right: 3px solid #488aff;
    right: -1px;
    bottom: -1px;
}
.panel > .title{
    position: absolute;
    top: 0.2rem;
    right: 0.5rem;
    left: 0.5rem;
    line-height: 2rem;
    font-size: 1.1rem;
    font-weight: bold;
}
.panel.title-bg > .title{
    position: absolute;
    top: -0.8rem;
    right: 20%;
    left: 20%;
    text-align: center;
    color: #fff;
    background: url(../../public/title-bg.png);
    background-size: 100% 100%;
}
.panel .chart{
    position: absolute;
    top: 2rem;
    right: 0.3rem;
    bottom: 0.3rem;
    left: 0.3rem;
}
.panel.title-bg .chart{
    top: 1.4rem;
}
.layout-center-bottom .panel{
    background-image: -webkit-radial-gradient(250px 250px at 50% 50%,hsla(209,99%,32%,28),hsla(228,100%,0%,0));
    background-image: radial-gradient(250px 250px at 50% 50%,hsla(209,99%,32%,28),hsla(228,100%,0%,0));
}
</style>
