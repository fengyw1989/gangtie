// 我行 - 企业贷后风险预警
var riskEarlyWarning = echarts.init(document.getElementById('riskEarlyWarning'));
// 核心企业 
var data = [
     {name: '唐山', value: 1},
     {name: '杭州', value: 1},
     {name: '南宁', value: 1},
     {name: '西安', value: 1},
     {name: '武汉', value: 2},
     {name: '徐州', value: 1},
     {name: '济南', value: 1}
];
// 主动关联企业 
var data1 = [
     {name: '海门', value: 9},
     {name: '鄂尔多斯', value: 12},
     {name: '招远', value: 12},
     {name: '舟山', value: 12},
     {name: '齐齐哈尔', value: 14},
     {name: '盐城', value: 15},
     {name: '赤峰', value: 16},
     {name: '青岛', value: 18},
     {name: '乳山', value: 18},
     {name: '金昌', value: 19},
     {name: '泉州', value: 21},
     {name: '莱西', value: 21},
     {name: '日照', value: 21},
     {name: '胶南', value: 22},
     {name: '南通', value: 23},
     {name: '拉萨', value: 24},
     {name: '云浮', value: 24},
     {name: '梅州', value: 25},
     {name: '文登', value: 25},
     {name: '上海', value: 25},
     {name: '攀枝花', value: 25},
     {name: '威海', value: 25},
     {name: '承德', value: 25},
     {name: '厦门', value: 26},
     {name: '汕尾', value: 26},
     {name: '潮州', value: 26},
     {name: '丹东', value: 27},
     {name: '太仓', value: 27},
     {name: '曲靖', value: 27},
     {name: '烟台', value: 28},
     {name: '福州', value: 29},
     {name: '瓦房店', value: 30},
     {name: '即墨', value: 30},
     {name: '抚顺', value: 31},
     {name: '玉溪', value: 31},
     {name: '张家口', value: 31},
     {name: '阳泉', value: 31},
     {name: '莱州', value: 32},
     {name: '句容', value: 75},
     {name: '北京', value: 79},
     {name: '徐州', value: 79},
     {name: '衡水', value: 80},
     {name: '包头', value: 80},
     {name: '绵阳', value: 80},
     {name: '乌鲁木齐', value: 84},
     {name: '枣庄', value: 84},
     {name: '杭州', value: 84},
     {name: '淄博', value: 85},
     {name: '鞍山', value: 86},
     {name: '溧阳', value: 86},
     {name: '库尔勒', value: 86},
     {name: '安阳', value: 90},
     {name: '开封', value: 90},
     {name: '济南', value: 92},
     {name: '德阳', value: 93}
];
//被动关联企业
var data2 = [
     {name: '湖州', value: 32},
     {name: '汕头', value: 32},
     {name: '昆山', value: 33},
     {name: '宁波', value: 33},
     {name: '湛江', value: 33},
     {name: '揭阳', value: 34},
     {name: '荣成', value: 34},
     {name: '连云港', value: 35},
     {name: '葫芦岛', value: 35},
     {name: '常熟', value: 36},
     {name: '东莞', value: 36},
     {name: '河源', value: 36},
     {name: '淮安', value: 36},
     {name: '泰州', value: 36},
     {name: '南宁', value: 37},
     {name: '营口', value: 37},
     {name: '惠州', value: 37},
     {name: '江阴', value: 37},
     {name: '蓬莱', value: 37},
     {name: '韶关', value: 38},
     {name: '嘉峪关', value: 38},
     {name: '广州', value: 38},
     {name: '延安', value: 38},
     {name: '太原', value: 39},
     {name: '清远', value: 39},
     {name: '中山', value: 39},
     {name: '昆明', value: 39},
     {name: '寿光', value: 40},
     {name: '盘锦', value: 40},
     {name: '长治', value: 41},
     {name: '深圳', value: 41}    
];

var option = {
backgroundColor: '#ffffff',
color: ['#fa2837','#ff6600','#00ccff'],
legend: {
    orient: 'vertical',
    x:'left',
    itemWidth:12,
    itemHeight:14,
    borderRadius:50,
    icon: 'rect',
    data:['核心企业','关联企业主动预警','关联企业被动预警'],
    textStyle : {
        color: '#000',
        fontFamily:"Microsoft YaHei",
        fontSize:14
    }
},
tooltip: {
    trigger: 'item',
    formatter: function(params){
        return params.seriesName + '<br/>' + params.data.name + ' : ' + params.data.val + ' 家';
    },
    padding: 10
},
geo: {
    map: 'china',
    label: {
        emphasis: {
            show: false
        }
    },
    roam: false,
    left:'10%',
    right:'10%',
    top:'10%',
    bottom:'auto',
    itemStyle:{
        normal:{
            borderColor:'rgba(193,193,193,1)', //边境线颜色
            borderWidth:1.5,
            areaColor:'#ffffff' //地图颜色
        }
    },
    silent: true
},
series : [{
    name: '核心企业',
    type: 'scatter',
    coordinateSystem: 'geo',
    data: convertData(data),
    symbolSize: 10,
    label: {
        normal: {
            formatter: '{b}',
            position: 'right',
            show: false
        },
        emphasis: {
            show: false
        }
    }
},{
    name: '关联企业主动预警',
    type: 'scatter',
    coordinateSystem: 'geo',
    data: convertData(data1),
    symbolSize: 10,
    label: {
        normal: {
            formatter: '{b}',
            position: 'right',
            show: false
        },
        emphasis: {
            show: false
        }
    }
},{
    name: '关联企业被动预警',
    type: 'scatter',
    coordinateSystem: 'geo',
    data: convertData(data2),
    symbolSize: 10,
    label: {
        normal: {
            formatter: '{b}',
            position: 'right',
            show: false
        },
        emphasis: {
            show: false
        }
    }
}]
};            
// 在这之前替换option部分
riskEarlyWarning.setOption(option); 