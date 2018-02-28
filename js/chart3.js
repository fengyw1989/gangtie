    // 路径配置
    require.config({
        paths: {
            echarts: 'echarts-2.2.7/build/dist'
        }
    });
    
   // 使用
    require(
        ['echarts','echarts/chart/bar' ,'echarts/chart/line'  ,'echarts/chart/base' ,       
        'echarts/chart/chord','echarts/chart/eventRiver' , 'echarts/chart/force'  ,
        'echarts/chart/funnel' ,'echarts/chart/gauge'  ,'echarts/chart/heatmap' ,       
        'echarts/chart/island'  ,'echarts/chart/k'  ,'echarts/chart/map' ,       
        'echarts/chart/pie'  ,'echarts/chart/radar' ,'echarts/chart/scatter'  ,
        'echarts/chart/tree' , 'echarts/chart/treemap','echarts/chart/venn' ,       
        'echarts/chart/wordCloud'],
function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('map1')); 


//在这之后替换option

var data1 = [
               {name: '北京', selected:false,value:randomData()},
               {name: '天津', selected:false,value:randomData()},
               {name: '上海', selected:false,value:randomData()},
               {name: '重庆', selected:false,value:randomData()},
               {name: '河北', selected:false,value:randomData()},
               {name: '河南', selected:false,value:randomData()},
               {name: '云南', selected:false,value:randomData()},
               {name: '辽宁', selected:false,value:randomData()},
               {name: '黑龙江', selected:false,value:randomData()},
               {name: '湖南', selected:false,value:randomData()},
               {name: '安徽', selected:false,value:randomData()},
               {name: '山东', selected:false,value:randomData()},
               {name: '新疆', selected:false,value:randomData()},
               {name: '江苏', selected:false,value:randomData()},
               {name: '浙江', selected:false,value:randomData()},
               {name: '江西', selected:false,value:randomData()},
               {name: '湖北', selected:false,value:randomData()},
               {name: '广西', selected:false,value:randomData()},
               {name: '甘肃', selected:false,value:randomData()},
               {name: '山西', selected:false,value:randomData()},
               {name: '内蒙古', selected:false,value:randomData()},
               {name: '陕西', selected:false,value:randomData()},
               {name: '吉林', selected:false,value:randomData()},
               {name: '福建', selected:false,value:randomData()},
               {name: '贵州', selected:false,value:randomData()},
               {name: '广东', selected:false,value:randomData()},
               {name: '青海', selected:false,value:randomData()},
               {name: '西藏', selected:false,value:randomData()},
               {name: '四川', selected:false,value:randomData()},
               {name: '宁夏', selected:false,value:randomData()},
               {name: '海南', selected:false,value:randomData()},
               {name: '台湾', selected:false,value:randomData()},
               {name: '香港', selected:false,value:randomData()},
               {name: '澳门', selected:false,value:randomData()}
            ]
var series = {
                tooltip: {
                    //show:false,
                    trigger: 'item',
                    formatter: '{b}'
                },
                name: '选择器',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    width: '80%'
                },
                roam: false,
                selectedMode : 'single',
                itemStyle:{
                    //normal:{label:{show:true}},
                    //emphasis:{label:{show:true}}
                },
                data:data1
            }

var option = {
    title:{
        text:'企业交易活跃度',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    dataRange:{
        min: 0,
        max: 1500,
        show:false,
        color:['#c04009','#f44f0d','#f4693a','#fc8761','#fdb096'/*,'#d5d5d5'*/]
    },
    series : [series],
    animation: false
};
var ecConfig = require('echarts/config');
myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
    var selected = param.selected;
    var selectedProvince;
    var name;
    for (var i = 0, l = option.series[0].data.length; i < l; i++) {
        name = option.series[0].data[i].name;
        option.series[0].data[i].selected = selected[name];
        if (selected[name]) {
            selectedProvince = name;
        }
    }
    if (typeof selectedProvince == 'undefined') {
       // option.series.splice(1);
        //option.legend = null;
        option.series.splice(1,1);
        option.series[0].mapLocation = {
            width: '80%'
        };
        myChart.setOption(option, true);
        return;
    }

    option.series[0] = series;
    option.series[0].mapLocation = {
        x: '58%',
        y: '51%',
        //left:30,
        width: '40%'
    };
    option.series[1] = {
        name: '核心企业',
        type: 'map',
        mapType: selectedProvince,
        itemStyle:{
            //normal:{label:{show:true}},
            //emphasis:{label:{show:true}}
        },
        tooltip: {
            show:false,
            trigger: 'item',
            formatter: '{b}'
        },
        hoverable: false,
        markPoint : {
            tooltip: {
                show:true,
                trigger: 'item',
                formatter: '{b}'
            },
            symbolSize: 5,  // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            itemStyle: {
                normal: {
                    color:'#ff0035',
                    borderColor: '#87cefa',
                    borderWidth: 0,  // 标注边线线宽，单位px，默认为1
                    label: {
                        show: false
                    }
                },
                emphasis: {
                    borderColor: '#1e90ff',
                    borderWidth: 0,
                    label: {
                        show: false
                    }
                }
            },
            data : [
                {name: "代县明利铁矿", type:'QiYe',value: 9},
                {name: "黄梅县高岭资源开发", type:'QiYe',value: 9},
                {name: "通化县双龄铁矿", type:'QiYe',value: 9},
                {name: "建平县立兴铁矿", type:'QiYe',value: 9},
                {name: "桐柏县昌兴矿业有限公司", type:'QiYe',value: 9}
            ]
        },
        geoCoord: {
            "代县明利铁矿":[119.156389,36.744282],
            "黄梅县高岭资源开发":[120.283224,37.017709],
            "通化县双龄铁矿":[117.10969,36.692442],
            "建平县立兴铁矿":[116.3646,36.447576],
            "桐柏县昌兴矿业有限公司":[119.317366,35.655757]
        },
        mapLocation: {
            x: 'left',
            y:'10%',
            width:'70%',
            height:'70%'
        },
        roam: false,
        data:[
            {name: '潍坊市',value: 0},
            {name: '青岛市',value: 0},
            {name: '菏泽市',value: 0},
            {name: '济宁市',value: 0},
            {name: '德州市',value: 0},
            {name: '滨州市',value: 0},
            {name: '聊城市',value: 0},
            {name: '东营市',value: 0},
            {name: '济南市',value: 0},
            {name: '泰安市',value: 0},
            {name: '威海市',value: 0},
            {name: '日照市',value: 0},
            {name: '淄博市',value: 0},
            {name: '枣庄市',value: 0},
            {name: '莱芜市',value: 0},
            {name: '临沂市',value: 0},
            {name: '烟台市',value: 0}
        ]
    };
    // option.legend = {
    //     x:'right',
    //     data:['核心企业']
    // };

    myChart.setOption(option, true);
})
                    
                
// 在这之前替换option部分



    



            myChart.setOption(option);
            myChart.on('click', function (params) {
                //console.log(params);
                if($.trim(params.data.type) =='QiYe'){
                    var name = params.data.name;
                    //console(name);


    // var datas = [{
    //         name: '代县明利铁矿',
    //         value: 60
    //     }, {
    //         name: '黄梅县高岭资源开发',
    //         value: 40
    //     }, {
    //         name: '通化县双龄铁矿',
    //         value: 30
    //     }, {
    //         name: '建平县立兴铁矿',
    //         value: 30
    //     }, {
    //         name: '桐柏县昌兴矿业有限公司',
    //         value: 30
    //     }, {
    //         name: '中国宝钢',
    //         value: 30

    //     }, {
    //         name: '彝良县矿海钢铁有限公司',
    //         value: 20
    //     }, {
    //         name: '南阳市马道岭矿产品开发公司',
    //         value: 20
    //     }, {
    //         name: '宽城群丰矿业有限工司',
    //         value: 20
    //     }, {
    //         name: '林州市铁矿',
    //         value: 20
    //     }, {
    //         name: '攀枝花二滩矿产品有限责任公司',
    //         value: 20
    //     }];
    // var dataes = [{
    //             source: '代县明利铁矿',
    //             target: '中国宝钢',
    //             value: 20
    //         }, {
    //             source: '黄梅县高岭资源开发',
    //             target: '中国宝钢',
    //             value: 10,
    //             lineStyle: {
    //                 normal: {
    //                     color: '#dbe7ee',
    //                     opacity: 0.3

    //                 }
    //             },
    //         }, {
    //             source: '通化县双龄铁矿',
    //             target: '中国宝钢',
    //             value: 9,

    //             lineStyle: {
    //                 normal: {
    //                     color: '#dbe7ee',
    //                     opacity: 0.3

    //                 }
    //             },
    //         }, {
    //             source: '建平县立兴铁矿',
    //             target: '中国宝钢',
    //             value: 8
    //         }, {
    //             source: '桐柏县昌兴矿业有限公司',
    //             target: '中国宝钢',
    //             value: 7
    //         }, {
    //             source: '中国宝钢',
    //             target: '彝良县矿海钢铁有限公司',
    //             value: 15
    //         }, {
    //             source: '中国宝钢',
    //             target: '南阳市马道岭矿产品开发公司',
    //             value: 14
    //         }, {
    //             source: '中国宝钢',
    //             target: '宽城群丰矿业有限工司',
    //             value: 13
    //         }, {
    //             source: '中国宝钢',
    //             target: '林州市铁矿',
    //             value: 12
    //         }, {
    //             source: '中国宝钢',
    //             target: '攀枝花二滩矿产品有限责任公司',
    //             value: 11
    //         }];


                   createSankey("chart-2");
                   createFunnel("chart-3");
               }
            }); 
        }
    );

function randomData() {
    return Math.round(Math.random()*1500)+1;
}
