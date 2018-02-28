function randomData(min,max) {
    return Math.round(Math.random()*(max-min+1)+min);
}

//钢贸诉讼分布
var steelLitigation = echarts.init(document.getElementById('steelLitigation'));
option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: '#ff3333',
        textStyle:{
            color:'#333',
            fontSize:15
        },
        borderWidth:1,
        formatter: "<a style='color:#ff0000;font-weight:600; font-size:16px;'>{b}省</a> <br> 诉讼案件<a style='color:#ff5a00;font-weight:600; font-size:16px;'>{c}</a>起",
        padding: 10,
    },
    visualMap:{
        min: 0,
        max: 30,
        show:true,
        left:'5%',
        bottom:'5%',
        text:['高','低'],
        color:['#c04009','#f44f0d','#f4693a','#fc8761','#fdb096','#d5d5d5']
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
            normal:{
                    //borderColor:'rgba(193,193,193,1)', //边境线颜色
                    borderWidth:0,
                    areaStyle:{
                        //color: '#ffffff' //地图颜色
                    }
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data:[
               {name: '北京', selected:false,value:randomData(0,30)},
               {name: '天津', selected:false,value:randomData(0,30)},
               {name: '上海', selected:false,value:randomData(0,30)},
               {name: '重庆', selected:false,value:randomData(0,30)},
               {name: '河北', selected:false,value:randomData(0,30)},
               {name: '河南', selected:false,value:randomData(0,30)},
               {name: '云南', selected:false,value:randomData(0,30)},
               {name: '辽宁', selected:false,value:randomData(0,30)},
               {name: '黑龙江', selected:false,value:randomData(0,30)},
               {name: '湖南', selected:false,value:randomData(0,30)},
               {name: '安徽', selected:false,value:randomData(0,30)},
               {name: '山东', selected:false,value:randomData(0,30)},
               {name: '新疆', selected:false,value:randomData(0,30)},
               {name: '江苏', selected:false,value:randomData(0,30)},
               {name: '浙江', selected:false,value:randomData(0,30)},
               {name: '江西', selected:false,value:randomData(0,30)},
               {name: '湖北', selected:false,value:randomData(0,30)},
               {name: '广西', selected:false,value:randomData(0,30)},
               {name: '甘肃', selected:false,value:randomData(0,30)},
               {name: '山西', selected:false,value:randomData(0,30)},
               {name: '内蒙古', selected:false,value:randomData(0,30)},
               {name: '陕西', selected:false,value:randomData(0,30)},
               {name: '吉林', selected:false,value:randomData(0,30)},
               {name: '福建', selected:false,value:randomData(0,30)},
               {name: '贵州', selected:false,value:randomData(0,30)},
               {name: '广东', selected:false,value:randomData(0,30)},
               {name: '青海', selected:false,value:randomData(0,30)},
               {name: '西藏', selected:false,value:randomData(0,30)},
               {name: '四川', selected:false,value:randomData(0,30)},
               {name: '宁夏', selected:false,value:randomData(0,30)},
               {name: '海南', selected:false,value:randomData(0,30)},
               {name: '台湾', selected:false,value:randomData(0,30)},
               {name: '香港', selected:false,value:randomData(0,30)},
               {name: '澳门', selected:false,value:randomData(0,30)}
           ],//各省地图颜色数据依赖value
       }
    ]
};
steelLitigation.setOption(option);
function totalContrast(){
//钢贸诉讼分布
var totalContrast = echarts.init(document.getElementById('totalContrast'));
option = {
    legend: {
        data:['社会库存','抵押总量'],
        right:'20',
        iconSize:5,
        textStyle: {
            fontSize: 12,
            color: "#000",
            fontFamily: "微软雅黑"
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} 万吨",
        padding: 10,
    },
    color:['#00a6ff','#f05c00'],
    xAxis:  {
        type: 'category',
        nameTextStyle: {
            fontSize: 14,
            color: "#fff",
            fontFamily: "微软雅黑",
        },
        boundaryGap: false,
        data:  ['1月','2月','3月','4月','5月','6月','7月'],
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: "#c4c3c2",
                fontFamily: "微软雅黑"
            },
            margin: 10,
             interval:0,
            //rotate:45
        },
        splitLine: {
            lineStyle: {
                color: '#35518f', //分割线颜色
                type: "solid",
                opacity:0.2
            }
        },
        axisLine:{
            lineStyle:{
                color: '#757474', //分割线颜色
                type: "solid",
                opacity:0.6
            }
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
       type: 'value',
       name: '万吨',
       nameTextStyle: {
            fontSize: 14,
            color: "#757474",
            fontFamily: "微软雅黑",
        },
        min: 0,
        max: 150,
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: "#c4c3c2",
                fontFamily: "微软雅黑"
            },
            formatter:'{value} ',
        },
        splitLine: {
            lineStyle: {
                color: '#757474', //分割线颜色
                type: "solid",
                opacity:0.2
            }
        },
        axisLine:{
            lineStyle:{
                width:3,
                color: '#757474', //分割线颜色
                type: "solid",
                opacity:0.8
            }
        },
        axisTick:{
            show:false
        }
    },
    series: [
        {
            name:'社会库存',
            type:'line',
            data:[120,115,117,118,119,120,121],
            markPoint: {
                // data: [
                //     {type: 'max', name: '最大值'},
                //     {type: 'min', name: '最小值'}
                // ]
            },
            symbolSize:10,
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#00a6ff',
                        type:'dashed'
                    },
                   
                },
                emphasis:{
                    borderColor:'#00a6ff',
                }
            }
          
        },
        
        {
            name:'抵押总量',
            type:'line',
            data:[70,68,73,72,90,110,100],
            symbol:'circle',
            symbolSize:8,
            markPoint: {
            },
              itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#f05c00'
                    },
                    
                },
                emphasis:{
                    borderColor:'#f05c00',
                }
            }
            
        }
    ]
};

totalContrast.setOption(option);
}
//资金流向监控
var flowMonitoring = echarts.init(document.getElementById('flowMonitoring'));


var BJData = [
    [{name:'北京'}, {name:'上海',value:95}],
    [{name:'北京'}, {name:'广州',value:90}],
    [{name:'北京'}, {name:'南宁',value:70}],
    [{name:'北京'}, {name:'南昌',value:60}],
    [{name:'北京'}, {name:'拉萨',value:50}],
    [{name:'北京'}, {name:'长春',value:40}],
    [{name:'北京'}, {name:'重庆',value:20}],
    [{name:'北京'}, {name:'常州',value:10}]
];

var SHData = [
    [{name:'北京'},{name:'包头',value:95}],
    [{name:'北京'},{name:'昆明',value:90}],
    [{name:'北京'},{name:'郑州',value:70}],
    [{name:'北京'},{name:'长沙',value:40}],
    [{name:'北京'},{name:'丹东',value:20}],
    [{name:'北京'},{name:'大连',value:10}]
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#f5241b', '#01a6ff'];
var series = [];
[['北京', BJData], ['上海', SHData]].forEach(function (item, i) {
    series.push({
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            symbol:'triangle',
            period: 6,
            trailLength: 0.3,
            color: color[i],
            symbolSize: 6
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'fill'
        },
        label: {
            normal: {
                show: true,
                textStyle:{
                    color:'#333'
                },
                position: 'auto'
                //formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 5;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

option = {
    backgroundColor: '#fff',
    title : {
        text: '',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#fff',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#eee'
            }
        }
    },
    series: series
};
flowMonitoring.setOption(option);