<template>
    <div id="AreaMap" style="width: 100%; height: 100%"></div>
</template>

<script>
// import MyMap from '../../public/hunan.json'
import hengYang from '../../public/hengyang.json'

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
        this.drawLine("AreaMap");
        console.log(hengYang);
    },
    methods:{
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            echarts.registerMap('huNan',hengYang)
            this.charts.setOption({
                backgroundColor:'transparent',
                lazyUpdate: true,
                geo:{
                    type:'map',
                    map:'huNan',
                    zoom:1.2,
                    roam:true,
                    label:{
                        // show:true,

                        normal: {
                            show: true,
                            textStyle: {
                                color: '#8eb5dc'        //静态字体颜色
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
                            areaColor: 'rgba(0,255,255,.02)',
                            borderColor: '#00ffff',
                            borderWidth: 1.5,
                            shadowColor: '#00ffff',
                            shadowOffsetX: 0,
                            shadowOffsetY: 4,
                            shadowBlur: 10,
                        },
                        emphasis: {
                            color: 'rgba(98,161,229,0.5)', //悬浮背景
                            textStyle: {
                                color: '#6fa4ec'
                            }
                        }
                    }

                },
                series:[
                    {
                        data:this.scatterData,//坐标数据
                        type:'effectScatter',
                        coordinateSystem:'geo',
                        rippleEffect:{
                            scale:10
                        },
                        color:'#51e2ef'
                    }
                ]



            //     series: [
            //         {
            //             map: 'huNan',
            //             silent: true,
            //             type: 'map',
            //             zoom: 1.21,
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
            //             // top: '0%',
            //             roam: true,
            //             itemStyle: {
            //                 normal: {
            //                     areaColor: 'rgba(0,255,255,.02)',
            //                     borderColor: '#00ffff',
            //                     borderWidth: 1.5,
            //                     shadowColor: '#00ffff',
            //                     shadowOffsetX: 0,
            //                     shadowOffsetY: 4,
            //                     shadowBlur: 10,
            //                 },
            //                 emphasis: {
            //                     areaColor: 'transparent', //悬浮背景
            //                     textStyle: {
            //                         color: '#fff'
            //                     }
            //                 }
            //             }
            //         },
            //         {
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
            // ]


            });
            // this.AutoPlay();
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

</style>