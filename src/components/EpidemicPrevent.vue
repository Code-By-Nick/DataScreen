<template>
    <div id="EpidemicPrevent" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "EpidemicPrevent",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("EpidemicPrevent");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                lazyUpdate: true,
                // title: {
                //     text: 'Stacked Area Chart'
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['近一周', '当前月', '近一年', 'Direct', 'Search Engine'],
                    selected:{
                        '近一周':true,
                        '当前月':false,
                        '近一年':false
                    },
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name:'返乡人数'
                    }
                ],
                series: [
                    {
                        name: '近一周',
                        type: 'bar',
                        smooth: true,
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#00FFE3"
                                },
                                    {
                                        offset: 1,
                                        color: "#4693EC"
                                    }
                                ])
                            }
                        },
                        data: [150, 232, 201, 154, 190, 330, 410,201, 154, 190, 330,410,201, 154,50,201, 154, 190, 330, 154,50,201, 154, 190, 330,410,201, 154,50,201]
                    },
                    {
                        name: '当前月',
                        type: 'line',
                        smooth: true,
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '近一年',
                        type: 'line',
                        smooth: true,
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]

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