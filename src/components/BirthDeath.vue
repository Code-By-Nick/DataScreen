<template>
    <div id="BirthDeath" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: "BirthDeath",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("BirthDeath");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                lazyUpdate: true,
                // title: {
                //     text: 'Stacked Line'
                // },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['出生', '迁入', '迁出', '死亡']
                },
                grid: {
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },

                xAxis: {
                    name:'年份',
                    type: 'category',
                    boundaryGap: false,
                    data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
                },
                yAxis: {
                    name:'数量（个）',
                    type: 'value'
                },
                series: [
                    {
                        name: '出生',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '迁入',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '迁出',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '死亡',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]

            });
        },

    }
}
</script>

<style scoped>

</style>