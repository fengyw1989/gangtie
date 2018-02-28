/**
 * Created by GaoYang on 2016/8/17.
 */
(function(window) {
	window.createFunnel = function(id) {

		var width = 500,height = 360;
		var color = ['#ff613e', '#ffa33f','#ffcf40','#a4d152', '#56cf77'];
		var enterpArr = [
			[
				'上海宏冶','上海恒钢','上海豪进','上海华冶','上海广和','上海贯众','上海钢宇','上海钢锋','上海宝闽','上海博源','上海博丰','上海宝就','上海宝夏','上海宝旺'
			],
			[
				'泰安永和','青岛宝祥','山东和济','常州汇泽','彝良矿海','上海博丰','上海宝闽','宽城群丰','山东万事','上海华冶','上海宏冶','上海贯众'
			],
			[
				'青岛宝祥','山东万事','南阳马道','桐柏昌兴','建平立兴','代县明利','宽城群丰','海林建龙','阜新龙驰'
			],
			[
				'建平县建','宽城群丰','代县明利','上海博丰','上海博源','北京宝夏','北京首钢'
			],
			[
				'山东和济','南京国源','江苏攀宁','莱芜创兴','莱芜良物'
			]
		];
		var datas = [
						{value: 100,name: '资金缺口'},
						{value: 80,name: '业务稳定'},
						{value: 60,name: '诚信良好'},
						{value: 40,name: '舆情正常'},
						{value: 20,name: '市场预期良好'}
					];
		var dataes = [
						{value: 14,index:0,name: '资金缺口',labelLine: {normal: {length: 100}}},
						{value: 12,index:1,name: '业务稳定',labelLine: {normal: {length: 80}}}, 
						{value: 9,index:2,name: '诚信良好',labelLine: {normal: {length: 60}}}, 
						{value: 7,index:3,name: '舆情正常',labelLine: {normal: {length: 40}}}, 
						{value: 5,index:4,name: '市场预期良好',labelLine: {normal: {length: 30}}} 
					];




		var e = document.getElementById(id);
		e.style.width = width + 'px';
		e.style.height = height + 'px';
		var myChart = echarts.init(document.getElementById(id));
		option = {

			series: [{
				name: '预期',
				type: 'funnel',
				sort:false,
				left: '15%',
				right:'10%',
				top:'center',
				width: '70%',
				height:'60%',
				color: color,
				label: {
					normal: {
						formatter: '{b}',
						textStyle: {
							fontSize: 12
						}
					},
					emphasis: {
						position: 'inside',
						textStyle: {
							color: '#e5392e',
							fontSize: 12
						},
						//formatter: '预期:{c}'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					normal: {
						borderColor: '#fff',
						borderWidth: 12,
						opacity: 0.6
					}
				},
				data: datas
			}, {
				name: '实际',
				type: 'funnel',
				sort:false,
				left: '15%',
				right:'10%',
				top:'center',
				width: '70%',
				height:'60%',
				color: color,
				maxSize: '50%',
				label: {
					normal: {
						position: 'left',
						formatter: '{c}家',
						textStyle: {
							color: '#e5392e',
							fontSize: 12
						}
					},
					emphasis: {
						position: 'left',
						//formatter: '实际: {c}家'
					}
				},
				labelLine: {
					normal: {
						show: false
					},
					emphasis: {
						show: false
					}
				},
				itemStyle: {
					normal: {
						opacity: 0.6,
						borderColor: '#fff',
						borderWidth: 4
					}
				},
				data: dataes
			}]
		};
		myChart.setOption(option);
		myChart.on('click', function (params) {
		    
		    if (params.seriesName == '实际') {
		    	var i = params.data.index;
		    	var name = params.data.name;
		    	var arr = enterpArr[i];
		    	//var html ='<p class="total">共'+ arr.length +'家</p>';
		    	var html ='';
		    	for (var j = 0; j < arr.length; j++) {
		    		if (j%20 == 0) {
		    			if (j !=0 ) { html += '</div></div>'; }
		    			html += '<div class="swiper-slide"><div class="comp-list">';
		    		}
		    		if (j%4 == 0) {
		    			//if (j !=0 ) { html += '</p>'; }
		    			html += '<p class="comp-row">';
		    		}
		    		
		    		html += '<a href="details/index.html" target="view_window"><span class="comp-name">'+ arr[j]+'</span></a>'; 
		    	}
		    	html += '</p>';
		    	html += '</div></div>';
		    	//console.log(html);
		    	$('#result-show .total').html( name + arr.length +'家');
		    	$('.swiper-wrapper').html(html);
		    	swiper();
		    }
		});
	}
})(window);