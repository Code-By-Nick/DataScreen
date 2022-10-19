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
            indexNum : 0,
            colorList: ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']

        }
    },
    mounted() {
        this.drawLine("PeopleCount");

    },
    methods:{
        drawLine(id) {
            let that = this;
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                backgroundColor:'rgba(128, 128, 128, 0.1)',

                title: {
                    text: '年龄',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontSize: 15
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [{
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['24%', '45%'],
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 30,
                    emphasis:{
                        itemStyle:{
                            borderColor: '#f3f3f3',
                            borderWidth: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return that.colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{a|{b}：{d}%}\n{hr|}',
                        rich: {
                            hr: {
                                backgroundColor: 't',
                                borderRadius: 3,
                                width: 3,
                                height: 3,
                                padding: [3, 3, 0, -12]
                            },
                            a: {
                                padding: [-30, 15, -20, 15]
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 20,
                            length2: 30,
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    data: [
                        {
                            'name': '0-17岁',
                            'value': 5600
                        }, {
                            'name': '18-25岁',
                            'value': 3600
                        }, {
                            'name': '26-35岁',
                            'value': 1500
                        }, {
                            'name': '35-45岁',
                            'value': 2000
                        }, {
                            'name': '45-55岁',
                            'value': 899
                        }, {
                            'name': '55-65岁',
                            'value': 4000
                        }, {
                            'name': '65岁以上',
                            'value': 40
                        }
                    ],
                }]

            });
            this.fun();
        },

        fun() {
            let that = this;
             setInterval(() => {
                // console.log(that.indexNum)
                this.charts.dispatchAction({
                    type: 'hideTip',
                    seriesIndex: 0,
                    dataIndex: that.indexNum
                });
                // 显示提示框
                this.charts.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: that.indexNum
                });
                // 取消高亮指定的数据图形
                this.charts.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: that.indexNum == 0 ? 5 : that.indexNum - 1
                });
                this.charts.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: that.indexNum
                });
                that.indexNum++;
                if (that.indexNum > 5) {
                    that.indexNum = 0;
                }
            }, 3000)
        },


    }
}
</script>

<style scoped>

</style>