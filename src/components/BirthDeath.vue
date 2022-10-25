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
            legendData: ['出生', '迁入', '迁出', '死亡'],
            xAxisData:[ 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            seriesData:[
                {
                    name: '出生',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210, 230]
                },
                {
                    name: '迁入',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310, 210]
                },
                {
                    name: '迁出',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410, 321]
                },
                {
                    name: '死亡',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320, 350]
                }
            ]

        }
    },
    created() {
        this.GetData();
    },
    mounted() {

    },
    methods:{
        GetData(){
            this.axios.get('/count/findUserChangeVO').then(res => {
                console.log(res);
                this.xAxisData = res.data.data.years;
                this.legendData = res.data.data.status;
                let seriesDemo = res.data.data.value;
                for (let i = 0; i < seriesDemo.length; i++){
                    seriesDemo[i].type = 'line';
                    seriesDemo[i].stack = 'Total';
                }
                this.seriesData = seriesDemo;
                this.drawLine("BirthDeath");
            })
        },
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
                    data: this.legendData
                },
                grid: {
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    containLabel: true
                },

                xAxis: {
                    name:'年份',
                    type: 'category',
                    boundaryGap: false,
                    data: this.xAxisData
                },
                yAxis: {
                    name:'数量（人）',
                    type: 'value'
                },
                series: this.seriesData

            });
            this.AutoPlay();
        },
        AutoPlay(){
            let count = 0;
            setInterval(() => {
                this.charts.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: count
                });
                count++;
                if (count === 6) {
                    count = 0;
                }
                this.charts.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: count
                });
                this.charts.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: count
                });
            }, 2000);

        }

    }
}
</script>

<style scoped>

</style>