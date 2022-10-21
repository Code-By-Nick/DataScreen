<template>
    <div  ref="mapRefDo" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
name: "DynamicRotation",
data() {
    return {
        charts: "",
        dataStyle : {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                shadowColor: 'rgba(0, 0, 0,0.8)',
            }
        },
        data : [
            {
                value: 2.1,
                name: '资产负债',
                selected:false
            },
            {
                value: 1.8,
                name: '社交网络服务',
                selected:false},
            {
                value: 1.7,
                name: '支付结算',
                selected:false },
            {
                value: 2.95,
                name: '其他',
                selected:false }
        ],
        times:0,
        count:0,
        option:'',
        angle:0,

    }
},
mounted() {
    this.drawLine();
    this.getBackgroundImage()

},
methods: {
    drawLine() {
        this.charts = echarts.init(this.$refs.mapRefDo);

        this.option = {
            //backgroundColor: "transparent",
            title: {
                text: "9%",
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle:{
                    color:"white",
                    fontSize:40
                },
                left:"50%",
                top:"50%"

            },
            grid:{
                left:"0%",
                top:"0%",
                right:"0%",
                bottom:"0%",
            },

            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['58%', '35%'],
                avoidLabelOverlap: false,
                color: ["#0066ff", "#ff9c00", "#00fcff", "#00bc73", "#f33887", "#5e66ff", "#f0d700"],
                label: {
                    show: false
                },
                itemStyle: this.dataStyle,
                data: this.data,
                silent: true
            },{
                name: "ring4",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                            startAngle: (0+-this.angle) * Math.PI / 180,
                            endAngle: (90+-this.angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "rgb(255, 255, 255,0.2)",
                            fill: "transparent"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {

                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                            startAngle: (180+-this.angle) * Math.PI / 180,
                            endAngle: (270+-this.angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "rgb(255, 255, 255,0.2)",
                            fill: "transparent"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring4",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'ring',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                            r0: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.58
                        },
                        style: {
                            stroke: "transparent",
                            fill: new echarts.graphic.LinearGradient(0, 0.58, 0, 0.8, [{
                                // 0% 处的颜色
                                offset: 0,
                                color: 'rgb(255, 255, 255,0.1)'
                            },
                                {
                                    // 100% 处的颜色
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ]),
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                            startAngle: (0+this.angle) * Math.PI / 180,
                            endAngle: (90+this.angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#086d9f",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                            startAngle: (180+this.angle) * Math.PI / 180,
                            endAngle: (270+this.angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#086d9f",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                            startAngle: (270+-this.angle) * Math.PI / 180,
                            endAngle: (40+-this.angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#883d20",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                            startAngle: (90+-this.angle) * Math.PI / 180,
                            endAngle: (220+-this.angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#883d20",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                    let point = this.getCirlPoint(x0, y0, r, (90+-this.angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#883d20",
                            fill: "#883d20"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                    let point = this.getCirlPoint(x0, y0, r, (270+- this.angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#883d20",
                            fill: "#883d20"
                        },
                        silent: true
                    };
                },
                data: [0]
            },
                {
                    name: "ring1",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function(params, api) {
                        return {
                            type: 'ring',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.37
                            },
                            style: {
                                stroke: "rgba(255,255,255,0.4)",
                                fill: "transparent"
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },

                {
                    name: "ring2",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function(params, api) {
                        return {
                            type: 'ring',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.30
                            },
                            style: {
                                stroke: "#0885b5",
                                fill: "transparent",
                                lineWidth: 2,
                                lineDash: [15, 10]
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },
                {
                    name: "ring3",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function(params, api) {
                        return {
                            type: 'ring',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.28
                            },
                            style: {
                                stroke: "rgba(16, 81, 167,.5)",
                                fill: "transparent"
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },
                {
                    name: "ring4",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function(params, api) {
                        return {
                            type: 'ring',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.2
                            },
                            style: {
                                stroke: "#873c20",
                                fill: "transparent",
                                //shadowColor:"#ddd",
                                //shadowOffsetX:0,
                                //shadowBlur:4
                            },
                            silent: true
                        };
                    },
                    data: [0]
                }
            ]
        };

        setInterval(function() {
            //用setInterval做动画感觉有问题
            this.draw()
            this.times++;
            if(this.times >= 20){
                this.times = 0;
                this.changeSelect();
            }
        }, 100);

        this.charts.setOption(this.option);
    },

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
            x: x1,
            y: y1
        }
    },

    //设置背景图片
    getBackgroundImage() {
        let panel = document.getElementById("chart-panel")
        let bgImgSrc = "http://i2.hdslb.com/bfs/archive/2da1ff7cd9e88497116a78146b39e73e967fb25e.jpg";
        panel.style.backgroundImage = "url(" + bgImgSrc + ")";
        panel.style.backgroundSize = "cover";
    },

    draw() {
        this.angle = this.angle + 3
        this.charts.setOption(this.option, true)
        //window.requestAnimationFrame(draw);
    },

    changeSelect() {
        var r = this.count % this.data.length;
        this.option.series[0].data[r].selected = false;

        this.count++;
        var s = this.count % this.data.length;
        this.option.series[0].data[s].selected = true;
        this.option.title.text = this.option.series[0].data[s].value + "%";
        this.charts.setOption(this.option, true);
    }

}
}
</script>

<style scoped>

</style>