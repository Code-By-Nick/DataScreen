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
            seriesData:[1200, 200, 150, 80]
        }
    },
    mounted() {
        this.drawLine("SocialSecurity");
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                lazyUpdate: true,
                type: "bar",
                label: {
                    // 柱图头部显示值
                    show: true,
                    position: "top",
                    color: "#fff",
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
                    name:'数量(人)',
                    type: 'value'
                },
                series: [
                    {
                        data: this.seriesData,
                        type: 'bar'
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



   /*     AutoPlay(){
            // console.log(option)
            let app = {
                currentIndex: -1,
            };
            setInterval(function () {
                let dataLen = this.seriesData.length;

                // 取消之前高亮的图形
                this.charts.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex
                });
                app.currentIndex = (app.currentIndex + 1) % dataLen;
                //console.log(app.currentIndex);
                // 高亮当前图形
                this.charts.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                // 显示 tooltip
                this.charts.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex
                });

            }, 2000);
        }*/
    }
}
</script>

<style scoped>

</style>