//市场舆情条形图
var myChart = echarts.init(document.getElementById('chart-1'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} 条",
        padding: 10
    },
    color:['#6dd94f','#ffc000','#f63f1c'],
    grid:{
      left:70  
    },
    yAxis : [
        {
            type : 'category',
            data : ['负面情绪','中性情绪', '正面情绪'],
            boundaryGap:true,
            axisLine: {
				lineStyle: {
					color: '#ccc'
				}
			},
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: "#000",
                    fontFamily: "微软雅黑"
                },
                margin:5
            },
            axisTick: {
               show:true
            },
            splitLine: {
                show:true,
                lineStyle: {
                    color: '#ccc', //分割线颜色
                    type: "solid",
                    opacity:1
                }
            }
        }
    ],
    xAxis : [
        {
            type : 'value', 
            min:0,
            max:75000,
            interval:25000,
            axisLine: {
				lineStyle: {
					color: '#ccc'
				}
			},
            axisLabel: {
                textStyle: {
                    fontSize: 16,
                    color: "#000",
                    fontFamily: "微软雅黑"
                },
                margin: 10
            },
            splitLine: {
                lineStyle: {
                    color: '#ccc', //分割线颜色
                    type: "solid",
                    opacity:1
                }
            },
            axisTick: {
               show:false
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '50%',
            data:[
                {
                    value:'45927',
                    itemStyle:{
                        normal:{
                            color:['#f63f1c']
                        }
                    }
                },
                {
                    value:'72991',
                    itemStyle:{
                        normal:{
                            color:['#ffc000']
                        }
                    }
                },
                {
                    value:'27283',
                    label:{
                        normal:{
                            //show:true,
                            position:'right',
                            //formatter:'25%',
                            textStyle:{
                                color:"#ff5a00",
                                fontSize:16
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:['#6dd94f']
                        }
                    }
                }
            ]
        }
    ]
};
myChart.setOption(option);

//预警详情玫瑰图
var myChart = echarts.init(document.getElementById('chart-2'));
option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: '#ff3333',
        borderWidth:1,
        textStyle:{
            color:'#333',
            fontSize:14
        },
        formatter: "涉及企业数: <a style='color:#ff5a00;font-weight:600; font-size:16px;'>{c}</a> 家",
        padding: 10
    },
    calculable : true,
    color:['#7bc6fd','#00b9fd','#6dd94f','#ffc000','#f63f1c'],
    series : [
        {
            name:'',
            type:'pie',
            radius : [20, 60],
            center : ['50%', '40%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize:13
                    }
                }
            },
            labelLine:{
            	normal:{
            		length:10,
            		length2:12,
            	}
            },
            itemStyle:{
                normal:{
                    show:false,
                },
                emphasis:{
                    borderColor:'#fff',
                    borderWidth:3
                }
            },
            data:[
                {value:4, name:'拖欠工资'},
                {value:4, name:'履约不利'},
                {value:2, name:'违法侵权'},
                {value:5, name:'债务拖欠'},
                {value:3, name:'交易额持续下滑'}
            ]
        },
        {
            name:'',
            type:'pie',
            radius : [15, 16],
            center : ['50%', '40%'],
            roseType : 'radius',
            hoverAnimation:false,
            legendHoverLink:false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
               {
                   value:'220',
                   itemStyle:{
                        normal:{
                           color:'#ccc'
                        }
                    }
               }
            ]
        }
    ]
};
myChart.setOption(option);


//热点案例
var swiper = new Swiper('.swiper-container', {
    pagination : '.pagination',
    autoplay : 3000,
    loop:true
});

$('.swiper-button-prev').click(function(){
    swiper.swipePrev(); 
});
$('.swiper-button-next').click(function(){
    swiper.swipeNext(); 
});