var serviceHost = 'http://img.9cfcf.com';

var charts = {

    init: function(params) {

        if (!params || !params.container || !params.id) {
            console.log("参数有误");
            return null;
        }

        //图表容器
        var $container = $.type(params.container) == "string" ?
            $("#" + params.container) : $(params.container);
        if ($container.length == 0) {
            console.log("图表容器" + params.container + "不存在");
            return null;
        }

        var myChart = echarts.init($container[0]);

        setOptions(myChart, params);
        return myChart;
    }
};

//设置图表option
function setOptions(myChart, params) {

    $.ajax({ //获取图表option
        type: 'GET',
        url: serviceHost + '/api/chart/GetChart?id=' + params.id,
        success: function(result) {

            if (result == null || !result.json)
                console.log("获取图表id=" + param.id + " 的数据失败");

            var option;
            eval(result.json);
            if (params.option) option = $.extend(true, option, params.option);

            myChart.setOption(option, true);
        },
        error: function(e) {
            console.log(e);
        }
    });
}

//自定义图表对象
/*charts = function(_params) {

    this.params = _params;
    this.echarts = null;
    this.option = null;
    //初始化图表函数
    this.init = function(_params) {
        var myChart = echarts.init($container[0]);
        if (_params) this.params = _params;
        _analysis(this);
    }
};

//解析参数，加载图表
function _analysis(charts) {

    if ($.type(charts.params) == "array") {

        $(charts.params).each(function() {
            _loadEcharts(charts, this);
        });
    } else {

        _loadEcharts(charts, charts.params);
    }
}

//加载图表
function _loadEcharts(charts, param) {

    if (!param.container || !param.id) {
        console.log("参数有误");
        return;
    }

    //图表容器
    var $container = $.type(param.container) == "string" ?
        $("#" + param.container) : $(param.container);
    if ($container.length == 0) {
        console.log("图表容器" + param.container + "不存在");
        return;
    }

    var myChart = echarts.init($container[0]);
    $.ajax({ //获取图表option
        type: 'GET',
        url: serviceHost + '/api/chart/GetChart?id=' + param.id,
        success: function(result) {

            if (result == null || !result.json) {
                console.log("获取图表id=" + param.id + " 的数据失败");
                return null;
            }

            var option;
            eval(result.json);
            if (param.option) option = $.extend(true, option, param.option);

            myChart.setOption(option, true);
            charts.option = option;
            charts.echarts = myChart;
        },
        error: function(e) {
            console.log(e);
        }
    });
}*/