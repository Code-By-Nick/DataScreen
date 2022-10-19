<template>
    <div id="SexClass" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
name: "SexClass",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("SexClass");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                title: {
                    text: '性别',
                    // color:'#eee',
                    left: 'center',
                    top: 'center'
                },
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                tooltip:{
                    trigger:'item'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 1548,
                                name: '男'
                            },
                            {
                                value: 335,
                                name: '女'
                            }

                        ],
                        radius: ['40%', '60%'],
                        color: [
                            '#5F5FFB',
                            '#F2CF52'
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