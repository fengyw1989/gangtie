(function(window) {
	window.createSankey = function(id) {

	var width = 500,height = 360;


	var datas = [{
			name: '代县明利铁矿',
			value: 60
		}, {
			name: '黄梅县高岭资源开发',
			value: 40
		}, {
			name: '通化县双龄铁矿',
			value: 30
		}, {
			name: '建平县立兴铁矿',
			value: 30
		}, {
			name: '桐柏县昌兴矿业有限...',
			Aname:'桐柏县昌兴矿业有限公司',
			value: 30
		}, {
			name: '中国宝钢',
			value: 30

		}, {
			name: '彝良县矿海钢铁有限公司',
			value: 20
		}, {
			name: '南阳市马道岭矿产品开发公司',
			value: 20
		}, {
			name: '宽城群丰矿业有限工司',
			value: 20
		}, {
			name: '林州市铁矿',
			value: 20
		}, {
			name: '攀枝花二滩矿产品有限责任公司',
			value: 20
		}];
	var dataes = [{
				source: '代县明利铁矿',
				target: '中国宝钢',
				value: 20
			}, {
				source: '黄梅县高岭资源开发',
				target: '中国宝钢',
				value: 10,
				lineStyle: {
					normal: {
						color: '#dbe7ee',
						opacity: 0.3

					}
				},
			}, {
				source: '通化县双龄铁矿',
				target: '中国宝钢',
				value: 9,
				lineStyle: {
					normal: {
						color: '#dbe7ee',
						opacity: 0.3

					}
				},
			}, {
				source: '建平县立兴铁矿',
				target: '中国宝钢',
				value: 8
			}, {
				source: '桐柏县昌兴矿业有限...',
				target: '中国宝钢',
				value: 7
			}, {
				source: '中国宝钢',
				target: '彝良县矿海钢铁有限公司',
				value: 15
			}, {
				source: '中国宝钢',
				target: '南阳市马道岭矿产品开发公司',
				value: 14
			}, {
				source: '中国宝钢',
				target: '宽城群丰矿业有限工司',
				value: 13
			}, {
				source: '中国宝钢',
				target: '林州市铁矿',
				value: 12
			}, {
				source: '中国宝钢',
				target: '攀枝花二滩矿产品有限责任公司',
				value: 11
		}];


		// console.log(width);
		// console.log(id);
		//var e = document.getElementById(id);
		//e.style.width = width + 'px';
		//e.style.height = height + 'px';
		var myChart = echarts.init(document.getElementById(id));
		// console.log(myChart);
		
		// console.log(datas);
		option = {
			title: {
				text: '上游企业                     中游企业                    下游企业 ',
				left: 60,
				top: 10,
				textStyle: {
					fontWeight: 'normal',
					color: '#000',
					fontSize: 16
				}
			},
			tooltip: {
				trigger: 'item',
				// formatter: function (params) {
				//     return params.data.Aname + ":" + params.data.value;
				// }
			},
			series: [{
				type: 'sankey',
				layout: 'none',
				nodeWidth: 10,
				nodeGap:1,
				top: 'center',
				width:'60%',
				height:'80%',
                label:{
	            normal:{
					textStyle:{
						color:'#000',
						fontSize: 12
					}
				}
			},
				lineStyle: {
					normal: {
						color: '#fdd7d5'
					}
				},
				data: datas,
				links: dataes,

			}]
		};

		//console.log(option);
		myChart.setOption(option);
	}
})(window);