<template>
    <div id="PartyClass" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
name: "PartyClass",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("PartyClass");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                title: {
                    text: '党员',
                    left: 'center',
                    top: 'center'
                },
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                tooltip: {
                    trigger: "item",
                    // formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 1548,
                                name: '群众'
                            },
                            {
                                value: 335,
                                name: '党员'
                            }

                        ],
                        radius: ['40%', '60%'],
                        color: [
                            '#a487e5',
                            '#eedd78',
                            '#dd6b66',
                            '#759aa0',
                            '#e69d87',
                            '#8dc1a9',
                            '#ea7e53',
                            '#73a373',
                            '#73b9bc',
                            '#91ca8c',
                            '#f49f42'
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