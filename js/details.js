//股东图谱分析
var personStatusChart = echarts.init(document.getElementById('person-status-chart'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br> {b}:  ({d}%)"
    },
    color:['#ea6d00','#fb9e00'],
    series: [
        {
            name:'股东类型',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    show:false
                   
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:679, name:'企业法人',
                    itemStyle :{
                        normal : {
                           color :'#d85547'
                        }
                    }
                },
                {value:679, name:'',
                    itemStyle :{
                        normal : {
                           color :'#f3500f'
                        }
                    }
                }
            ]
        },
        {
            name:'',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    textStyle:{
                        color:'#000'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle:{
                        color:'#ccc'
                    }
                }
            },
            data:[
                {value:230, name:'北京普业惠通咨询有限公司'},
                {value:310, name:'爱郎国际教育集团有限公司'}
            ]
        }
    ]
};
personStatusChart.setOption(option);

//财务信息
var financeInfoChart = echarts.init(document.getElementById('finance-info-chart'));
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['资产总计','负债合计','主营业务收入'],
        right:20,
        align:'auto'
    },
    grid:{
        left:50,
        right:50
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            //formatter: '{value}',
            textStyle:{
                color:"#c0bfbe"
            }
        },  
        axisLine: {
            lineStyle: {
                color: "#333",
                width: 0
            }
        },splitLine: {
            show: true,
            lineStyle: {
                color: '#ebebeb',
                type : "solid"
            }
        },
        axisTick: {
            show: false
        },
        data: ['','2011','2012','2013','2014','']
    },
    yAxis: [{
        min:0,
        max:1000,
        name:'万',
        type: 'value',
        axisLabel: {
            show: true,
            formatter: '{value}',
            textStyle:{
                color:"#c0bfbe"
            }
        },  
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#c0bfbe",
                width: 1
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f4f4f4',
                type : "solid"
            }
        },
        axisTick: {
            show: false
        }
    },{
        type: 'value',
        axisLabel: {
            show: true,
            formatter: '',
            color:'#c0bfbe'
        },  
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#ebebeb",
                width: 1
            }
        },splitLine: {
            show: true,
            lineStyle: {
                color: '#ebebeb',
                type : "solid"
            }
        },
        axisTick: {
            show: false
        }
    }],
    color:['#ff6602',"#0071f3","#2cc23d"],
    series: [
        {
            name:'资产总计',
            type:'line',
            data:['',811, 811, 760, 700,''],
            symbol:'emptyCircle',
            symbolSize:10
        },
        {
            name:'主营业务收入',
            type:'line',
            data:['',100, 102, 120, 150,''],
            symbol:'emptyCircle',
            symbolSize:10
        },
        {
            name:'负债合计',
            type:'line',
            data:['',15,16, 14, 17,''],
            symbol:'emptyCircle',
            symbolSize:10
        }
    ]
};

financeInfoChart.setOption(option);

//短期偿债能力（流动比率）
var payAbilityChart1 = echarts.init(document.getElementById('pay-ability-chart1'));
option = {
    title: {
        text: '',
        subtext: '流动比率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f'
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
payAbilityChart1.setOption(option);

//短期偿债能力（速动比率）
var payAbilityChart2 = echarts.init(document.getElementById('pay-ability-chart2'));
option = {
    title: {
        text: '',
        subtext: '速动比率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,
            textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
payAbilityChart2.setOption(option);


//长期偿债能力（股东权益对负债比率）
var payAbilityChart3 = echarts.init(document.getElementById('pay-ability-chart3'));
option = {
    title: {
        text: '',
        subtext: '股东权益对负债比率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};

payAbilityChart3.setOption(option);

//长期偿债能力（负债比率与权益比率）
var payAbilityChart4 = echarts.init(document.getElementById('pay-ability-chart4'));
option = {
    title: {
        text: '',
        subtext: '负债比率与权益比率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["负债比率","权益比率"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#0088cc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0.1,
        max:1000,
        type: 'value',
       // data:[0.1,1,100,1000,10000],
        name: 'y',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#0088cc",
                width: 3
            }
        },
        splitLine: {
            //interval:6,
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '负债比率',
        type: 'line',
        data: [200, 240, 280, 320, 360,400],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#3ccbcc',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#3ccbcc',
                borderWidth:3
            }
        }
    },{
        name: '权益比率',
        type: 'line',
        data: [200, 300, 400, 490, 580,660],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#b7a3df',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#b7a3df',
                borderWidth:3
            }
        }
    }]
};
payAbilityChart4.setOption(option);

//长期偿债能力（固定资产对股东权益比率）
var payAbilityChart5 = echarts.init(document.getElementById('pay-ability-chart5'));
option = {
    title: {
        text: '',
        subtext: '固定资产对股东权益比率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
payAbilityChart5.setOption(option);

//长期偿债能力（有形资产）
var payAbilityChart6 = echarts.init(document.getElementById('pay-ability-chart6'));
option = {
    title: {
        text: '',
        subtext: '有形资产净额对长期负债比率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
payAbilityChart6.setOption(option);

//盈利能力分析（销售利润率）
var profitAbilityChart1 = echarts.init(document.getElementById('profit-ability-chart1'));
option = {
    title: {
        text: '',
        subtext: '销售利润率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
profitAbilityChart1.setOption(option);

//盈利能力分析（成本费用利润率）
var profitAbilityChart2 = echarts.init(document.getElementById('profit-ability-chart2'));
option = {
    title: {
        text: '',
        subtext: '成本费用利润率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
profitAbilityChart2.setOption(option);

//盈利能力分析（总资产利润率）
var profitAbilityChart3 = echarts.init(document.getElementById('profit-ability-chart3'));
option = {
    title: {
        text: '',
        subtext: '总资产利润率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
profitAbilityChart3.setOption(option);

//盈利能力分析（总资产利润率）
var profitAbilityChart4 = echarts.init(document.getElementById('profit-ability-chart4'));
option = {
    title: {
        text: '',
        subtext: '权益利润率',
        top:-30,
        subtextStyle:{
            fontSize:16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        show:false,
        width:'auto',
        data: ["新增数"],
        textStyle: {
            color: "#333"
        },
        align:'auto'
    },
    color:'#d15e3f',
    xAxis: [{
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013','2014'],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#848484'
            }
        },
        splitLine: {
            show: true
        }
    }],
    yAxis: [{
        min:0,
        max:1200,
        type: 'value',
        name: '万',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#848484'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 3
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type : "solid"
            }
        },  
        axisTick: {
            show: false
        }
    }],
    grid: {
        x: '50',
        x2: '30'
    },
    series: [{
        name: '新增数（元）',
        type: 'line',
        data: [332, 570, 770, 900, 1190,442],
        symbolSize:10,
        lineStyle:{
            normal:{
                color:'#d15e3f',
                width:2
            }
        },
        itemStyle:{
            normal:{
                color:'#d15e3f',
                borderWidth:3
            }
        }
    }]
};
profitAbilityChart4.setOption(option);
//行业舆情图谱
var consensusEvalChart1 = echarts.init(document.getElementById('consensus-eval-chart1'));

option = {
    title : {
        text : '',
        subtext : ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    xAxis : [
        {
            type : 'category',
            axisLabel: {
                formatter : function(v) {
                    return '2-15'
                }
            },
            data : function (){
                var list = [];
                var len = 0;
                while (len++ < 500) {
                    list.push(len);
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            min:0,
            max:23,
            interval:23,
            type : 'value'
        }
    ],
    animation: false,
    series : [
        {
            name:'series1',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                    return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
                           + params.value[1] + ', ' 
                           + params.value[2]; 
                },
                axisPointer:{
                    show: true
                }
            },
            symbolSize: function (value){
                return Math.round(value[2]/10);
            },
            data: (function () {
                var d = [];
                var len = 0;
                var value;
                while (len++ < 500) {
                    d.push([
                        len,
                        (Math.random()*23).toFixed(2) - 0,
                        (Math.random()*200).toFixed(2) - 0
                    ]);
                }
                return d;
            })()
        },
        {
            name:'series2',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                    return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
                           + params.value[1] + ', ' 
                           + params.value[2]; 
                },
                axisPointer:{
                    show: true
                }
            },
            symbolSize: function (value){
                return Math.round(value[2]/10);
            },
            data: (function () {
                var d = [];
                var len = 0;
                var value;
                while (len++ < 500) {
                    d.push([
                        len,
                        (Math.random()*22).toFixed(2) - 0,
                        (Math.random()*200).toFixed(2) - 0
                    ]);
                }
                return d;
            })()
        }
    ]
};
consensusEvalChart1.setOption(option);
//行业舆情倾向
var consensusEvalChart2 = echarts.init(document.getElementById('consensus-eval-chart2'));


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
        formatter: "{b}: <a style='color:#ff5a00;font-weight:600; font-size:16px;'>{c}</a> 家",
        padding: 10
    },
    color: ['#e21b10','#ffae2e','#7d0000',],
        calculable: false,
        series: [{
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [30, 65],
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{b}\n({d}%)",
                    textStyle: {
                        color: "#666",
                        fontSize:14
                    }
                }
            },
            labelLine: {
                normal: {
                    textStyle: {
                        fontSize: 26
                    },
                    length: 10,
                    length2: 15,
                    lineStyle: {
                        width: 1,
                        color:'#7f7f7f'
                    }
                }
            },
            data: [{
                value: 72991,
                name: '中性情绪'
            }, {
                value: 27283,
                name: '正面情绪'
            }, {
                value: 45927,
                name: '负面情绪'
            }]
        }]
};
consensusEvalChart2.setOption(option);
//媒体来源
var consensusEvalChart3 = echarts.init(document.getElementById('consensus-eval-chart3'));
option = {
    tooltip:{
        show:false
    },
    grid: {
        left:'40%',
        right:'0%'
    },
    yAxis : [
        {
            type : 'category',
            data : [ '1','2', '3','4','5','6','7','8','9','10'],
            boundaryGap:true,
            inverse:true,
            axisLabel: {
                show:true,
                margin: 10
            },
            
            axisTick: {
               show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#b2b2b2',
                    width:1
                }
            }
        }
    ],
    xAxis : [
        {
            type : 'value',
            axisLabel: {
               show:false
            },
            splitLine: {
               show:false
            },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            }
        }
    ],
    itemStyle:{
        emphasis:{
            borderColor:'#fff',
            borderWidth:3
        }
    },
    label:{
        normal:{
            show:false,
            position:'right',
            textStyle:{
                color:'#fff'
            }
        }
    },
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
            data:[
                {
                    value:'132',
                    itemStyle:{
                        normal:{
                            color:['#f92323']
                        }
                    }
                    
                },
                {
                    value:'120',
                    itemStyle:{
                        normal:{
                            color:['#fa4d24']
                        }
                    }
                },
                {
                    value:'110',
                    itemStyle:{
                        normal:{
                            color:['#fa5c24']
                        }
                    }
                },
                {
                    value:'100',
                    itemStyle:{
                        normal:{
                            color:['#fb6c25']
                        }
                    }
                },
                {
                    value:'90',
                    itemStyle:{
                        normal:{
                            color:['#fa6f23']
                        }
                    }
                },
                {
                    value:'80',
                    itemStyle:{
                        normal:{
                            color:['#fc7524']
                        }
                    }
                },
                {
                    value:'70',
                    itemStyle:{
                        normal:{
                            color:['#fd8524']
                        }
                    }
                },
                {
                    value:'60',
                    itemStyle:{
                        normal:{
                            color:['#fd9924']
                        }
                    }
                },
                {
                    value:'50',
                    itemStyle:{
                        normal:{
                            color:['#ffab26']
                        }
                    }
                },
                {
                    value:'40',
                    itemStyle:{
                        normal:{
                            color:['#ffbf27']
                        }
                    }
                }
            ]
        }
    ]
};

consensusEvalChart3.setOption(option);