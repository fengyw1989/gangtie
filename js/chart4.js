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
        var myChart = ec.init(document.getElementById('chart-4')); 

var data = [{
                    name: '钢材成品',
                    value: '市场需求减少',
                    children: [
                    {
                        name: '热轧板卷',
                        value: '市场需求减少',
                        children: [
                            {
                                name: '线材',
                                itemStyle: {
                                    normal: {
                                        color:'#e60012'
                                    }
                                },
                                tooltip: {
                                    formatter: function(params){
                                        return params.data.name+ ':</br>' + params.data.value;
                                    }
                                },
                                value: '市场需求减少',
                                children:[
                                    {name: '线材',value: '市场需求减少'},
                                    {name: '线材',value: '市场需求减少'},
                                    {name: '线材',value: '市场需求减少'},
                                    {name: '线材',value: '市场需求减少'}
                                ]
                            },
                            {
                                name: '线材',
                                value: '市场需求减少'
                            },
                            {
                                name: '线材',
                                value: '市场需求减少'
                            },
                             {
                                name: '线材',
                                value: '市场需求减少'
                            },
                            {
                                name: '线材',
                                value: '市场需求减少',
                                children:[
                                    {name: '线材',value: '市场需求减少'},
                                    {name: '线材',value: '市场需求减少'}
                                ]
                            },
                            {
                                name: '线材',
                                value: '市场需求减少'
                            }
                        ]
                    },
                    {
                        name: '热轧板卷',
                        value: '市场需求减少',
                        children: [{
                            name: '镀锌',
                            value: '市场需求减少',
                            children:[
                                {name: '镀锌',value: '市场需求减少'},
                                {name: '镀锌',value: '市场需求减少'}
                            ]
                        },
                        {
                            name: '镀锌',
                            value: '市场需求减少'
                        }]
                    },
                    {
                        name: '热轧板卷',
                        value: '市场需求减少',
                        children: [
                            {
                                name: '中厚板',
                                value: '市场需求减少'
                            },
                            {
                                name: '中厚板',
                                value: '市场需求减少'
                            },
                            {
                                name: '中厚板',
                                value: '市场需求减少',
                                children:[
                                    {name: '中厚板',value: '市场需求减少'},
                                    {name: '中厚板',value: '市场需求减少'}
                                ]

                            },
                             {
                                name: '中厚板',
                                value: '市场需求减少'
                            }
                        ]
                    }]
                }];



//在这之后替换option

option = {

    tooltip: {
        trigger: 'item',
        backgroundColor: '#ffffff',
        borderColor: '#ff3333',
        borderWidth:1,
        textStyle:{
            color:'#ff3333',
            fontSize:14
        },
        formatter: function(params){
            return params.data.name;
        }
    },
    series : [
        {
            name:'树图',
            type:'tree',
            orient: 'vertical',  // vertical horizontal
            rootLocation: {x: '55%',y: 50}, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 1,
            nodePadding:10,
            symbolSize: 25,
            layerPadding: 50,
            itemStyle: {
                normal: {
                    color:'#ff7800',
                    label: {
                        show: false,
                        formatter: "{b}"
                    },
                    lineStyle: {
                        color: '#00b9fd',
                        width:2,
                        type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                    }
                }
            },
            data: data
        }
    ]
};
                    
                
// 在这之前替换option部分


            myChart.setOption(option); 
        }
    );

function randomData() {
    return Math.round(Math.random()*4)+1;
}
