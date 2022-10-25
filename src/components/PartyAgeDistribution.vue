<template>
    <div id="AgeDistribution" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
name: "AgeDistribution",
    data(){
        return{
            charts: "",
            opinionData: ["3", "2", "4", "4", "5"],
            color : [
                '#FF6E76',
                '#254DBB',
                '#FBF73A',
                '#FA8E3D',
                '#4AF7FA',
                '#7fe03b',
                // '#FF6E76'
            ],
            AgeData: [
                {
                    "name": "35岁以下",
                    "value": 50
                },
                {
                    "name": "35-45岁",
                    "value": 100
                },
                {
                    "name": "45-55岁",
                    "value": 20
                },
                {
                    "name": "55-60岁",
                    "value": 55
                },
                {
                    "name": "61-70岁",
                    "value": 35
                },
                {
                    "name": "71岁以上",
                    "value": 25
                }
                // {
                //     "name": "80岁以上",
                //     "value": 20
                // },
            ]
        }
    },
    created() {
        // this.GetData();
    },
    mounted() {
        this.drawLine("AgeDistribution");
    },
    methods:{
        GetData(){
          this.axios.get('/count/findByAge').then(res => {
              this.AgeData = res.data.data;
              // console.log(res)

          })
        },

        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id),'dark');
            this.charts.setOption({
                backgroundColor:'rgba(128, 128, 128, 0.1)',
                tooltip:{
                    trigger:'item'
                },

                // backgroundColor: '#020933',
                color: this.color,
      /*          title:{
                    text: '流光圆环',
                    top:20,
                    left: 'center',
                    textStyle: {
                        fontSize: 20,
                        color: 'rgba(0,141,236,0.9)',
                    },
                },*/

/*                graphic: {
                    elements: [{
                        type: 'image',
                        z: 3,
                        style: {
                            // image: imgURL,
                            width: 50,
                            height: 50,
                        },
                        left: 'center',
                        top: 'center',
                    }, ],
                },*/

                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['50%', '80%'],
                        hoverAnimation: false,
                        data: this.setChartOption(this.AgeData),
                        itemStyle: {
                            // borderRadius: 3,
                            borderColor: '#fff',
                            borderWidth: 5
                        },
                    },
                ],

            });
            this.AutoPlay();
        },
        // 设置数据
        setChartOption(data) {
            // let that = this;
            const formatData = [];
            data.forEach(function (item) {
                formatData.push(
                    {
                        value: item.value,
                        name: item.name,
                        itemStyle: {
                            normal: {
                                borderWidth: 10,
                                shadowBlur: 5,
                                borderColor: 'transparent',
                                // borderColor: that.color[index],
                                // shadowColor: that.color[index],
                            },
                        },
                    },
    /*                {
                        value: 5,
                        name: '',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                                color: 'rgba(0, 0, 0, 0)',
                                borderColor: 'rgba(0, 0, 0, 0)',
                                borderWidth: 0,
                            },
                        },
                    }*/
                )
            })
            return formatData;
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
                if (count === 7) {
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