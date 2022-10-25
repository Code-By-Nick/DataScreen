<template>
    <div ref="MyAreaMap"  style="width: 100%; height: 100%"></div>
</template>

<script>
// import MyMap from '../../public/hunan.json'
// import hengYang from '../../public/hengyang.json'

import china from '../../public/china.json'

import * as echarts from "echarts";

export default {
name: "AreaMap",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
            scatterData:[{
                value:[112.5678841,26.9850591]
            }]
        }
    },
    mounted() {
        this.drawLine();
        // console.log(hengYang);
    },
    methods:{
        drawLine() {
            this.charts = echarts.init(this.$refs.MyAreaMap,'dark');
            // this.charts = echarts.init(document.getElementById(id),'dark');
            echarts.registerMap('huNan',china)
            this.charts.setOption({
                backgroundColor:'transparent',
                // backgroundColor:'#8eb5dc',
                lazyUpdate: true,
                geo:{
                    type:'map',
                    map:'huNan',
                    zoom:1.75,
                    roam:false,
                    center:[105.3996999,35.7000709],
                    label:{
                        // show:true,

                        normal: {
                            show: true,
                            textStyle: {
                                color: '#f9fbfc'        //静态字体颜色
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#ffffff'    //选中的字体颜色
                            }
                        }
                    },
                    itemStyle:{
                        // areaColor:'rgba(98,161,229,0.1)',

                        // borderColor:'#2299ea',

                        normal: {
                            areaColor: 'rgba(101,236,236,0.02)',
                            borderColor: '#00ffff',
                            borderWidth: 1.8,
                            // shadowColor: '#00ffff',
                            // shadowOffsetX: 0,
                            // shadowOffsetY: 4,
                            // shadowBlur: 10,
                        },
                        emphasis: {
                            color: 'rgba(98,161,229,0.5)', //悬浮背景
                            textStyle: {
                                color: '#6fa4ec'
                            }
                        }
                    }
                },
                series: [
                       {
                           map: 'huNan',
                           silent: true,
                           type: 'map',
                           zoom: 1.75,
                           center:[105.3996999,35.7000709],
                           label: {
                               normal: {
                                   show: false,
                                   textStyle: {
                                       color: '#fff'
                                   }
                               },
                               emphasis: {
                                   textStyle: {
                                       color: '#fff'
                                   }
                               }
                           },
                           // top: '0%',
                           roam: false,
                           itemStyle: {
                               normal: {
                                   areaColor: 'rgba(114,227,227,0.5)',
                                   borderColor: '#00ffff',
                                   borderWidth: 1.5,
                                   shadowColor: '#066363',
                                   shadowOffsetX: 5,
                                   shadowOffsetY: 10,
                                   shadowBlur: 2,
                               },
                               emphasis: {
                                   areaColor: '#7de5e5', //悬浮背景
                                   textStyle: {
                                       color: '#fff'
                                   }
                               }
                           }
                       },

                    // 配置地图
               /*     {
                        type: "map", // 类型
                        map: "hengYang", // 地图名称，要和引入的地图名一致
                        roam: true, // 是否开启鼠标缩放和平移漫游
                        label: {
                            // 地图省份模块配置
                            normal: { show: true }, // 是否显示省份名称
                            position: "right", // 显示位置
                        },
                        emphasis: {
                            // 高亮状态下的多边形和标签样式。
                            label: {
                                show: true, // 是否显示标签。
                            },
                        },
                        itemStyle: {
                            //地图区域的多边形图形样式
                            normal: {
                                areaColor: "#2a5caa", //地图区域颜色
                                borderColor: "#afb4db", //图形的描边颜色
                                borderWidth: 1, //描边线宽。为 0 时无描边
                                borderType: "solid", // 边框样式
                                opacity: 0.6, // 透明度
                            },
                        },
                        // data: this.arrMap, // 提示框的数据源
                    },*/

                    {
                        data: this.scatterData,//坐标数据
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        rippleEffect: {
                            scale: 6
                        },
                        color: '#b2e0e7'
                    },

                    // {
                    //             map: 'huNan',
                    //             type: 'map',
                    //             zoom: 1.14,
                    //             label: {
                    //                 normal: {
                    //                     show: false,
                    //                     textStyle: {
                    //                         color: '#fff'
                    //                     }
                    //                 },
                    //                 emphasis: {
                    //                     textStyle: {
                    //                         color: '#fff'
                    //                     }
                    //                 }
                    //             },
                    //             top: '14%',
                    //             tooltip:{
                    //                 show:false
                    //             },
                    //             roam: false,
                    //             itemStyle: {
                    //                 normal: {
                    //                     areaColor:'transparent',
                    //                     borderColor: 'rgba(0,255,255,.1)',
                    //                     borderWidth: 1,
                    //                 },
                    //                 emphasis: {
                    //                     areaColor:'rgba(0,255,255,.1)',
                    //                     textStyle: {
                    //                         color: 'red'
                    //                     }
                    //                 }
                    //             }
                    //         },

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
                if (count === 32) {
                    count = 0;
                }
                this.charts.dispatchAction({
                    type: 'highlight',
                    // geoIndex:0,
                    seriesIndex: 0,
                    dataIndex: count
                });
                this.charts.dispatchAction({
                    type: 'showTip',
                    // geoIndex:0,
                    seriesIndex: 0,
                    dataIndex: count
                });
                // console.log('播放')
            }, 2000);

        }
    }
}
</script>

<style scoped>

</style>