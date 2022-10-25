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
            seriesData:[1200, 200, 150, 80],
            color:['#3070cf', '#92ee4e', '#FBF73A', '#c42d2d'],
            colors: [
                {
                    type: 'linear',
                    x: 1,
                    x2: 1,
                    y: 0,
                    y2:1,
                    colorStops: [
                        {
                            offset: 0.8,
                            color: 'rgba(0,255,252,0.1)',
                        },
                        {

                            offset: 0,
                            color: '#30a4cf',
                        },
                        /*         {
                             offset: 0.8,   // 透明度
                             color: 'rgba(0,255,252,0.1)'
                         }, {
                             offset: 0.5,
                             color: '#6DD4E5'
                         }, {
                             offset: 0.2,
                             color: '#0EADC9'
                         }, {
                             offset: 0.1,
                             color: '#218bd1'
                         }*/
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#78cc40',
                        },
                        {
                            offset: 1,
                            color: '#2fd28d',
                        },
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#f5a43a',
                        },
                        {
                            offset: 1,
                            color: '#c4742d',
                        },
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(245,89,58,0.78)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(196,45,45,1)',
                        },
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#f5593a',
                        },
                        {
                            offset: 1,
                            color: '#c42d2d',
                        },
                    ],
                },
            ],
            colors1 : [
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0.3,
                            color: '#4bcde4',
                        },
                        {
                            offset: 1,
                            color: '#4b88e4',
                        },
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#c6e755',
                        },
                        {
                            offset: 1,
                            color: '#92ee4e',
                        },
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#ebe962',
                        },
                        {
                            offset: 1,
                            color: '#ffb401',
                        },
                    ],
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fa8c56',
                        },
                        {
                            offset: 1,
                            color: '#f5593a',
                        },
                    ],
                },
            ],
            xList:['缴纳社保', '缴纳医保', '领取低保', '取消低保'],

            xData: '',
            MyBarWidth:18
        }
    },
    mounted() {
        this.drawLine("SocialSecurity");
        this. GetData();
    },
    methods:{
        GetData(){
            this.axios.get('http://10.1.3.5:8080/count/JMSB').then(res => {
                console.log(res)
            })
        },


        drawLine(id) {
            // let that = this;
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                backgroundColor:'rgba(128, 128, 128, 0.1)',

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },

                legend: {
                    data: ['缴纳社保', '缴纳医保', '领取低保', '取消低保']
                },
                xAxis: [
                    {
                        name: '年份',
                        type: 'category',
                        data: ['2019', '2020', '2021'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '人数',

                    }
                ],
                series: [
                    {
                        name: '缴纳社保',
                        type: 'bar',
                        barGap: 0,
                        barWidth: this.MyBarWidth,
                        color:'#254DBB',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 人';
                            }
                        },
                        data: [
                            160,360,250
                        ]
                    },
                    {
                        name: '缴纳医保',
                        type: 'bar',
                        barWidth: this.MyBarWidth,
                        color:'#7fe03b',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 人';
                            }
                        },
                        data: [
                           188,222,138
                        ]
                    },
                    {
                        name: '领取低保',
                        type: 'bar',
                        barWidth: this.MyBarWidth,
                        color:'#FBF73A',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 人';
                            }
                        },
                        data: [
                            160,411,336
                        ]
                    },
                    {
                        name: '取消低保',
                        type: 'bar',
                        barWidth: this.MyBarWidth,
                        color:'#FA8E3D',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 人';
                            }
                        },
                        data: [
                            190,256,130
                        ]
                    }

                ]

            });

            this.AutoPlay();


            // this.xData = this.xList.map((item, index) => {
            //     return {
            //         value: item,
            //         textStyle: {
            //             color: that.color[index],
            //         },
            //     };
            // });
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
                if (count === 3) {
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