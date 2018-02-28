function randomData(min,max) {
    return Math.round(Math.random()*(max-min+1)+min);
}

function publicSentiment(){
//舆情-情绪分布饼图
var EmotionAnalysis_Chars = echarts.init(document.getElementById('EmotionAnalysis_Chars'));
var option = {
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
        padding: 10,
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
				length: 30,
				length2: 25,
				lineStyle: {
					width: 1,
					color:'#7f7f7f'
				}
			}
		},
		data: [{
			value: 72991,
			name: '中性情绪',
		}, {
			value: 27283,
			name: '正面情绪'
		}, {
			value: 45927,
			name: '负面情绪'
		}]
	}]
};
EmotionAnalysis_Chars.setOption(option);
//舆情-负面情绪分布地图
var negativeEmotionDistribution_Chars = echarts.init(document.getElementById('negativeEmotionDistribution_Chars'));
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
	        padding: 10,
	    },

	    visualMap: {
	        min: 0,
	        max: 1200,
	        itemWidth:7,
	        itemHeight:110,
	        realtime: false,
	        calculable: false,
	        hoverLink:false,
	        color:['#c04009','#f44f0d','#f4693a','#fc8761','#fdb096','#d5d5d5'],
	        text: ['1200','30'],           // 文本，默认为数值文本
	        inverse:true
	    },
	    series: [
	        {
	            name: 'iphone3',
	            type: 'map',
	            mapType: 'china',
	            top:0,
	            bottom:0,
	            roam: false,
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            itemStyle:{
	            normal:{
	                    //borderColor:'rgba(193,193,193,1)', //边境线颜色
	                    borderWidth:0,
	                    areaStyle:{
	                        //color: '#ffffff' //地图颜色
	                    }
	                }
	            },
	            data:[
	                {name: '北京',value: randomData(0,1200) },
	                {name: '天津',value: randomData(0,1200) },
	                {name: '上海',value: randomData(0,1200) },
	                {name: '重庆',value: randomData(0,1200) },
	                {name: '河北',value: randomData(0,1200) },
	                {name: '河南',value: randomData(0,1200) },
	                {name: '云南',value: randomData(0,1200) },
	                {name: '辽宁',value: randomData(0,1200) },
	                {name: '黑龙江',value: randomData(0,1200) },
	                {name: '湖南',value: randomData(0,1200) },
	                {name: '安徽',value: randomData(0,1200) },
	                {name: '山东',value: randomData(0,1200) },
	                {name: '新疆',value: randomData(0,1200) },
	                {name: '江苏',value: randomData(0,1200) },
	                {name: '浙江',value: randomData(0,1200) },
	                {name: '江西',value: randomData(0,1200) },
	                {name: '湖北',value: randomData(0,1200) },
	                {name: '广西',value: randomData(0,1200) },
	                {name: '甘肃',value: randomData(0,1200) },
	                {name: '山西',value: randomData(0,1200) },
	                {name: '内蒙古',value: randomData(0,1200) },
	                {name: '陕西',value: randomData(0,1200) },
	                {name: '吉林',value: randomData(0,1200) },
	                {name: '福建',value: randomData(0,1200) },
	                {name: '贵州',value: randomData(0,1200) },
	                {name: '广东',value: randomData(0,1200) },
	                {name: '青海',value: randomData(0,1200) },
	                {name: '西藏',value: randomData(0,1200) },
	                {name: '四川',value: randomData(0,1200) },
	                {name: '宁夏',value: randomData(0,1200) },
	                {name: '海南',value: randomData(0,1200) },
	                {name: '台湾',value: randomData(0,1200) },
	                {name: '香港',value: randomData(0,1200) },
	                {name: '澳门',value: randomData(0,1200) }
	            ]
	        }
	    ]
	};
	negativeEmotionDistribution_Chars.setOption(option);
}

function AcquisitionSmelting(){
//细分-采集与冶炼世界地图
var subdivisionCollection_Chars = echarts.init(document.getElementById('subdivisionCollection_Chars'));
option = {
    timeline: {
        tooltip: {
            show:false
        },
        bottom:20,
        axisType:'category',
        autoPlay:false,
        controlStyle:{
            show:false,
        },
        lineStyle:{
            width:1,
            color:'#ccc'
        },
        label:{
            textStyle:{
                color:'#aeaeae',
                fontSize:14
            }
        },
        itemStyle:{
            normal:{
              borderColor:'#ccc'
            },
            emphasis:{
                color:'#ccc',
            }
        },
        checkpointStyle: {
            symbolSize: 6,
            color: '#c23531',
            borderWidth: 5,
            borderColor: '#ff3600'
        },
        data: ['2016', '2015', '2014','2013','2012']
    },
    options:[{
        tooltip: {
            trigger: 'item',
            borderWidth:1,
            borderColor:'#ff3d0d',
            backgroundColor:'rgba(255,255,255,0.9)',
            textStyle:{
                color:'#333',
                fontWeight:600
            },
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0];
                return params.seriesName + '<br/>' + params.name + ' : <span style="font-size:16px;color:#ff0000; ">' + value + '</span>';
            }
        },
        visualMap: {
            min: 0,
            max: 200,
            text:['高','低'],
            left:50,
            bottom:110,
            itemWidth:7,
            itemHeight:110,
            realtime: false,
            calculable: false,
            hoverLink:false,
            color:['#ff7800','#ffc000','#dee92c','#1ccf1c','#6ad5fc','#00b9fd']
        },
        series: [{
            name: '铁矿石储量 (2016)',
            type: 'map',
            mapType: 'world',
            top:50,
            height:300,
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
            data:[            
                {name: 'Afghanistan', value:randomData(0,200)},   
                {name: 'Angola', value:randomData(0,200)},   
                {name: 'Albania', value:randomData(0,200)},   
                {name: 'United Arab Emirates', value:randomData(0,200)},   
                {name: 'Argentina', value:randomData(0,200)},   
                {name: 'Armenia', value:randomData(0,200)},   
                {name: 'French Southern and Antarctic Lands', value:randomData(0,200)},   
                {name: 'Australia', value:randomData(0,200)},   
                {name: 'Austria', value:randomData(0,200)},   
                {name: 'Azerbaijan', value:randomData(0,200)},   
                {name: 'Burundi', value:randomData(0,200)},   
                {name: 'Belgium', value:randomData(0,200)},   
                {name: 'Benin', value:randomData(0,200)},   
                {name: 'Burkina Faso', value:randomData(0,200)},   
                {name: 'Bangladesh', value:randomData(0,200)},   
                {name: 'Bulgaria', value:randomData(0,200)},   
                {name: 'The Bahamas', value:randomData(0,200)},   
                {name: 'Bosnia and Herzegovina', value:randomData(0,200)},   
                {name: 'Belarus', value:randomData(0,200)},   
                {name: 'Belize', value:randomData(0,200)},    
                {name: 'Bermuda', value:randomData(0,200)},   
                {name: 'Bolivia', value:randomData(0,200)},   
                {name: 'Brazil', value:randomData(0,200)},   
                {name: 'Brunei', value:randomData(0,200)},   
                {name: 'Bhutan', value:randomData(0,200)},   
                {name: 'Botswana', value:randomData(0,200)},   
                {name: 'Central African Republic', value:randomData(0,200)},   
                {name: 'Canada', value:randomData(0,200)},   
                {name: 'Switzerland', value:randomData(0,200)},   
                {name: 'Chile', value:randomData(0,200)},   
                {name: 'China', value:randomData(0,200)},   
                {name: 'Ivory Coast', value:randomData(0,200)},   
                {name: 'Cameroon', value:randomData(0,200)},   
                {name: 'Democratic Republic of the Congo', value:randomData(0,200)},   
                {name: 'Republic of the Congo', value:randomData(0,200)},   
                {name: 'Colombia', value:randomData(0,200)},   
                {name: 'Costa Rica', value:randomData(0,200)},   
                {name: 'Cuba', value:randomData(0,200)},   
                {name: 'Northern Cyprus', value:randomData(0,200)},   
                {name: 'Cyprus', value:randomData(0,200)},   
                {name: 'Czech Republic', value:randomData(0,200)},   
                {name: 'Germany', value:randomData(0,200)},   
                {name: 'Djibouti', value:randomData(0,200)},   
                {name: 'Denmark', value:randomData(0,200)},   
                {name: 'Dominican Republic', value:randomData(0,200)},   
                {name: 'Algeria', value:randomData(0,200)},   
                {name: 'Ecuador', value:randomData(0,200)},   
                {name: 'Egypt', value:randomData(0,200)},   
                {name: 'Eritrea', value:randomData(0,200)},   
                {name: 'Spain', value:randomData(0,200)},   
                {name: 'Estonia', value:randomData(0,200)},   
                {name: 'Ethiopia', value:randomData(0,200)},   
                {name: 'Finland', value:randomData(0,200)},   
                {name: 'Fiji', value:randomData(0,200)},   
                {name: 'Falkland Islands', value:randomData(0,200)},   
                {name: 'France', value:randomData(0,200)},   
                {name: 'Gabon', value:randomData(0,200)},   
                {name: 'United Kingdom', value:randomData(0,200)},   
                {name: 'Georgia', value:randomData(0,200)},   
                {name: 'Ghana', value:randomData(0,200)},   
                {name: 'Guinea', value:randomData(0,200)},   
                {name: 'Gambia', value:randomData(0,200)},   
                {name: 'Guinea Bissau', value:randomData(0,200)},   
                {name: 'Equatorial Guinea', value:randomData(0,200)},   
                {name: 'Greece', value:randomData(0,200)},   
                {name: 'Greenland', value:randomData(0,200)},   
                {name: 'Guatemala', value:randomData(0,200)},   
                {name: 'French Guiana', value:randomData(0,200)},   
                {name: 'Guyana', value:randomData(0,200)},   
                {name: 'Honduras', value:randomData(0,200)},   
                {name: 'Croatia', value:randomData(0,200)},   
                {name: 'Haiti', value:randomData(0,200)},   
                {name: 'Hungary', value:randomData(0,200)},   
                {name: 'Indonesia', value:randomData(0,200)},   
                {name: 'India', value:randomData(0,200)},   
                {name: 'Ireland', value:randomData(0,200)},   
                {name: 'Iran', value:randomData(0,200)},   
                {name: 'Iraq', value:randomData(0,200)},   
                {name: 'Iceland', value:randomData(0,200)},   
                {name: 'Israel', value:randomData(0,200)},   
                {name: 'Italy', value:randomData(0,200)},   
                {name: 'Jamaica', value:randomData(0,200)},   
                {name: 'Jordan', value:randomData(0,200)},   
                {name: 'Japan', value:randomData(0,200)},   
                {name: 'Kazakhstan', value:randomData(0,200)},   
                {name: 'Kenya', value:randomData(0,200)},   
                {name: 'Kyrgyzstan', value:randomData(0,200)},   
                {name: 'Cambodia', value:randomData(0,200)},   
                {name: 'South Korea', value:randomData(0,200)},   
                {name: 'Kosovo', value:randomData(0,200)},   
                {name: 'Kuwait', value:randomData(0,200)},   
                {name: 'Laos', value:randomData(0,200)},   
                {name: 'Lebanon', value:randomData(0,200)},   
                {name: 'Liberia', value:randomData(0,200)},   
                {name: 'Libya', value:randomData(0,200)},   
                {name: 'Sri Lanka', value:randomData(0,200)},   
                {name: 'Lesotho', value:randomData(0,200)},   
                {name: 'Lithuania', value:randomData(0,200)},   
                {name: 'Luxembourg', value:randomData(0,200)},   
                {name: 'Latvia', value:randomData(0,200)},   
                {name: 'Morocco', value:randomData(0,200)},   
                {name: 'Moldova', value:randomData(0,200)},   
                {name: 'Madagascar', value:randomData(0,200)},   
                {name: 'Mexico', value:randomData(0,200)},   
                {name: 'Macedonia', value:randomData(0,200)},   
                {name: 'Mali', value:randomData(0,200)},   
                {name: 'Myanmar', value:randomData(0,200)},   
                {name: 'Montenegro', value:randomData(0,200)},   
                {name: 'Mongolia', value:randomData(0,200)},   
                {name: 'Mozambique', value:randomData(0,200)},   
                {name: 'Mauritania', value:randomData(0,200)},   
                {name: 'Malawi', value:randomData(0,200)},   
                {name: 'Malaysia', value:randomData(0,200)},   
                {name: 'Namibia', value:randomData(0,200)},   
                {name: 'New Caledonia', value:randomData(0,200)},   
                {name: 'Niger', value:randomData(0,200)},   
                {name: 'Nigeria', value:randomData(0,200)},   
                {name: 'Nicaragua', value:randomData(0,200)},   
                {name: 'Netherlands', value:randomData(0,200)},   
                {name: 'Norway', value:randomData(0,200)},   
                {name: 'Nepal', value:randomData(0,200)},   
                {name: 'New Zealand', value:randomData(0,200)},   
                {name: 'Oman', value:randomData(0,200)},   
                {name: 'Pakistan', value:randomData(0,200)},   
                {name: 'Panama', value:randomData(0,200)},   
                {name: 'Peru', value:randomData(0,200)},   
                {name: 'Philippines', value:randomData(0,200)},   
                {name: 'Papua New Guinea', value:randomData(0,200)},   
                {name: 'Poland', value:randomData(0,200)},   
                {name: 'Puerto Rico', value:randomData(0,200)},   
                {name: 'North Korea', value:randomData(0,200)},   
                {name: 'Portugal', value:randomData(0,200)},   
                {name: 'Paraguay', value:randomData(0,200)},   
                {name: 'Qatar', value:randomData(0,200)},   
                {name: 'Romania', value:randomData(0,200)},   
                {name: 'Russia', value:randomData(0,200)},   
                {name: 'Rwanda', value:randomData(0,200)},   
                {name: 'Western Sahara', value:randomData(0,200)},   
                {name: 'Saudi Arabia', value:randomData(0,200)},   
                {name: 'Sudan', value:randomData(0,200)},   
                {name: 'South Sudan', value:randomData(0,200)},   
                {name: 'Senegal', value:randomData(0,200)},   
                {name: 'Solomon Islands', value:randomData(0,200)},   
                {name: 'Sierra Leone', value:randomData(0,200)},   
                {name: 'El Salvador', value:randomData(0,200)},   
                {name: 'Somaliland', value:randomData(0,200)},   
                {name: 'Somalia', value:randomData(0,200)},   
                {name: 'Republic of Serbia', value:randomData(0,200)},   
                {name: 'Suriname', value:randomData(0,200)},   
                {name: 'Slovakia', value:randomData(0,200)},            
                {name: 'Slovenia', value:randomData(0,200)},            
                {name: 'Sweden', value:randomData(0,200)},            
                {name: 'Swaziland', value:randomData(0,200)},            
                {name: 'Syria', value:randomData(0,200)},            
                {name: 'Chad', value:randomData(0,200)},            
                {name: 'Togo', value:randomData(0,200)},            
                {name: 'Thailand', value:randomData(0,200)},            
                {name: 'Tajikistan', value:randomData(0,200)},            
                {name: 'Turkmenistan', value:randomData(0,200)},            
                {name: 'East Timor', value:randomData(0,200)},         
                {name: 'Trinidad and Tobago', value:randomData(0,200)},            
                {name: 'Tunisia', value:randomData(0,200)},            
                {name: 'Turkey', value:randomData(0,200)},            
                {name: 'United Republic of Tanzania', value:randomData(0,200)},            
                {name: 'Uganda', value:randomData(0,200)},            
                {name: 'Ukraine', value:randomData(0,200)},           
                {name: 'Uruguay', value:randomData(0,200)},            
                {name: 'United States of America', value:randomData(0,200)},            
                {name: 'Uzbekistan', value:randomData(0,200)},           
                {name: 'Venezuela', value:randomData(0,200)},           
                {name: 'Vietnam', value:randomData(0,200)},            
                {name: 'Vanuatu', value:randomData(0,200)},           
                {name: 'West Bank', value:randomData(0,200)},          
                {name: 'Yemen', value:randomData(0,200)},            
                {name: 'South Africa', value:randomData(0,200)},            
                {name: 'Zambia', value:randomData(0,200)},            
                {name: 'Zimbabwe', value:randomData(0,200)} 
             ]
        }]
    },{
        series: [{
	        name: '铁矿石储量 (2015)',
	        type: 'map',
	        mapType: 'world',
	        data:[            
                {name: 'Afghanistan', value:randomData(0,200)},   
                {name: 'Angola', value:randomData(0,200)},   
                {name: 'Albania', value:randomData(0,200)},   
                {name: 'United Arab Emirates', value:randomData(0,200)},   
                {name: 'Argentina', value:randomData(0,200)},   
                {name: 'Armenia', value:randomData(0,200)},   
                {name: 'French Southern and Antarctic Lands', value:randomData(0,200)},   
                {name: 'Australia', value:randomData(0,200)},   
                {name: 'Austria', value:randomData(0,200)},   
                {name: 'Azerbaijan', value:randomData(0,200)},   
                {name: 'Burundi', value:randomData(0,200)},   
                {name: 'Belgium', value:randomData(0,200)},   
                {name: 'Benin', value:randomData(0,200)},   
                {name: 'Burkina Faso', value:randomData(0,200)},   
                {name: 'Bangladesh', value:randomData(0,200)},   
                {name: 'Bulgaria', value:randomData(0,200)},   
                {name: 'The Bahamas', value:randomData(0,200)},   
                {name: 'Bosnia and Herzegovina', value:randomData(0,200)},   
                {name: 'Belarus', value:randomData(0,200)},   
                {name: 'Belize', value:randomData(0,200)},    
                {name: 'Bermuda', value:randomData(0,200)},   
                {name: 'Bolivia', value:randomData(0,200)},   
                {name: 'Brazil', value:randomData(0,200)},   
                {name: 'Brunei', value:randomData(0,200)},   
                {name: 'Bhutan', value:randomData(0,200)},   
                {name: 'Botswana', value:randomData(0,200)},   
                {name: 'Central African Republic', value:randomData(0,200)},   
                {name: 'Canada', value:randomData(0,200)},   
                {name: 'Switzerland', value:randomData(0,200)},   
                {name: 'Chile', value:randomData(0,200)},   
                {name: 'China', value:randomData(0,200)},   
                {name: 'Ivory Coast', value:randomData(0,200)},   
                {name: 'Cameroon', value:randomData(0,200)},   
                {name: 'Democratic Republic of the Congo', value:randomData(0,200)},   
                {name: 'Republic of the Congo', value:randomData(0,200)},   
                {name: 'Colombia', value:randomData(0,200)},   
                {name: 'Costa Rica', value:randomData(0,200)},   
                {name: 'Cuba', value:randomData(0,200)},   
                {name: 'Northern Cyprus', value:randomData(0,200)},   
                {name: 'Cyprus', value:randomData(0,200)},   
                {name: 'Czech Republic', value:randomData(0,200)},   
                {name: 'Germany', value:randomData(0,200)},   
                {name: 'Djibouti', value:randomData(0,200)},   
                {name: 'Denmark', value:randomData(0,200)},   
                {name: 'Dominican Republic', value:randomData(0,200)},   
                {name: 'Algeria', value:randomData(0,200)},   
                {name: 'Ecuador', value:randomData(0,200)},   
                {name: 'Egypt', value:randomData(0,200)},   
                {name: 'Eritrea', value:randomData(0,200)},   
                {name: 'Spain', value:randomData(0,200)},   
                {name: 'Estonia', value:randomData(0,200)},   
                {name: 'Ethiopia', value:randomData(0,200)},   
                {name: 'Finland', value:randomData(0,200)},   
                {name: 'Fiji', value:randomData(0,200)},   
                {name: 'Falkland Islands', value:randomData(0,200)},   
                {name: 'France', value:randomData(0,200)},   
                {name: 'Gabon', value:randomData(0,200)},   
                {name: 'United Kingdom', value:randomData(0,200)},   
                {name: 'Georgia', value:randomData(0,200)},   
                {name: 'Ghana', value:randomData(0,200)},   
                {name: 'Guinea', value:randomData(0,200)},   
                {name: 'Gambia', value:randomData(0,200)},   
                {name: 'Guinea Bissau', value:randomData(0,200)},   
                {name: 'Equatorial Guinea', value:randomData(0,200)},   
                {name: 'Greece', value:randomData(0,200)},   
                {name: 'Greenland', value:randomData(0,200)},   
                {name: 'Guatemala', value:randomData(0,200)},   
                {name: 'French Guiana', value:randomData(0,200)},   
                {name: 'Guyana', value:randomData(0,200)},   
                {name: 'Honduras', value:randomData(0,200)},   
                {name: 'Croatia', value:randomData(0,200)},   
                {name: 'Haiti', value:randomData(0,200)},   
                {name: 'Hungary', value:randomData(0,200)},   
                {name: 'Indonesia', value:randomData(0,200)},   
                {name: 'India', value:randomData(0,200)},   
                {name: 'Ireland', value:randomData(0,200)},   
                {name: 'Iran', value:randomData(0,200)},   
                {name: 'Iraq', value:randomData(0,200)},   
                {name: 'Iceland', value:randomData(0,200)},   
                {name: 'Israel', value:randomData(0,200)},   
                {name: 'Italy', value:randomData(0,200)},   
                {name: 'Jamaica', value:randomData(0,200)},   
                {name: 'Jordan', value:randomData(0,200)},   
                {name: 'Japan', value:randomData(0,200)},   
                {name: 'Kazakhstan', value:randomData(0,200)},   
                {name: 'Kenya', value:randomData(0,200)},   
                {name: 'Kyrgyzstan', value:randomData(0,200)},   
                {name: 'Cambodia', value:randomData(0,200)},   
                {name: 'South Korea', value:randomData(0,200)},   
                {name: 'Kosovo', value:randomData(0,200)},   
                {name: 'Kuwait', value:randomData(0,200)},   
                {name: 'Laos', value:randomData(0,200)},   
                {name: 'Lebanon', value:randomData(0,200)},   
                {name: 'Liberia', value:randomData(0,200)},   
                {name: 'Libya', value:randomData(0,200)},   
                {name: 'Sri Lanka', value:randomData(0,200)},   
                {name: 'Lesotho', value:randomData(0,200)},   
                {name: 'Lithuania', value:randomData(0,200)},   
                {name: 'Luxembourg', value:randomData(0,200)},   
                {name: 'Latvia', value:randomData(0,200)},   
                {name: 'Morocco', value:randomData(0,200)},   
                {name: 'Moldova', value:randomData(0,200)},   
                {name: 'Madagascar', value:randomData(0,200)},   
                {name: 'Mexico', value:randomData(0,200)},   
                {name: 'Macedonia', value:randomData(0,200)},   
                {name: 'Mali', value:randomData(0,200)},   
                {name: 'Myanmar', value:randomData(0,200)},   
                {name: 'Montenegro', value:randomData(0,200)},   
                {name: 'Mongolia', value:randomData(0,200)},   
                {name: 'Mozambique', value:randomData(0,200)},   
                {name: 'Mauritania', value:randomData(0,200)},   
                {name: 'Malawi', value:randomData(0,200)},   
                {name: 'Malaysia', value:randomData(0,200)},   
                {name: 'Namibia', value:randomData(0,200)},   
                {name: 'New Caledonia', value:randomData(0,200)},   
                {name: 'Niger', value:randomData(0,200)},   
                {name: 'Nigeria', value:randomData(0,200)},   
                {name: 'Nicaragua', value:randomData(0,200)},   
                {name: 'Netherlands', value:randomData(0,200)},   
                {name: 'Norway', value:randomData(0,200)},   
                {name: 'Nepal', value:randomData(0,200)},   
                {name: 'New Zealand', value:randomData(0,200)},   
                {name: 'Oman', value:randomData(0,200)},   
                {name: 'Pakistan', value:randomData(0,200)},   
                {name: 'Panama', value:randomData(0,200)},   
                {name: 'Peru', value:randomData(0,200)},   
                {name: 'Philippines', value:randomData(0,200)},   
                {name: 'Papua New Guinea', value:randomData(0,200)},   
                {name: 'Poland', value:randomData(0,200)},   
                {name: 'Puerto Rico', value:randomData(0,200)},   
                {name: 'North Korea', value:randomData(0,200)},   
                {name: 'Portugal', value:randomData(0,200)},   
                {name: 'Paraguay', value:randomData(0,200)},   
                {name: 'Qatar', value:randomData(0,200)},   
                {name: 'Romania', value:randomData(0,200)},   
                {name: 'Russia', value:randomData(0,200)},   
                {name: 'Rwanda', value:randomData(0,200)},   
                {name: 'Western Sahara', value:randomData(0,200)},   
                {name: 'Saudi Arabia', value:randomData(0,200)},   
                {name: 'Sudan', value:randomData(0,200)},   
                {name: 'South Sudan', value:randomData(0,200)},   
                {name: 'Senegal', value:randomData(0,200)},   
                {name: 'Solomon Islands', value:randomData(0,200)},   
                {name: 'Sierra Leone', value:randomData(0,200)},   
                {name: 'El Salvador', value:randomData(0,200)},   
                {name: 'Somaliland', value:randomData(0,200)},   
                {name: 'Somalia', value:randomData(0,200)},   
                {name: 'Republic of Serbia', value:randomData(0,200)},   
                {name: 'Suriname', value:randomData(0,200)},   
                {name: 'Slovakia', value:randomData(0,200)},            
                {name: 'Slovenia', value:randomData(0,200)},            
                {name: 'Sweden', value:randomData(0,200)},            
                {name: 'Swaziland', value:randomData(0,200)},            
                {name: 'Syria', value:randomData(0,200)},            
                {name: 'Chad', value:randomData(0,200)},            
                {name: 'Togo', value:randomData(0,200)},            
                {name: 'Thailand', value:randomData(0,200)},            
                {name: 'Tajikistan', value:randomData(0,200)},            
                {name: 'Turkmenistan', value:randomData(0,200)},            
                {name: 'East Timor', value:randomData(0,200)},         
                {name: 'Trinidad and Tobago', value:randomData(0,200)},            
                {name: 'Tunisia', value:randomData(0,200)},            
                {name: 'Turkey', value:randomData(0,200)},            
                {name: 'United Republic of Tanzania', value:randomData(0,200)},            
                {name: 'Uganda', value:randomData(0,200)},            
                {name: 'Ukraine', value:randomData(0,200)},           
                {name: 'Uruguay', value:randomData(0,200)},            
                {name: 'United States of America', value:randomData(0,200)},            
                {name: 'Uzbekistan', value:randomData(0,200)},           
                {name: 'Venezuela', value:randomData(0,200)},           
                {name: 'Vietnam', value:randomData(0,200)},            
                {name: 'Vanuatu', value:randomData(0,200)},           
                {name: 'West Bank', value:randomData(0,200)},          
                {name: 'Yemen', value:randomData(0,200)},            
                {name: 'South Africa', value:randomData(0,200)},            
                {name: 'Zambia', value:randomData(0,200)},            
                {name: 'Zimbabwe', value:randomData(0,200)} 
             ]
        }]
    },{
        series: [{
                    name: '铁矿石储量 (2014)',
                    type: 'map',
                    mapType: 'world',
                    top:50,
                    height:300,
                    roam: false,
                    itemStyle:{
                        emphasis:{label:{show:true}}
                    },
                    data:[            
                {name: 'Afghanistan', value:randomData(0,200)},   
                {name: 'Angola', value:randomData(0,200)},   
                {name: 'Albania', value:randomData(0,200)},   
                {name: 'United Arab Emirates', value:randomData(0,200)},   
                {name: 'Argentina', value:randomData(0,200)},   
                {name: 'Armenia', value:randomData(0,200)},   
                {name: 'French Southern and Antarctic Lands', value:randomData(0,200)},   
                {name: 'Australia', value:randomData(0,200)},   
                {name: 'Austria', value:randomData(0,200)},   
                {name: 'Azerbaijan', value:randomData(0,200)},   
                {name: 'Burundi', value:randomData(0,200)},   
                {name: 'Belgium', value:randomData(0,200)},   
                {name: 'Benin', value:randomData(0,200)},   
                {name: 'Burkina Faso', value:randomData(0,200)},   
                {name: 'Bangladesh', value:randomData(0,200)},   
                {name: 'Bulgaria', value:randomData(0,200)},   
                {name: 'The Bahamas', value:randomData(0,200)},   
                {name: 'Bosnia and Herzegovina', value:randomData(0,200)},   
                {name: 'Belarus', value:randomData(0,200)},   
                {name: 'Belize', value:randomData(0,200)},    
                {name: 'Bermuda', value:randomData(0,200)},   
                {name: 'Bolivia', value:randomData(0,200)},   
                {name: 'Brazil', value:randomData(0,200)},   
                {name: 'Brunei', value:randomData(0,200)},   
                {name: 'Bhutan', value:randomData(0,200)},   
                {name: 'Botswana', value:randomData(0,200)},   
                {name: 'Central African Republic', value:randomData(0,200)},   
                {name: 'Canada', value:randomData(0,200)},   
                {name: 'Switzerland', value:randomData(0,200)},   
                {name: 'Chile', value:randomData(0,200)},   
                {name: 'China', value:randomData(0,200)},   
                {name: 'Ivory Coast', value:randomData(0,200)},   
                {name: 'Cameroon', value:randomData(0,200)},   
                {name: 'Democratic Republic of the Congo', value:randomData(0,200)},   
                {name: 'Republic of the Congo', value:randomData(0,200)},   
                {name: 'Colombia', value:randomData(0,200)},   
                {name: 'Costa Rica', value:randomData(0,200)},   
                {name: 'Cuba', value:randomData(0,200)},   
                {name: 'Northern Cyprus', value:randomData(0,200)},   
                {name: 'Cyprus', value:randomData(0,200)},   
                {name: 'Czech Republic', value:randomData(0,200)},   
                {name: 'Germany', value:randomData(0,200)},   
                {name: 'Djibouti', value:randomData(0,200)},   
                {name: 'Denmark', value:randomData(0,200)},   
                {name: 'Dominican Republic', value:randomData(0,200)},   
                {name: 'Algeria', value:randomData(0,200)},   
                {name: 'Ecuador', value:randomData(0,200)},   
                {name: 'Egypt', value:randomData(0,200)},   
                {name: 'Eritrea', value:randomData(0,200)},   
                {name: 'Spain', value:randomData(0,200)},   
                {name: 'Estonia', value:randomData(0,200)},   
                {name: 'Ethiopia', value:randomData(0,200)},   
                {name: 'Finland', value:randomData(0,200)},   
                {name: 'Fiji', value:randomData(0,200)},   
                {name: 'Falkland Islands', value:randomData(0,200)},   
                {name: 'France', value:randomData(0,200)},   
                {name: 'Gabon', value:randomData(0,200)},   
                {name: 'United Kingdom', value:randomData(0,200)},   
                {name: 'Georgia', value:randomData(0,200)},   
                {name: 'Ghana', value:randomData(0,200)},   
                {name: 'Guinea', value:randomData(0,200)},   
                {name: 'Gambia', value:randomData(0,200)},   
                {name: 'Guinea Bissau', value:randomData(0,200)},   
                {name: 'Equatorial Guinea', value:randomData(0,200)},   
                {name: 'Greece', value:randomData(0,200)},   
                {name: 'Greenland', value:randomData(0,200)},   
                {name: 'Guatemala', value:randomData(0,200)},   
                {name: 'French Guiana', value:randomData(0,200)},   
                {name: 'Guyana', value:randomData(0,200)},   
                {name: 'Honduras', value:randomData(0,200)},   
                {name: 'Croatia', value:randomData(0,200)},   
                {name: 'Haiti', value:randomData(0,200)},   
                {name: 'Hungary', value:randomData(0,200)},   
                {name: 'Indonesia', value:randomData(0,200)},   
                {name: 'India', value:randomData(0,200)},   
                {name: 'Ireland', value:randomData(0,200)},   
                {name: 'Iran', value:randomData(0,200)},   
                {name: 'Iraq', value:randomData(0,200)},   
                {name: 'Iceland', value:randomData(0,200)},   
                {name: 'Israel', value:randomData(0,200)},   
                {name: 'Italy', value:randomData(0,200)},   
                {name: 'Jamaica', value:randomData(0,200)},   
                {name: 'Jordan', value:randomData(0,200)},   
                {name: 'Japan', value:randomData(0,200)},   
                {name: 'Kazakhstan', value:randomData(0,200)},   
                {name: 'Kenya', value:randomData(0,200)},   
                {name: 'Kyrgyzstan', value:randomData(0,200)},   
                {name: 'Cambodia', value:randomData(0,200)},   
                {name: 'South Korea', value:randomData(0,200)},   
                {name: 'Kosovo', value:randomData(0,200)},   
                {name: 'Kuwait', value:randomData(0,200)},   
                {name: 'Laos', value:randomData(0,200)},   
                {name: 'Lebanon', value:randomData(0,200)},   
                {name: 'Liberia', value:randomData(0,200)},   
                {name: 'Libya', value:randomData(0,200)},   
                {name: 'Sri Lanka', value:randomData(0,200)},   
                {name: 'Lesotho', value:randomData(0,200)},   
                {name: 'Lithuania', value:randomData(0,200)},   
                {name: 'Luxembourg', value:randomData(0,200)},   
                {name: 'Latvia', value:randomData(0,200)},   
                {name: 'Morocco', value:randomData(0,200)},   
                {name: 'Moldova', value:randomData(0,200)},   
                {name: 'Madagascar', value:randomData(0,200)},   
                {name: 'Mexico', value:randomData(0,200)},   
                {name: 'Macedonia', value:randomData(0,200)},   
                {name: 'Mali', value:randomData(0,200)},   
                {name: 'Myanmar', value:randomData(0,200)},   
                {name: 'Montenegro', value:randomData(0,200)},   
                {name: 'Mongolia', value:randomData(0,200)},   
                {name: 'Mozambique', value:randomData(0,200)},   
                {name: 'Mauritania', value:randomData(0,200)},   
                {name: 'Malawi', value:randomData(0,200)},   
                {name: 'Malaysia', value:randomData(0,200)},   
                {name: 'Namibia', value:randomData(0,200)},   
                {name: 'New Caledonia', value:randomData(0,200)},   
                {name: 'Niger', value:randomData(0,200)},   
                {name: 'Nigeria', value:randomData(0,200)},   
                {name: 'Nicaragua', value:randomData(0,200)},   
                {name: 'Netherlands', value:randomData(0,200)},   
                {name: 'Norway', value:randomData(0,200)},   
                {name: 'Nepal', value:randomData(0,200)},   
                {name: 'New Zealand', value:randomData(0,200)},   
                {name: 'Oman', value:randomData(0,200)},   
                {name: 'Pakistan', value:randomData(0,200)},   
                {name: 'Panama', value:randomData(0,200)},   
                {name: 'Peru', value:randomData(0,200)},   
                {name: 'Philippines', value:randomData(0,200)},   
                {name: 'Papua New Guinea', value:randomData(0,200)},   
                {name: 'Poland', value:randomData(0,200)},   
                {name: 'Puerto Rico', value:randomData(0,200)},   
                {name: 'North Korea', value:randomData(0,200)},   
                {name: 'Portugal', value:randomData(0,200)},   
                {name: 'Paraguay', value:randomData(0,200)},   
                {name: 'Qatar', value:randomData(0,200)},   
                {name: 'Romania', value:randomData(0,200)},   
                {name: 'Russia', value:randomData(0,200)},   
                {name: 'Rwanda', value:randomData(0,200)},   
                {name: 'Western Sahara', value:randomData(0,200)},   
                {name: 'Saudi Arabia', value:randomData(0,200)},   
                {name: 'Sudan', value:randomData(0,200)},   
                {name: 'South Sudan', value:randomData(0,200)},   
                {name: 'Senegal', value:randomData(0,200)},   
                {name: 'Solomon Islands', value:randomData(0,200)},   
                {name: 'Sierra Leone', value:randomData(0,200)},   
                {name: 'El Salvador', value:randomData(0,200)},   
                {name: 'Somaliland', value:randomData(0,200)},   
                {name: 'Somalia', value:randomData(0,200)},   
                {name: 'Republic of Serbia', value:randomData(0,200)},   
                {name: 'Suriname', value:randomData(0,200)},   
                {name: 'Slovakia', value:randomData(0,200)},            
                {name: 'Slovenia', value:randomData(0,200)},            
                {name: 'Sweden', value:randomData(0,200)},            
                {name: 'Swaziland', value:randomData(0,200)},            
                {name: 'Syria', value:randomData(0,200)},            
                {name: 'Chad', value:randomData(0,200)},            
                {name: 'Togo', value:randomData(0,200)},            
                {name: 'Thailand', value:randomData(0,200)},            
                {name: 'Tajikistan', value:randomData(0,200)},            
                {name: 'Turkmenistan', value:randomData(0,200)},            
                {name: 'East Timor', value:randomData(0,200)},         
                {name: 'Trinidad and Tobago', value:randomData(0,200)},            
                {name: 'Tunisia', value:randomData(0,200)},            
                {name: 'Turkey', value:randomData(0,200)},            
                {name: 'United Republic of Tanzania', value:randomData(0,200)},            
                {name: 'Uganda', value:randomData(0,200)},            
                {name: 'Ukraine', value:randomData(0,200)},           
                {name: 'Uruguay', value:randomData(0,200)},            
                {name: 'United States of America', value:randomData(0,200)},            
                {name: 'Uzbekistan', value:randomData(0,200)},           
                {name: 'Venezuela', value:randomData(0,200)},           
                {name: 'Vietnam', value:randomData(0,200)},            
                {name: 'Vanuatu', value:randomData(0,200)},           
                {name: 'West Bank', value:randomData(0,200)},          
                {name: 'Yemen', value:randomData(0,200)},            
                {name: 'South Africa', value:randomData(0,200)},            
                {name: 'Zambia', value:randomData(0,200)},            
                {name: 'Zimbabwe', value:randomData(0,200)} 
             ]
        }]
    },{
        series: [{
                    name: '铁矿石储量 (2013)',
                    type: 'map',
                    mapType: 'world',
                    top:50,
                    height:300,
                    roam: false,
                    itemStyle:{
                        emphasis:{label:{show:true}}
                    },
                    data:[            
                {name: 'Afghanistan', value:randomData(0,200)},   
                {name: 'Angola', value:randomData(0,200)},   
                {name: 'Albania', value:randomData(0,200)},   
                {name: 'United Arab Emirates', value:randomData(0,200)},   
                {name: 'Argentina', value:randomData(0,200)},   
                {name: 'Armenia', value:randomData(0,200)},   
                {name: 'French Southern and Antarctic Lands', value:randomData(0,200)},   
                {name: 'Australia', value:randomData(0,200)},   
                {name: 'Austria', value:randomData(0,200)},   
                {name: 'Azerbaijan', value:randomData(0,200)},   
                {name: 'Burundi', value:randomData(0,200)},   
                {name: 'Belgium', value:randomData(0,200)},   
                {name: 'Benin', value:randomData(0,200)},   
                {name: 'Burkina Faso', value:randomData(0,200)},   
                {name: 'Bangladesh', value:randomData(0,200)},   
                {name: 'Bulgaria', value:randomData(0,200)},   
                {name: 'The Bahamas', value:randomData(0,200)},   
                {name: 'Bosnia and Herzegovina', value:randomData(0,200)},   
                {name: 'Belarus', value:randomData(0,200)},   
                {name: 'Belize', value:randomData(0,200)},    
                {name: 'Bermuda', value:randomData(0,200)},   
                {name: 'Bolivia', value:randomData(0,200)},   
                {name: 'Brazil', value:randomData(0,200)},   
                {name: 'Brunei', value:randomData(0,200)},   
                {name: 'Bhutan', value:randomData(0,200)},   
                {name: 'Botswana', value:randomData(0,200)},   
                {name: 'Central African Republic', value:randomData(0,200)},   
                {name: 'Canada', value:randomData(0,200)},   
                {name: 'Switzerland', value:randomData(0,200)},   
                {name: 'Chile', value:randomData(0,200)},   
                {name: 'China', value:randomData(0,200)},   
                {name: 'Ivory Coast', value:randomData(0,200)},   
                {name: 'Cameroon', value:randomData(0,200)},   
                {name: 'Democratic Republic of the Congo', value:randomData(0,200)},   
                {name: 'Republic of the Congo', value:randomData(0,200)},   
                {name: 'Colombia', value:randomData(0,200)},   
                {name: 'Costa Rica', value:randomData(0,200)},   
                {name: 'Cuba', value:randomData(0,200)},   
                {name: 'Northern Cyprus', value:randomData(0,200)},   
                {name: 'Cyprus', value:randomData(0,200)},   
                {name: 'Czech Republic', value:randomData(0,200)},   
                {name: 'Germany', value:randomData(0,200)},   
                {name: 'Djibouti', value:randomData(0,200)},   
                {name: 'Denmark', value:randomData(0,200)},   
                {name: 'Dominican Republic', value:randomData(0,200)},   
                {name: 'Algeria', value:randomData(0,200)},   
                {name: 'Ecuador', value:randomData(0,200)},   
                {name: 'Egypt', value:randomData(0,200)},   
                {name: 'Eritrea', value:randomData(0,200)},   
                {name: 'Spain', value:randomData(0,200)},   
                {name: 'Estonia', value:randomData(0,200)},   
                {name: 'Ethiopia', value:randomData(0,200)},   
                {name: 'Finland', value:randomData(0,200)},   
                {name: 'Fiji', value:randomData(0,200)},   
                {name: 'Falkland Islands', value:randomData(0,200)},   
                {name: 'France', value:randomData(0,200)},   
                {name: 'Gabon', value:randomData(0,200)},   
                {name: 'United Kingdom', value:randomData(0,200)},   
                {name: 'Georgia', value:randomData(0,200)},   
                {name: 'Ghana', value:randomData(0,200)},   
                {name: 'Guinea', value:randomData(0,200)},   
                {name: 'Gambia', value:randomData(0,200)},   
                {name: 'Guinea Bissau', value:randomData(0,200)},   
                {name: 'Equatorial Guinea', value:randomData(0,200)},   
                {name: 'Greece', value:randomData(0,200)},   
                {name: 'Greenland', value:randomData(0,200)},   
                {name: 'Guatemala', value:randomData(0,200)},   
                {name: 'French Guiana', value:randomData(0,200)},   
                {name: 'Guyana', value:randomData(0,200)},   
                {name: 'Honduras', value:randomData(0,200)},   
                {name: 'Croatia', value:randomData(0,200)},   
                {name: 'Haiti', value:randomData(0,200)},   
                {name: 'Hungary', value:randomData(0,200)},   
                {name: 'Indonesia', value:randomData(0,200)},   
                {name: 'India', value:randomData(0,200)},   
                {name: 'Ireland', value:randomData(0,200)},   
                {name: 'Iran', value:randomData(0,200)},   
                {name: 'Iraq', value:randomData(0,200)},   
                {name: 'Iceland', value:randomData(0,200)},   
                {name: 'Israel', value:randomData(0,200)},   
                {name: 'Italy', value:randomData(0,200)},   
                {name: 'Jamaica', value:randomData(0,200)},   
                {name: 'Jordan', value:randomData(0,200)},   
                {name: 'Japan', value:randomData(0,200)},   
                {name: 'Kazakhstan', value:randomData(0,200)},   
                {name: 'Kenya', value:randomData(0,200)},   
                {name: 'Kyrgyzstan', value:randomData(0,200)},   
                {name: 'Cambodia', value:randomData(0,200)},   
                {name: 'South Korea', value:randomData(0,200)},   
                {name: 'Kosovo', value:randomData(0,200)},   
                {name: 'Kuwait', value:randomData(0,200)},   
                {name: 'Laos', value:randomData(0,200)},   
                {name: 'Lebanon', value:randomData(0,200)},   
                {name: 'Liberia', value:randomData(0,200)},   
                {name: 'Libya', value:randomData(0,200)},   
                {name: 'Sri Lanka', value:randomData(0,200)},   
                {name: 'Lesotho', value:randomData(0,200)},   
                {name: 'Lithuania', value:randomData(0,200)},   
                {name: 'Luxembourg', value:randomData(0,200)},   
                {name: 'Latvia', value:randomData(0,200)},   
                {name: 'Morocco', value:randomData(0,200)},   
                {name: 'Moldova', value:randomData(0,200)},   
                {name: 'Madagascar', value:randomData(0,200)},   
                {name: 'Mexico', value:randomData(0,200)},   
                {name: 'Macedonia', value:randomData(0,200)},   
                {name: 'Mali', value:randomData(0,200)},   
                {name: 'Myanmar', value:randomData(0,200)},   
                {name: 'Montenegro', value:randomData(0,200)},   
                {name: 'Mongolia', value:randomData(0,200)},   
                {name: 'Mozambique', value:randomData(0,200)},   
                {name: 'Mauritania', value:randomData(0,200)},   
                {name: 'Malawi', value:randomData(0,200)},   
                {name: 'Malaysia', value:randomData(0,200)},   
                {name: 'Namibia', value:randomData(0,200)},   
                {name: 'New Caledonia', value:randomData(0,200)},   
                {name: 'Niger', value:randomData(0,200)},   
                {name: 'Nigeria', value:randomData(0,200)},   
                {name: 'Nicaragua', value:randomData(0,200)},   
                {name: 'Netherlands', value:randomData(0,200)},   
                {name: 'Norway', value:randomData(0,200)},   
                {name: 'Nepal', value:randomData(0,200)},   
                {name: 'New Zealand', value:randomData(0,200)},   
                {name: 'Oman', value:randomData(0,200)},   
                {name: 'Pakistan', value:randomData(0,200)},   
                {name: 'Panama', value:randomData(0,200)},   
                {name: 'Peru', value:randomData(0,200)},   
                {name: 'Philippines', value:randomData(0,200)},   
                {name: 'Papua New Guinea', value:randomData(0,200)},   
                {name: 'Poland', value:randomData(0,200)},   
                {name: 'Puerto Rico', value:randomData(0,200)},   
                {name: 'North Korea', value:randomData(0,200)},   
                {name: 'Portugal', value:randomData(0,200)},   
                {name: 'Paraguay', value:randomData(0,200)},   
                {name: 'Qatar', value:randomData(0,200)},   
                {name: 'Romania', value:randomData(0,200)},   
                {name: 'Russia', value:randomData(0,200)},   
                {name: 'Rwanda', value:randomData(0,200)},   
                {name: 'Western Sahara', value:randomData(0,200)},   
                {name: 'Saudi Arabia', value:randomData(0,200)},   
                {name: 'Sudan', value:randomData(0,200)},   
                {name: 'South Sudan', value:randomData(0,200)},   
                {name: 'Senegal', value:randomData(0,200)},   
                {name: 'Solomon Islands', value:randomData(0,200)},   
                {name: 'Sierra Leone', value:randomData(0,200)},   
                {name: 'El Salvador', value:randomData(0,200)},   
                {name: 'Somaliland', value:randomData(0,200)},   
                {name: 'Somalia', value:randomData(0,200)},   
                {name: 'Republic of Serbia', value:randomData(0,200)},   
                {name: 'Suriname', value:randomData(0,200)},   
                {name: 'Slovakia', value:randomData(0,200)},            
                {name: 'Slovenia', value:randomData(0,200)},            
                {name: 'Sweden', value:randomData(0,200)},            
                {name: 'Swaziland', value:randomData(0,200)},            
                {name: 'Syria', value:randomData(0,200)},            
                {name: 'Chad', value:randomData(0,200)},            
                {name: 'Togo', value:randomData(0,200)},            
                {name: 'Thailand', value:randomData(0,200)},            
                {name: 'Tajikistan', value:randomData(0,200)},            
                {name: 'Turkmenistan', value:randomData(0,200)},            
                {name: 'East Timor', value:randomData(0,200)},         
                {name: 'Trinidad and Tobago', value:randomData(0,200)},            
                {name: 'Tunisia', value:randomData(0,200)},            
                {name: 'Turkey', value:randomData(0,200)},            
                {name: 'United Republic of Tanzania', value:randomData(0,200)},            
                {name: 'Uganda', value:randomData(0,200)},            
                {name: 'Ukraine', value:randomData(0,200)},           
                {name: 'Uruguay', value:randomData(0,200)},            
                {name: 'United States of America', value:randomData(0,200)},            
                {name: 'Uzbekistan', value:randomData(0,200)},           
                {name: 'Venezuela', value:randomData(0,200)},           
                {name: 'Vietnam', value:randomData(0,200)},            
                {name: 'Vanuatu', value:randomData(0,200)},           
                {name: 'West Bank', value:randomData(0,200)},          
                {name: 'Yemen', value:randomData(0,200)},            
                {name: 'South Africa', value:randomData(0,200)},            
                {name: 'Zambia', value:randomData(0,200)},            
                {name: 'Zimbabwe', value:randomData(0,200)} 
             ]
        }]
    },{
        series: [{
                    name: '铁矿石储量 (2012)',
                    type: 'map',
                    mapType: 'world',
                    top:50,
                    height:300,
                    roam: false,
                    itemStyle:{
                        emphasis:{label:{show:true}}
                    },
                    data:[            
                {name: 'Afghanistan', value:randomData(0,200)},   
                {name: 'Angola', value:randomData(0,200)},   
                {name: 'Albania', value:randomData(0,200)},   
                {name: 'United Arab Emirates', value:randomData(0,200)},   
                {name: 'Argentina', value:randomData(0,200)},   
                {name: 'Armenia', value:randomData(0,200)},   
                {name: 'French Southern and Antarctic Lands', value:randomData(0,200)},   
                {name: 'Australia', value:randomData(0,200)},   
                {name: 'Austria', value:randomData(0,200)},   
                {name: 'Azerbaijan', value:randomData(0,200)},   
                {name: 'Burundi', value:randomData(0,200)},   
                {name: 'Belgium', value:randomData(0,200)},   
                {name: 'Benin', value:randomData(0,200)},   
                {name: 'Burkina Faso', value:randomData(0,200)},   
                {name: 'Bangladesh', value:randomData(0,200)},   
                {name: 'Bulgaria', value:randomData(0,200)},   
                {name: 'The Bahamas', value:randomData(0,200)},   
                {name: 'Bosnia and Herzegovina', value:randomData(0,200)},   
                {name: 'Belarus', value:randomData(0,200)},   
                {name: 'Belize', value:randomData(0,200)},    
                {name: 'Bermuda', value:randomData(0,200)},   
                {name: 'Bolivia', value:randomData(0,200)},   
                {name: 'Brazil', value:randomData(0,200)},   
                {name: 'Brunei', value:randomData(0,200)},   
                {name: 'Bhutan', value:randomData(0,200)},   
                {name: 'Botswana', value:randomData(0,200)},   
                {name: 'Central African Republic', value:randomData(0,200)},   
                {name: 'Canada', value:randomData(0,200)},   
                {name: 'Switzerland', value:randomData(0,200)},   
                {name: 'Chile', value:randomData(0,200)},   
                {name: 'China', value:randomData(0,200)},   
                {name: 'Ivory Coast', value:randomData(0,200)},   
                {name: 'Cameroon', value:randomData(0,200)},   
                {name: 'Democratic Republic of the Congo', value:randomData(0,200)},   
                {name: 'Republic of the Congo', value:randomData(0,200)},   
                {name: 'Colombia', value:randomData(0,200)},   
                {name: 'Costa Rica', value:randomData(0,200)},   
                {name: 'Cuba', value:randomData(0,200)},   
                {name: 'Northern Cyprus', value:randomData(0,200)},   
                {name: 'Cyprus', value:randomData(0,200)},   
                {name: 'Czech Republic', value:randomData(0,200)},   
                {name: 'Germany', value:randomData(0,200)},   
                {name: 'Djibouti', value:randomData(0,200)},   
                {name: 'Denmark', value:randomData(0,200)},   
                {name: 'Dominican Republic', value:randomData(0,200)},   
                {name: 'Algeria', value:randomData(0,200)},   
                {name: 'Ecuador', value:randomData(0,200)},   
                {name: 'Egypt', value:randomData(0,200)},   
                {name: 'Eritrea', value:randomData(0,200)},   
                {name: 'Spain', value:randomData(0,200)},   
                {name: 'Estonia', value:randomData(0,200)},   
                {name: 'Ethiopia', value:randomData(0,200)},   
                {name: 'Finland', value:randomData(0,200)},   
                {name: 'Fiji', value:randomData(0,200)},   
                {name: 'Falkland Islands', value:randomData(0,200)},   
                {name: 'France', value:randomData(0,200)},   
                {name: 'Gabon', value:randomData(0,200)},   
                {name: 'United Kingdom', value:randomData(0,200)},   
                {name: 'Georgia', value:randomData(0,200)},   
                {name: 'Ghana', value:randomData(0,200)},   
                {name: 'Guinea', value:randomData(0,200)},   
                {name: 'Gambia', value:randomData(0,200)},   
                {name: 'Guinea Bissau', value:randomData(0,200)},   
                {name: 'Equatorial Guinea', value:randomData(0,200)},   
                {name: 'Greece', value:randomData(0,200)},   
                {name: 'Greenland', value:randomData(0,200)},   
                {name: 'Guatemala', value:randomData(0,200)},   
                {name: 'French Guiana', value:randomData(0,200)},   
                {name: 'Guyana', value:randomData(0,200)},   
                {name: 'Honduras', value:randomData(0,200)},   
                {name: 'Croatia', value:randomData(0,200)},   
                {name: 'Haiti', value:randomData(0,200)},   
                {name: 'Hungary', value:randomData(0,200)},   
                {name: 'Indonesia', value:randomData(0,200)},   
                {name: 'India', value:randomData(0,200)},   
                {name: 'Ireland', value:randomData(0,200)},   
                {name: 'Iran', value:randomData(0,200)},   
                {name: 'Iraq', value:randomData(0,200)},   
                {name: 'Iceland', value:randomData(0,200)},   
                {name: 'Israel', value:randomData(0,200)},   
                {name: 'Italy', value:randomData(0,200)},   
                {name: 'Jamaica', value:randomData(0,200)},   
                {name: 'Jordan', value:randomData(0,200)},   
                {name: 'Japan', value:randomData(0,200)},   
                {name: 'Kazakhstan', value:randomData(0,200)},   
                {name: 'Kenya', value:randomData(0,200)},   
                {name: 'Kyrgyzstan', value:randomData(0,200)},   
                {name: 'Cambodia', value:randomData(0,200)},   
                {name: 'South Korea', value:randomData(0,200)},   
                {name: 'Kosovo', value:randomData(0,200)},   
                {name: 'Kuwait', value:randomData(0,200)},   
                {name: 'Laos', value:randomData(0,200)},   
                {name: 'Lebanon', value:randomData(0,200)},   
                {name: 'Liberia', value:randomData(0,200)},   
                {name: 'Libya', value:randomData(0,200)},   
                {name: 'Sri Lanka', value:randomData(0,200)},   
                {name: 'Lesotho', value:randomData(0,200)},   
                {name: 'Lithuania', value:randomData(0,200)},   
                {name: 'Luxembourg', value:randomData(0,200)},   
                {name: 'Latvia', value:randomData(0,200)},   
                {name: 'Morocco', value:randomData(0,200)},   
                {name: 'Moldova', value:randomData(0,200)},   
                {name: 'Madagascar', value:randomData(0,200)},   
                {name: 'Mexico', value:randomData(0,200)},   
                {name: 'Macedonia', value:randomData(0,200)},   
                {name: 'Mali', value:randomData(0,200)},   
                {name: 'Myanmar', value:randomData(0,200)},   
                {name: 'Montenegro', value:randomData(0,200)},   
                {name: 'Mongolia', value:randomData(0,200)},   
                {name: 'Mozambique', value:randomData(0,200)},   
                {name: 'Mauritania', value:randomData(0,200)},   
                {name: 'Malawi', value:randomData(0,200)},   
                {name: 'Malaysia', value:randomData(0,200)},   
                {name: 'Namibia', value:randomData(0,200)},   
                {name: 'New Caledonia', value:randomData(0,200)},   
                {name: 'Niger', value:randomData(0,200)},   
                {name: 'Nigeria', value:randomData(0,200)},   
                {name: 'Nicaragua', value:randomData(0,200)},   
                {name: 'Netherlands', value:randomData(0,200)},   
                {name: 'Norway', value:randomData(0,200)},   
                {name: 'Nepal', value:randomData(0,200)},   
                {name: 'New Zealand', value:randomData(0,200)},   
                {name: 'Oman', value:randomData(0,200)},   
                {name: 'Pakistan', value:randomData(0,200)},   
                {name: 'Panama', value:randomData(0,200)},   
                {name: 'Peru', value:randomData(0,200)},   
                {name: 'Philippines', value:randomData(0,200)},   
                {name: 'Papua New Guinea', value:randomData(0,200)},   
                {name: 'Poland', value:randomData(0,200)},   
                {name: 'Puerto Rico', value:randomData(0,200)},   
                {name: 'North Korea', value:randomData(0,200)},   
                {name: 'Portugal', value:randomData(0,200)},   
                {name: 'Paraguay', value:randomData(0,200)},   
                {name: 'Qatar', value:randomData(0,200)},   
                {name: 'Romania', value:randomData(0,200)},   
                {name: 'Russia', value:randomData(0,200)},   
                {name: 'Rwanda', value:randomData(0,200)},   
                {name: 'Western Sahara', value:randomData(0,200)},   
                {name: 'Saudi Arabia', value:randomData(0,200)},   
                {name: 'Sudan', value:randomData(0,200)},   
                {name: 'South Sudan', value:randomData(0,200)},   
                {name: 'Senegal', value:randomData(0,200)},   
                {name: 'Solomon Islands', value:randomData(0,200)},   
                {name: 'Sierra Leone', value:randomData(0,200)},   
                {name: 'El Salvador', value:randomData(0,200)},   
                {name: 'Somaliland', value:randomData(0,200)},   
                {name: 'Somalia', value:randomData(0,200)},   
                {name: 'Republic of Serbia', value:randomData(0,200)},   
                {name: 'Suriname', value:randomData(0,200)},   
                {name: 'Slovakia', value:randomData(0,200)},            
                {name: 'Slovenia', value:randomData(0,200)},            
                {name: 'Sweden', value:randomData(0,200)},            
                {name: 'Swaziland', value:randomData(0,200)},            
                {name: 'Syria', value:randomData(0,200)},            
                {name: 'Chad', value:randomData(0,200)},            
                {name: 'Togo', value:randomData(0,200)},            
                {name: 'Thailand', value:randomData(0,200)},            
                {name: 'Tajikistan', value:randomData(0,200)},            
                {name: 'Turkmenistan', value:randomData(0,200)},            
                {name: 'East Timor', value:randomData(0,200)},         
                {name: 'Trinidad and Tobago', value:randomData(0,200)},            
                {name: 'Tunisia', value:randomData(0,200)},            
                {name: 'Turkey', value:randomData(0,200)},            
                {name: 'United Republic of Tanzania', value:randomData(0,200)},            
                {name: 'Uganda', value:randomData(0,200)},            
                {name: 'Ukraine', value:randomData(0,200)},           
                {name: 'Uruguay', value:randomData(0,200)},            
                {name: 'United States of America', value:randomData(0,200)},            
                {name: 'Uzbekistan', value:randomData(0,200)},           
                {name: 'Venezuela', value:randomData(0,200)},           
                {name: 'Vietnam', value:randomData(0,200)},            
                {name: 'Vanuatu', value:randomData(0,200)},           
                {name: 'West Bank', value:randomData(0,200)},          
                {name: 'Yemen', value:randomData(0,200)},            
                {name: 'South Africa', value:randomData(0,200)},            
                {name: 'Zambia', value:randomData(0,200)},            
                {name: 'Zimbabwe', value:randomData(0,200)} 
             ]
        }]
    }]
};
subdivisionCollection_Chars.setOption(option);

var outputValue_Chars = echarts.init(document.getElementById('outputValue_Chars'));
option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left:'left',
        itemWidth: 15,
        itemHeight:15,
        data:['中国','俄罗斯','澳大利亚']
    },
    color:['#ff7800','#00b9fd','#ffc000'],
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2016','2015','2014'],
            axisTick:{
                show:false
            }
        }
    ],
    yAxis : [
        {   //show:false,
            max:200,
            type : 'value',
            axisTick:{
                show:false
            },
            axisLabel:{
                show:false
            }
        }
    ],
    series : [
        {
            name:'中国',
            type:'bar',
            barGap:0,
            barWidth:25,
            data:[randomData(0,200), randomData(0,200),randomData(0,200)],
            label:{
                normal:{
                    show:true,
                    position:'top'
                }
            },
            markPoint : {
                data : [
                    //{type : 'max', name: '最大值'},
                    //{type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    //{type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'俄罗斯',
            type:'bar',
            barGap:0,
            barWidth:25,
            data:[randomData(0,200), randomData(0,200), randomData(0,200)],
            label:{
                normal:{
                    show:true,
                    position:'top'
                }
            },
            markPoint : {
                data : [
                    //{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    //{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    //{type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'澳大利亚',
            type:'bar',
            barGap:0,
            barWidth:25,
            data:[randomData(0,200), randomData(0,200),randomData(0,200)],
            label:{
                normal:{
                    show:true,
                    position:'top'
                }
            },
            markPoint : {
                data : [
                    //{name : '年最高', value : 34960, xAxis: 7, yAxis: 183},
                   // {name : '年最低', value : 25000, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                   // {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

	outputValue_Chars.setOption(option);
}

//细分-钢材成品
function steelProductMap(){
var steelProductMap_Chars = echarts.init(document.getElementById('steelProductMap_Chars'));
option = {
    timeline: {
        tooltip: {
            show:false
        },
        bottom:20,
        axisType:'category',
        autoPlay:false,
        controlStyle:{
            show:false,
        },
        lineStyle:{
            width:1,
            color:'#ccc'
        },
        label:{
            textStyle:{
                color:'#aeaeae',
                fontSize:14
            }
        },
        itemStyle:{
            normal:{
              borderColor:'#ccc'
            },
            emphasis:{
                color:'#ccc',
            }
        },
        checkpointStyle: {
            symbolSize: 6,
            color: '#c23531',
            borderWidth: 5,
            borderColor: '#ff3600'
        },
        data: ['第一季度', '第二季度', '第三季度','第四季度']
    },

options:[{
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
        padding: 10,
    },
    visualMap: {
        min: 0,
        max: 200,
        left:20,
        bottom:20,
        itemWidth:7,
        itemHeight:110,
        realtime: false,
        calculable: false,
        hoverLink:false,
        color:['#c04009','#f44f0d','#f4693a','#fc8761','#fdb096','#d5d5d5'],
        text: ['200','30'],           // 文本，默认为数值文本
        inverse:true
    },
    series: [
        {
            name: '第一季度',
            type: 'map',
            mapType: 'china',
            roam: false,
            top:20,
            height:320,
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
                {name: '北京',value: randomData(0,200) },
                {name: '天津',value: randomData(0,200) },
                {name: '上海',value: randomData(0,200) },
                {name: '重庆',value: randomData(0,200) },
                {name: '河北',value: randomData(0,200) },
                {name: '河南',value: randomData(0,200) },
                {name: '云南',value: randomData(0,200) },
                {name: '辽宁',value: randomData(0,200) },
                {name: '黑龙江',value: randomData(0,200) },
                {name: '湖南',value: randomData(0,200) },
                {name: '安徽',value: randomData(0,200) },
                {name: '山东',value: randomData(0,200) },
                {name: '新疆',value: randomData(0,200) },
                {name: '江苏',value: randomData(0,200) },
                {name: '浙江',value: randomData(0,200) },
                {name: '江西',value: randomData(0,200) },
                {name: '湖北',value: randomData(0,200) },
                {name: '广西',value: randomData(0,200) },
                {name: '甘肃',value: randomData(0,200) },
                {name: '山西',value: randomData(0,200) },
                {name: '内蒙古',value: randomData(0,200) },
                {name: '陕西',value: randomData(0,200) },
                {name: '吉林',value: randomData(0,200) },
                {name: '福建',value: randomData(0,200) },
                {name: '贵州',value: randomData(0,200) },
                {name: '广东',value: randomData(0,200) },
                {name: '青海',value: randomData(0,200) },
                {name: '西藏',value: randomData(0,200) },
                {name: '四川',value: randomData(0,200) },
                {name: '宁夏',value: randomData(0,200) },
                {name: '海南',value: randomData(0,200) },
                {name: '台湾',value: randomData(0,200) },
                {name: '香港',value: randomData(0,200) },
                {name: '澳门',value: randomData(0,200) }
            ]
        }
    ]},{
    series: [
        {
            name: '第二季度',
            data:[
                {name: '北京',value: randomData(0,200) },
                {name: '天津',value: randomData(0,200) },
                {name: '上海',value: randomData(0,200) },
                {name: '重庆',value: randomData(0,200) },
                {name: '河北',value: randomData(0,200) },
                {name: '河南',value: randomData(0,200) },
                {name: '云南',value: randomData(0,200) },
                {name: '辽宁',value: randomData(0,200) },
                {name: '黑龙江',value: randomData(0,200) },
                {name: '湖南',value: randomData(0,200) },
                {name: '安徽',value: randomData(0,200) },
                {name: '山东',value: randomData(0,200) },
                {name: '新疆',value: randomData(0,200) },
                {name: '江苏',value: randomData(0,200) },
                {name: '浙江',value: randomData(0,200) },
                {name: '江西',value: randomData(0,200) },
                {name: '湖北',value: randomData(0,200) },
                {name: '广西',value: randomData(0,200) },
                {name: '甘肃',value: randomData(0,200) },
                {name: '山西',value: randomData(0,200) },
                {name: '内蒙古',value: randomData(0,200) },
                {name: '陕西',value: randomData(0,200) },
                {name: '吉林',value: randomData(0,200) },
                {name: '福建',value: randomData(0,200) },
                {name: '贵州',value: randomData(0,200) },
                {name: '广东',value: randomData(0,200) },
                {name: '青海',value: randomData(0,200) },
                {name: '西藏',value: randomData(0,200) },
                {name: '四川',value: randomData(0,200) },
                {name: '宁夏',value: randomData(0,200) },
                {name: '海南',value: randomData(0,200) },
                {name: '台湾',value: randomData(0,200) },
                {name: '香港',value: randomData(0,200) },
                {name: '澳门',value: randomData(0,200) }
            ]
        }
    ]},{
    series: [
        {
            name: '第三季度',
            data:[
                {name: '北京',value: randomData(0,200) },
                {name: '天津',value: randomData(0,200) },
                {name: '上海',value: randomData(0,200) },
                {name: '重庆',value: randomData(0,200) },
                {name: '河北',value: randomData(0,200) },
                {name: '河南',value: randomData(0,200) },
                {name: '云南',value: randomData(0,200) },
                {name: '辽宁',value: randomData(0,200) },
                {name: '黑龙江',value: randomData(0,200) },
                {name: '湖南',value: randomData(0,200) },
                {name: '安徽',value: randomData(0,200) },
                {name: '山东',value: randomData(0,200) },
                {name: '新疆',value: randomData(0,200) },
                {name: '江苏',value: randomData(0,200) },
                {name: '浙江',value: randomData(0,200) },
                {name: '江西',value: randomData(0,200) },
                {name: '湖北',value: randomData(0,200) },
                {name: '广西',value: randomData(0,200) },
                {name: '甘肃',value: randomData(0,200) },
                {name: '山西',value: randomData(0,200) },
                {name: '内蒙古',value: randomData(0,200) },
                {name: '陕西',value: randomData(0,200) },
                {name: '吉林',value: randomData(0,200) },
                {name: '福建',value: randomData(0,200) },
                {name: '贵州',value: randomData(0,200) },
                {name: '广东',value: randomData(0,200) },
                {name: '青海',value: randomData(0,200) },
                {name: '西藏',value: randomData(0,200) },
                {name: '四川',value: randomData(0,200) },
                {name: '宁夏',value: randomData(0,200) },
                {name: '海南',value: randomData(0,200) },
                {name: '台湾',value: randomData(0,200) },
                {name: '香港',value: randomData(0,200) },
                {name: '澳门',value: randomData(0,200) }
            ]
        }
    ]},{
    series: [
        {
            name: '第四季度',
            data:[
                {name: '北京',value: randomData(0,200) },
                {name: '天津',value: randomData(0,200) },
                {name: '上海',value: randomData(0,200) },
                {name: '重庆',value: randomData(0,200) },
                {name: '河北',value: randomData(0,200) },
                {name: '河南',value: randomData(0,200) },
                {name: '云南',value: randomData(0,200) },
                {name: '辽宁',value: randomData(0,200) },
                {name: '黑龙江',value: randomData(0,200) },
                {name: '湖南',value: randomData(0,200) },
                {name: '安徽',value: randomData(0,200) },
                {name: '山东',value: randomData(0,200) },
                {name: '新疆',value: randomData(0,200) },
                {name: '江苏',value: randomData(0,200) },
                {name: '浙江',value: randomData(0,200) },
                {name: '江西',value: randomData(0,200) },
                {name: '湖北',value: randomData(0,200) },
                {name: '广西',value: randomData(0,200) },
                {name: '甘肃',value: randomData(0,200) },
                {name: '山西',value: randomData(0,200) },
                {name: '内蒙古',value: randomData(0,200) },
                {name: '陕西',value: randomData(0,200) },
                {name: '吉林',value: randomData(0,200) },
                {name: '福建',value: randomData(0,200) },
                {name: '贵州',value: randomData(0,200) },
                {name: '广东',value: randomData(0,200) },
                {name: '青海',value: randomData(0,200) },
                {name: '西藏',value: randomData(0,200) },
                {name: '四川',value: randomData(0,200) },
                {name: '宁夏',value: randomData(0,200) },
                {name: '海南',value: randomData(0,200) },
                {name: '台湾',value: randomData(0,200) },
                {name: '香港',value: randomData(0,200) },
                {name: '澳门',value: randomData(0,200) }
            ]
        }
    ]} 
]
};
steelProductMap_Chars.setOption(option);

//细分-钢材成品 产量
var steelProductYield_Chars = echarts.init(document.getElementById('steelProductYield_Chars'));
option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left:'left',
        itemWidth: 15,
        itemHeight:15,
        data:['山东','山西','广东']
    },
    color:['#ff7800','#00b9fd','#ffc000'],
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2013','2014','2015'],
            axisTick:{
                show:false
            }
        }
    ],
    yAxis : [
        {   //show:false,
            Max:200,
            type : 'value',
            axisTick:{
                show:false
            },
            axisLabel:{
                show:false
            }
        }
    ],
    series : [
        {
            name:'山东',
            type:'bar',
            barGap:0,
            barWidth:25,
            data:[randomData(0,200), randomData(0,200),randomData(0,200)],
            label:{
                normal:{
                    show:true,
                    position:'top'
                }
            },
            markPoint : {
                data : [
                    //{type : 'max', name: '最大值'},
                    //{type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    //{type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'山西',
            type:'bar',
            barGap:0,
            barWidth:25,
            data:[randomData(0,200), randomData(0,200), randomData(0,200)],
            label:{
                normal:{
                    show:true,
                    position:'top'
                }
            },
            markPoint : {
                data : [
                    //{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    //{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    //{type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'广东',
            type:'bar',
            barGap:0,
            barWidth:25,
            data:[randomData(0,200), randomData(0,200),randomData(0,200)],
            label:{
                normal:{
                    show:true,
                    position:'top'
                }
            },
            markPoint : {
                data : [
                    //{name : '年最高', value : 34960, xAxis: 7, yAxis: 183},
                   // {name : '年最低', value : 25000, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                   // {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
steelProductYield_Chars.setOption(option);
}

//细分-下游消费
function DownstreamConsumption(){
var consumption_Chars = echarts.init(document.getElementById('consumption_Chars'));
var data1 = [ randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500),randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500)];
var data2 = [ randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500),randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500), randomData(0,500)];

option = {
    title: {
        text: '',
        textStyle: {
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'axis',
    },
    calculable: true,
    legend: {
        top:'20',
        left:'10',
        itemGap: 54,
        orient:'horizontal',
        textStyle:{
            color:'#585858'
        },
        data:['固定资产投资完成额（百万元）','开发投资完成额（百万元）'],
        //icon:'circle'
    },
    xAxis: [{
        type: 'category',
        //boundaryGap:false,
        data: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月'],
        axisLine: {
            lineStyle: {
                color: "#0078c5",
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
            ,textStyle:{
                color:'#333'
            }
        },splitLine: {
			show: true,
			
		},
    }],
    color:["#ff7f50","#87cefa"],
    yAxis: [{
        min:0,
        max:800,
        type: 'value',
        name: '',
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#333'
            }
        },
        axisLine: {
            lineStyle: {
                color: "#0078c5",
                width: 2
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
		},
    }],
    grid: {
        x: '50',
        x2: '30',
        right:'10%'
    },
    series: [{
        name:'固定资产投资完成额（百万元）',
        type:'bar',
        barWidth:25,
        data: data1,
        markPoint : {
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]
        },
        markLine : {
            data : [
                {type : 'average', name: '平均值'}
            ]
        }
    },{
        name:'开发投资完成额（百万元）',
        type:'bar',
        data:data2,
        barWidth:25,
        markPoint : {
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]
        },
        markLine : {
            data : [
                {type : 'average', name: '平均值'}
            ]
        }
       }
        
    ]
};
consumption_Chars.setOption(option);
}