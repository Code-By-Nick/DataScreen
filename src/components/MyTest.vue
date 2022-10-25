<template>
<!--    <div  ref="mapRef" style="width: 100%; height: 100%"></div>-->
    <dv-decoration-12 style="width:150px;height:150px;" />
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "MyTest",
    data() {
        return {
            charts: "",
            MyData: [
                {name: '满意', value: 30, itemStyle: {color: '#06307F'}, startRatio: 0, endRatio: 0.7},
                {name: '非常满意', value: 45, itemStyle: {color: '#F8E8CE'}, startRatio: 0.7, endRatio: 1},
                {name: '满意', value: 6, itemStyle: {color: '#F55A4D'}, startRatio: 0.7, endRatio: 1},
                {name: '基本满意', value: 14, itemStyle: {color: '#F8A556'}, startRatio: 0.7, endRatio: 1},
                {name: '不满意', value: 5, itemStyle: {color: '#35A5CF'}, startRatio: 0.7, endRatio: 1},
            ],
            optionConfig: {},
            option: ''
        }
    },
    mounted() {
        // this.drawLine();

    },
    methods: {
        drawLine() {
            this.charts = echarts.init(this.$refs.mapRef);

            this.option = {
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [50, 250],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: this.MyData
                    }
                ]
            };

            this.charts.setOption(this.option);
        }

    }
}
</script>

<style scoped>

</style>