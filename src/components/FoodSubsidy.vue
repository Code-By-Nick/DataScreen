<template>
    <div id="foodSubsidy" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: "FoodSubsidy",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        }
    },
    mounted() {
        this.drawLine("foodSubsidy");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                title: {
                    text: '粮食补发',
                    left: 'center',
                    top: 'center'
                },
                tooltip:{
                    trigger:'item'
                },
                legend:{
                    //纵向
                    orient: 'vertical',
                    top: '2%',
                    left: '30%',
                    //图例距离饼图的距离
                    itemGap: 40,
                    itemWidth: 14,// 设置图例图形的宽
                    itemHeight: 14,



                },

                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 1500,
                                name: '领取金额'
                            },
                            {
                                value: 500,
                                name: '未领取金额'
                            }

                        ],
                        radius: ['45%', '60%'],
                        color: [
                            '#a283f1',
                            '#e7e064',
                        ]
                    }
                ]

            });
        },
    }
}
</script>

<style scoped>
/*#foodSubsidy{
    background: transparent;
}*/

</style>