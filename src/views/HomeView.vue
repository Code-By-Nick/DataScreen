<template>
    <el-container class="BoxContent">
        <el-header>
            <div class="header_title">
                <div>居民户籍表</div>
                <div>居民社保</div>
                <div>人口自然增减</div>
                <div>疫情防控</div>
                <div>粮食补贴</div>
                <div>党建事项</div>
                <div>权限设置</div>
            </div>
        </el-header>

        <el-main>
            <div class="main_content">
                <div class="one">
                    <ResidentRegist></ResidentRegist>
                </div>
                <div class="two">
                    <div class="two_grid">
                        <div class="two_one">qweqwe</div>
                        <div class="two_two">qweqweqe</div>
                        <div class="two_three"><PeopleCount></PeopleCount></div>
                        <div class="two_four">qweqweqweq</div>
                    </div>
                </div>
                <div class="three">
                    <FoodSubsidy></FoodSubsidy>
                </div>
                <div class="four">
                    <BirthDeath></BirthDeath>
                </div>
                <div class="five">
                    <SocialSecurity></SocialSecurity>
                </div>
                <div class="six">
                    <EpidemicPrevent></EpidemicPrevent>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
// @ is an alias to /src

// import echarts from "echarts";

import ResidentRegist from '@/components/ResidentRegist'
import FoodSubsidy from '@/components/FoodSubsidy'
import BirthDeath from '@/components/BirthDeath'
import SocialSecurity from '@/components/SocialSecurity'
import EpidemicPrevent from '@/components/EpidemicPrevent'
import PeopleCount from '@/components/PeopleCount'


export default {
  name: 'HomeView',
  components: {
      ResidentRegist,
      FoodSubsidy,
      BirthDeath,
      SocialSecurity,
      EpidemicPrevent,
      PeopleCount
  }
}
</script>

<style scoped lang="scss">
.BoxContent{
    height: 100%;

    .el-header{
        //display: flex;
        //align-items: center;

        .header_title{
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
            color: white;
        }
    }

    .main_content{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 5px;

        .one{
            //background-color: #42b983;
            grid-row: 1 / 4;
            grid-column: 1 / 4;
        }

        .two{
            //background-color: coral;
            grid-row: 1 / 4;
            grid-column: 4 / 10;

            .two_grid{
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);

                .two_four{
                    grid-column: 1 / 2;
                    grid-row: 2 / 3;
                }

                .two_two,.two_three{
                    grid-row: 1 / 3;
                }
            }
        }

        .three{
            //background-color: aqua;
            grid-row: 1 / 4;
            grid-column: 10 / 13;
        }

        .four{
            //background-color: antiquewhite;
            grid-column: 1 / 5;
            grid-row: 4 / 6;
        }

        .five{
            //background-color: chartreuse;
            grid-column: 5 / 9;
            grid-row: 4 / 6;
        }

        .six{
            //background-color: gold;
            grid-column: 9 / 13;
            grid-row: 4 / 6;
        }
    }
}

</style>
