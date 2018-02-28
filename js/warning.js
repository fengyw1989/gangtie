function randomData(min,max) {
    return Math.round(Math.random()*(max-min+1)+min);
}

//预警详情玫瑰图
var warningDetails = echarts.init(document.getElementById('warningDetails'));
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
            center : ['50%', '50%'],
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
            center : ['50%', '50%'],
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
warningDetails.setOption(option);


//区域预警地图
var regionWarnin = echarts.init(document.getElementById('regionWarnin'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params){
            if(params.data.value !=0 ){
                return params.data.cause;
            }
        },
        padding: 10,
    },
    visualMap:{
        min: 0,
        max: 2,
        show:false,
        left:'5%',
        bottom:'5%',
        text:['高','低'],
        color:['#ffdf33','#fedfd5']
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            top:10,
            height:350,
            roam: false,
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        color:'#333',
                        fontSize:12
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle:{
                normal:{
                    borderColor:'#fff', //边境线颜色
                    borderWidth:1.5,
                    areaColor:'#fedfd5'
                },
                emphasis: {
                   areaColor:'#fedfd5'
                }
            },
            data:[
                {name: '北京',value: 0, cause:'钢贸诈骗' },
                {name: '天津',value: 0, cause:'钢贸诈骗' },
                {name: '上海',value: 0, cause:'钢贸诈骗' },
                {name: '重庆',value: 0, cause:'钢贸诈骗' },
                {name: '河北',value: 0, cause:'钢贸诈骗' },
                {name: '河南',value: 0, cause:'钢贸诈骗' },
                {name: '云南',value: 0, cause:'钢贸诈骗' },
                {name: '辽宁',value: 0, cause:'钢贸诈骗' },
                {name: '黑龙江',value: 0, cause:'钢贸诈骗' },
                {name: '湖南',value: 0, cause:'钢贸诈骗' },
                {name: '安徽',value: 0, cause:'钢贸诈骗' },
                {name: '山东',value: 0, cause:'钢贸诈骗' },
                {name: '新疆',value: 0, cause:'钢贸诈骗' },
                {name: '江苏',value: 0, cause:'钢贸诈骗' },
                {name: '浙江',value: 0, cause:'钢贸诈骗' },
                {name: '江西',value: 0, cause:'钢贸诈骗' },
                {name: '湖北',value: 0, cause:'钢贸诈骗' },
                {name: '广西',value: 0, cause:'钢贸诈骗' },
                {name: '甘肃',value: 0, cause:'钢贸诈骗' },
                {name: '山西',value: 0, cause:'钢贸诈骗' },
                {name: '内蒙古',value: 0, cause:'钢贸诈骗' },
                {name: '陕西',value: 0, cause:'钢贸诈骗' },
                {name: '吉林',value: 0, cause:'钢贸诈骗' },
                {name: '福建',value: 1, cause:'钢贸诈骗' },
                {name: '贵州',value: 1, cause:'钢贸诈骗' },
                {name: '广东',value: 2, cause:'钢贸诈骗' },
                {name: '青海',value: 0, cause:'钢贸诈骗' },
                {name: '西藏',value: 0, cause:'钢贸诈骗' },
                {name: '四川',value: 0, cause:'钢贸诈骗' },
                {name: '宁夏',value: 0, cause:'钢贸诈骗' },
                {name: '海南',value: 0, cause:'钢贸诈骗' },
                {name: '台湾',value: 0, cause:'钢贸诈骗' },
                {name: '香港',value: 0, cause:'钢贸诈骗' },
                {name: '澳门',value: 0, cause:'钢贸诈骗' }
            ]
        }
    ]
};
regionWarnin.setOption(option);