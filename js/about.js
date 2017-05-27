$(function(){
		$('.job_list').on('click','dt',function(){
		    var i =  $(this).find('i'),
		    	dd = $(this).next('dd');		    	
			if (i.hasClass('ico_down')) {
				i.addClass('ico_up').removeClass('ico_down');
				dd.slideDown(300);
			}else{
				i.addClass('ico_down').removeClass('ico_up');
				dd.slideUp(300);				
			}
		});

		//锚点
		$('.job_series').on('click','li',function(){
			$(this).addClass('on').siblings().removeClass('on');
		});

		//分享
		$(".weixin,.wechat").hover(function(){
				$(".ma").show();
			},function(){
				$(".ma").hide();
			}
		);

		//高度
		$('.axis-line').height($('.td_box').outerHeight());	

		$('.ax_line').each(function() {
			var h =$(this).parent('.event_list').outerHeight();
			$(this).height(h);
		});
		

		//大事件--时间轴切换
		$(function() {
			$('.timebar .bar a').each(function(index,el) {
				$(this).click(function() {
					$(this).addClass('on').siblings('a').removeClass('on');
					$('.event_box .event_con').find('.event_list').eq(index).show().siblings('.event_list').hide();
				});	
			});			
			var len =$('.timebar a').length;
			var cl = false;
			var f = 0;
			if (len <=6) {
				$('.timewrap .prev,.timewrap .next').addClass('disable');
				cl = false;
			};
			if (len > 6) {
				$('.timewrap .prev,.timewrap .next').removeClass('disable');
				cl = true;
			};
			if(cl){
				var n= len - 6;
				$('.timewrap .next').click(function() {
					f++;
					if (f>n) {f=n;}
					$('.timebar .bar').stop().animate({"left":(-f*122)+"px"},300);
				});

				$('.timewrap .prev').click(function() {	
					f--;
					if (f<0) {f=0;}							
					$('.timebar .bar').stop().animate({"left":(-f*122)+"px"},300);				
				});
			};

		});



		function autoDeviceDpi(){
			var DEFAULT_WIDTH = 1300, // 页面的默认宽度
		    ua = navigator.userAgent.toLowerCase(), // 根据 user agent 的信息获取浏览器信息
		    deviceWidth = window.screen.width, // 设备的宽度
		    devicePixelRatio = window.devicePixelRatio || 1, // 物理像素和设备独立像素的比例，默认为1
		    targetDensitydpi;

		    // Android4.0以下手机不支持viewport的width，需要设置target-densitydpi
		    if (ua.indexOf("android") !== -1 && parseFloat(ua.slice(ua.indexOf("android")+8)) <= 12) { 
		        targetDensitydpi = DEFAULT_WIDTH / deviceWidth * devicePixelRatio * 160;
		        $('meta[name="viewport"]').attr('content', 'target-densitydpi=' + targetDensitydpi +
		                ', width=1300, user-scalable=no');
		    }
		}

});


var timer = null;
var timer2 = null;
$(function(){
    $(".h-top-head").hover(function(){
	    clearTimeout(timer);
	    $(".h-bell-one").show();
		$(".h-username > i").addClass("imgactive");
	},function(){
		timer = setTimeout(function(){
			$(".h-bell-one").hide();
			$(".h-username > i").removeClass("imgactive");
		},100);
	});
	$(".h-username > i").hover(function(){
	    clearTimeout(timer);
	    $(".h-bell-one").show();
		$(".h-username > i").addClass("imgactive");
	},function(){
		timer = setTimeout(function(){
			$(".h-bell-one").hide();
			$(".h-username > i").removeClass("imgactive");
		},100); 
	});
	$(".h-bell-one").hover(function(){
		clearTimeout(timer);
	},function(){
		$(this).hide();
		$(".h-username > i").removeClass("imgactive");
	});
	
	$(".h-bell").hover(function(){
	    clearTimeout(timer2);
	    $(".h-bell-two").show();
		$(".h-bell").addClass("h-bell-active");
	},function(){
		timer2 = setTimeout(function(){
			$(".h-bell-two").hide();
			$(".h-bell").removeClass("h-bell-active");
		},100);
	});
	$(".h-ts").hover(function(){
	    clearTimeout(timer2);
	    $(".h-bell-two").show();
		$(".h-bell").addClass("h-bell-active");
	},function(){
		timer2 = setTimeout(function(){
			$(".h-bell-two").hide();
			$(".h-bell").removeClass("h-bell-active");
		},100); 
	});
	
	$(".h-bell-two").hover(function(){
		clearTimeout(timer2);
	},function(){
		$(this).hide();
		$(".h-bell").removeClass("h-bell-active");
	});
});
