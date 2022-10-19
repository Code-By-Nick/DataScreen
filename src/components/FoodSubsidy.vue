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
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                title: {
                    text: '粮食补发',
                    left: 'center',
                    top: 'center'
                },
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                lazyUpdate: true,
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
                            '#b9b7ff',
                            '#e7e064',
                        ]
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
                if (count === 5) {
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
/*#foodSubsidy{
    background: transparent;
}*/

</style>