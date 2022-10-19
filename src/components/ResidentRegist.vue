<template>

        <!--为echarts准备一个具备大小的容器dom-->
        <div id="Regist" style="width: 100%; height: 100%"></div>

<!--    <div class="one_box">-->
<!--        <div class="one_box_title">居民户籍</div>-->
<!--        <div class="one_box_content">-->
<!--            <div>常住人口</div>-->
<!--            <div>流动人口</div>-->
<!--            <div>城镇人口</div>-->
<!--            <div>乡村人口</div>-->
<!--        </div>-->
<!--    </div>-->

</template>

<script>

import * as echarts from 'echarts';

// import echarts from "echarts";

export default {
    name: "ResidentRegist",
    data() {
        return {
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
        };
    },
    methods: {
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                // backgroundColor: '#0e202d',
                title: {
                    // text: "第三采油厂",
                    "subtext": "总数: 599",
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 20
                    },
                    "subtextStyle": {
                        "color": "#999",
                        "fontSize": 16
                    },
                    "x": "center",
                    "top": "0%"
                },
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                grid: {
                    top: 200,
                    bottom: 150
                },
                "tooltip": {},
                xAxis: {
                    "data": ["常住人口", "流动人口", "乡村人口"],
                    "axisTick": {
                        "show": false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        interval:0,
                        textStyle: {
                            color:  '#beceff',
                            fontSize:20,
                        },
                        margin: 80, //刻度标签与轴线之间的距离。
                    }
                },
                yAxis: {
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLine": {
                        "show": false
                    },
                    "axisLabel": {
                        "show": false
                    }
                },
                series: [
                    {
                        "name": "",
                        "type": "pictorialBar",
                        "symbolSize": [50, 25],
                        "symbolOffset": [0, -10],
                        "z": 12,
                        "data": [
                            {
                            "name": "常住人口",
                            "value": "981",
                            "trueVal": "98",
                            "symbolPosition": "end",
                            "itemStyle": {
                                "normal": {
                                    "color": "#00fff5"  //圆柱顶部颜色
                                }
                            }
                        },
                            {
                            "name": "流动人口",
                            "value": "1000",
                            "trueVal": "100",
                            "symbolPosition": "end",
                            "itemStyle": {
                                "normal": {
                                    "color": "#ffcc00" //圆柱顶部颜色
                                }
                            }
                        },
                            {
                            "name": "乡村人口",
                            "value": "900",
                            "trueVal": "90",
                            "symbolPosition": "end",
                            "itemStyle": {
                                "normal": {
                                    "color": "#b9b7ff" //圆柱顶部颜色
                                }
                            }
                        }]
                    },  //圆柱顶部
                    {
                        "name": "",
                        "type": "pictorialBar",
                        "symbolSize": [50, 25],
                        "symbolOffset": [0, 12],
                        "z": 12,
                        "data": [
                            {
                                "name": "常住人口",
                                "value": "981",
                                "trueVal": "98",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#43bafe" //圆柱底部颜色
                                    }
                                }
                            },
                            {
                                "name": "流动人口",
                                "value": "1000",
                                "trueVal": "100",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#ff7800" //圆柱底部颜色
                                    }
                                }
                            },
                            {
                                "name": "乡村人口",
                                "value": "900",
                                "trueVal": "90",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#e9a5ff" //圆柱底部颜色
                                    }
                                }
                            }]
                    },  //圆柱底部
                    {
                        "name": "",
                        "type": "pictorialBar",
                        "symbolSize": [75, 37],
                        "symbolOffset": [0, 22],
                        "z": 11,
                        "data": [
                            {
                            "name": "常住人口",
                            "value": "981",
                            "trueVal": "98",
                            "itemStyle": {
                                "normal": {
                                    "color": "transparent",
                                    "borderColor": "#43bafe", //底部内圆圈颜色
                                    "borderWidth": 5
                                }
                            }
                        },
                            {
                            "name": "流动人口",
                            "value": "1000",
                            "trueVal": "100",
                            "itemStyle": {
                                "normal": {
                                    "color": "transparent",
                                    "borderColor": "#ff7800", //底部内圆圈颜色
                                    "borderWidth": 5
                                }
                            }
                        },
                            {
                            "name": "乡村人口",
                            "value": "900",
                            "trueVal": "90",
                            "itemStyle": {
                                "normal": {
                                    "color": "transparent",
                                    "borderColor": "#e9a5ff", //底部内圆圈颜色
                                    "borderWidth": 5
                                }
                            }
                        }]
                    },  //光环内圈
                    {
                        "name": "",
                        "type": "pictorialBar",
                        "symbolSize": [100, 50],
                        "symbolOffset": [0, 31],
                        "z": 10,
                        "data": [
                            {
                            "name": "常住人口",
                            "value": "981",
                            "trueVal": "98",
                            "itemStyle": {
                                "normal": {
                                    "color": "transparent",
                                    "borderColor": "#43bafe",  //底部外圆圈颜色
                                    "borderType": "dashed",
                                    "borderWidth": 5
                                }
                            }
                        },
                            {
                            "name": "流动人口",
                            "value": "1000",
                            "trueVal": "100",
                            "itemStyle": {
                                "normal": {
                                    "color": "transparent",
                                    "borderColor": "#ff7800", //底部外圆圈颜色
                                    "borderType": "dashed",
                                    "borderWidth": 5
                                }
                            }
                        },
                            {
                            "name": "乡村人口",
                            "value": "900",
                            "trueVal": "90",
                            "itemStyle": {
                                "normal": {
                                    "color": "transparent",
                                    "borderColor": "#e9a5ff", //底部外圆圈颜色
                                    "borderType": "dashed",
                                    "borderWidth": 5
                                }
                            }
                        }]
                    },  //光环外圈
                    {
                        "type": "bar",
                        "silent": true,
                        "barWidth": 50,
                        "barGap": "-100%",

                        "data": [
                            {
                            "name": "常住人口",
                            "value": "981",
                            "trueVal": "98",
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "top",
                                    "distance": 20,
                                    "textStyle": {
                                        "color": "#00fff5", //柱子对应数值颜色
                                        "fontSize": 20
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "type": "linear",
                                        "global": false,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(0,255,245,0.5)"
                                        }, {
                                            "offset": 1,
                                            "color": "#43bafe" //底部渐变颜色
                                        }]
                                    }
                                }
                            }
                        },
                            {
                            "name": "流动人口",
                            "value": "1000",
                            "trueVal": "100",
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "top",
                                    "distance": 20,
                                    "textStyle": {
                                        "color": "#ffcc00", //柱子对应数值颜色
                                        "fontSize": 20
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "type": "linear",
                                        "global": false,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(255,204,0,0.5)"
                                        }, {
                                            "offset": 1,
                                            "color": "#ff7800" //底部渐变颜色
                                        }]
                                    }
                                }
                            }
                        },
                            {
                            "name": "乡村人口",
                            "value": "900",
                            "trueVal": "90",
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "top",
                                    "distance": 20,
                                    "textStyle": {
                                        "color": "#b9b7ff", //柱子对应数值颜色
                                        "fontSize": 20
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "type": "linear",
                                        "global": false,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(185,183,255,0.5)"
                                        }, {
                                            "offset": 1,
                                            "color": "#e9a5ff" //底部渐变颜色
                                        }]
                                    }
                                }
                            }
                        }]
                    }   //柱体
                ]
        });
        },
    },
    //调用
    mounted() {
        this.drawLine("Regist");
        // this.$nextTick(function () {
        //     this.drawLine("main");
        // });
    },
}
</script>

<style scoped lang="scss">

.one_box{
    width: 100%;
    height: 100%;
    //background:#42b983;
    box-sizing: border-box;
    border: 2px solid #b8b1b1;

    .one_box_title{
        position: relative;
        top: -15px;
        margin: 0 auto;
        width: 100px;
        height: 30px;
        background: #72869c;
    }

    .one_box_content{
        display: flex;
        flex-direction:column;
        //align-content: space-between;
        height: calc(100% - 30px);

        > div{
            height: 25%;
        }
    }
}

</style>