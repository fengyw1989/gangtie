
var Select = function(id,config,option,onChange){

	this.config = {
		prompt:false,
		defaultIndex:0
	}

	if (config && $.isPlainObject(config)) {
		$.extend(this.config,config);
	}

	if (id) {
		this.id = id;
		this.obj = $('#'+id);
		this.option = option;
		this.creatDom();
	}else{ console.error('容器id不存在');}

	if (onChange) {
		this.onChange = onChange;
	}
	
	this.showOpt();
	this.selectOpt();
	this.onChange();
}

Select.prototype = {
	//初始化dom结构
	creatDom:function(){

		var _this = this;

		var id = _this.id,
			prompt = _this.config.prompt,
			defaultIndex = _this.config.defaultIndex;
			optArr = _this.option;

		var selBox = this.obj,
			selVal = '',
			options = '<ul class="option-box">';
		
		if (prompt) {
			defaultIndex = null;
			selVal = '<div class="select-val" value="null">'+ prompt +'</div>';
		}

		if (optArr) {
			$.each(optArr,function(i){
				if (i == defaultIndex) {
					selVal = '<div class="select-val" value="'+i+'">' + optArr[i] + '</div>';
					_this.val = i;
				}
				options += '<li class="option" value="'+i+'">' + optArr[i] + '</li>';
			});
			options += '</ul>';
		}else {
			options = '<li class="option"></li>';
		}
		
		selBox.addClass('select select-hid');
		selBox.html(selVal+options);
	},
	showOpt:function(){

		var selBox = this.obj;

		selBox.children('.select-val').click(function(){
			if(selBox.hasClass('select-hid')){
				selBox.removeClass('select-hid');
			}else {
				selBox.addClass('select-hid');
			}
		});	
	},
	selectOpt:function(){
		var _this = this;
		var selBox = this.obj;

		selBox.find('.option').click(function(){

			var text = $(this).text();
			var val = $(this).val();
			var selectVal = selBox.children('.select-val');

			$(this).siblings().removeClass('on');
			$(this).addClass('on');

			selectVal.text(text);
			selectVal.attr('value',val);
			selBox.addClass('select-hid');
			
			_this.val = val;
			_this.onChange();
		});
	}
}