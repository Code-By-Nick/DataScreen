<template>
    <div id="PeopleCount" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "PeopleCount",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("PeopleCount");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                title: {
                    text: 'Funnel'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                // toolbox: {
                //     feature: {
                //         dataView: { readOnly: false },
                //         restore: {},
                //         saveAsImage: {}
                //     }
                // },
                legend: {
                    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
                },
                series: [
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        left: '10%',
                        top: 60,
                        bottom: 60,
                        width: '80%',
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'ascending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 40, name: 'Inquiry' },
                            { value: 20, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 90, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    }
                ]

            });
        },
    }
}
</script>

<style scoped>

</style>