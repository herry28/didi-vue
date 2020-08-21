<template>
    <div style="height:100%" ref="echart">
        echart
    </div>
</template>


<script>
import echarts from 'echarts'
export default {
    props:{
        chartData:{
            type:Object,
            default(){
                return {
                    xData:[],
                    series:[]
                }
            }           
        },
        isAxisChart:{
            type:Boolean,
            default:true
        }
    },
    computed:{
        options(){
            return this.isAxisChart?this.axisOption:this.normalOption
        }
    },
    watch:{
        chartData:{
            handler:function(){
                this.initChart()
            },
            deep:true
        }
    },
    data(){
        return{
            echart:null,//echart容器
            axisOption:{
                // 图列的配置
                legend:{
                    textStyle:{
                        color:'#333'
                    }
                },
                tooltip:{
                    trigger:'axis'
                },
                xAxis:{
                        type:'category',
                        data:[],
                        // x轴颜色
                        axisLine:{
                            lineStyle:{
                                color:'#17b3a3'
                            }
                        }
                    },
                yAixs:[
                    {
                        type:'value',
                        axisLine:{
                            lineStyle:{
                                color:'#17b3a3'
                            }
                        }
                    }
                ],
                series:[],
                color: [
                    '#2ec7c9',
                    '#b6a2de',
                    '#5ab1ef',
                    '#ffb980',
                    '#d87a80',
                    '#8d98b3',
                    '#e5cf0d',
                    '#97b552',
                    '#95706d',
                    '#dc69aa',
                    '#07a2a4',
                    '#9a7fd1',
                    '#588dd5',
                    '#f5994e',
                    '#c05050',
                    '#59678c',
                    '#c9ab00',
                    '#7eb00a',
                    '#6f5553',
                    '#c14089'
                    ],
            },
            normalOption:{
                series:[],
                tooltip: {
                    trigger: 'item'
                    },
                color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
            }
        }
    },
    methods:{
        // 初始化图表
        initChart(){
            this.initChartData()
            // 容器存在
            if(this.echart){
                this.echart.setOption(this.options)
            }else{
                this.echart=echarts.init(this.$refs.echart)//初始化echarts实例
                this.echart.setOption(this.options)
            }
        },
        // 初始化图表数据
        initChartData(){
            if(this.isAxisChart){
              this.axisOption.xAxis.data=this.chartData.xData
              this.axisOption.series=this.chartData.series
            }else{
                this.normalOption.series=this.chartData.series
            }
        },
        // 自适应图表
        resizeChart(){
            this.echart?this.echart.resize():''
        }
    },
    mounted(){
        window.addEventListener('resize',this.resizeChart)
    },
    destroyed(){
        window.removeEventListener('resize',this.resizeChart)
    }
}
</script>



<style>

</style>