<template>
    <div id="SocialSecurity" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
name: "SocialSecurity",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("SocialSecurity");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                type: "bar",
                label: {
                    // 柱图头部显示值
                    show: true,
                    position: "top",
                    color: "#333",
                    fontSize: "12px",
                    formatter: (params) => {
                        return params.value[params.encode.x[0]];
                    },
                },
                tooltip:{
                    trigger:'item'
                },
                xAxis: {
                    type: 'category',
                    data: ['缴纳社保', '缴纳医保', '领取低保', '取消低保']
                },
                yAxis: {
                    name:'数量',
                    type: 'value'
                },
                series: [
                    {
                        data: [1200, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]

            });
        },
    }
}
</script>

<style scoped>

</style>