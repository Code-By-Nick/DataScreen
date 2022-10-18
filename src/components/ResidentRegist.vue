<template>

        <!--为echarts准备一个具备大小的容器dom-->
<!--        <div id="Regist" style="width: 100%; height: 100%"></div>-->
    <div class="one_box">
        <div class="one_box_title">居民户籍</div>
        <div class="one_box_content">
            <div>常住人口</div>
            <div>流动人口</div>
            <div>城镇人口</div>
            <div>乡村人口</div>
        </div>
    </div>

</template>

<script>

import * as echarts from 'echarts';

// import echarts from "echarts";

export default {
    name: "ResidentRegist",
    data() {
        return {
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        };
    },
    methods: {
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                title: {
                    text: "全校分班人数统计",
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    top: "10%",
                    left: "center",
                },
                color: ['#6eb158', '#cdcdcd', '#3f8cff'],
                series: [
                    {
                        name: "分班情况",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 1048, name: "已分班人数" },
                            { value: 735, name: "未分班人数" },
                            { value: 580, name: "待认定人数" },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                        label: {
                            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}:}{c}  {per|{d}%}  ",
                            backgroundColor: "",
                            borderColor: "",
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {},
                        },
                    },
                ],

        });
        },
    },
    //调用
    mounted() {
        // this.drawLine("Regist");
        // this.$nextTick(function () {
        //     this.drawLine("main");
        // });
    },
}
</script>

<style scoped lang="scss">

.one_box{
    width: 100%;
    height: 100%;
    //background:#42b983;
    box-sizing: border-box;
    border: 2px solid #b8b1b1;

    .one_box_title{
        position: relative;
        top: -15px;
        margin: 0 auto;
        width: 100px;
        height: 30px;
        background: #72869c;
    }

    .one_box_content{
        display: flex;
        flex-direction:column;
        //align-content: space-between;
        height: calc(100% - 30px);

        > div{
            height: 25%;
        }
    }
}

</style>