$(function(){
	$(".input-text .input").each(function() {
        var thisVal = $(this).val();
        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
        if (thisVal != "") {
            $(this).siblings("span").hide();
        } else {
            $(this).siblings("span").show();
        }
        //输入框聚焦效果
        $(this).focus(function() {
            $(this).siblings("span").hide();
            $(".input-text").removeClass("input-text-cur");
            $(this).parent().addClass("input-text-cur");
            $(this).parent().siblings(".point").show();
        }).blur(function() {
            var val = $(this).val();
            if (val != "") {
                $(this).siblings("span").hide();
            } else {
                $(this).siblings("span").show();
            }
        });
    });
    /* 模拟单选 */
	$(".input-radio").click(function(){
		$(this).addClass("radio-cur").siblings(".input-radio").removeClass("radio-cur");
		$(this).addClass("radio-cur").siblings("input").val($(this).attr("val"));
	});
	$(".submit").click(function(){
	})
    /* 模拟复选 */
	$(".login_check span i").click(function(){
		$(this).toggleClass("cur");
	});
	/* 头部用户名选择 */
	$(".top_login1 label").click(function(){
		$(this).children(".userlogin").toggle();
	});
	$(".top_login1 .userlogin a").click(function(){
		$(this).parent().siblings("a").text($(this).text());
	});
})
/* 验证 */
function checkblur(obj){
	var id = $(obj).attr("id");
	var v = $(obj).val();
	var objpoint = $(obj).parent().siblings(".point");
	var objp = $(obj).parent();
	/* 用户名 */
	if(id == "username"){
		if(v.length < 3){
			objpoint.addClass("point-ico2").text("用户名不能少于3个字符");
			objp.addClass("input-text-error").removeClass("input-text-cur");
		} else if(v.length > 15){
			objpoint.addClass("point-ico2").text("用户名不能大于15个字符");
			objp.addClass("input-text-error").removeClass("input-text-cur");
		} else {
			objpoint.removeClass("point-ico2").addClass("point-ico1").text("");
			objp.removeClass("input-text-error");
		}
	}
	/* 密码 */
	if(id == "password"){
		if(v.length < 6){
			objpoint.addClass("point-ico2").text("密码不能少于6个字符");
			objp.addClass("input-text-error").removeClass("input-text-cur");
		}else{
			objpoint.removeClass("point-ico2").addClass("point-ico1").text("");
			objp.removeClass("input-text-error");
		}
	}
	if(id == "password2") {
		if(v.length < 6){
			objpoint.addClass("point-ico2").text("密码不能少于6个字符");
			objp.addClass("input-text-error").removeClass("input-text-cur");
		}else if(v != $("#password").val()){
			objpoint.addClass("point-ico2").text("两次密码不一致");
			objp.addClass("input-text-error").removeClass("input-text-cur");
		}else{
			objpoint.removeClass("point-ico2").addClass("point-ico1").text("");
			objp.removeClass("input-text-error");
		}
	}
	/* Email */
	if(id == "email") {
		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		if (!v){
	    	objpoint.addClass("point-ico2").text("Email不能为空");
			objp.addClass("input-text-error").removeClass("input-text-cur");
	    } else if(!reg.test(v)){
			objpoint.addClass("point-ico2").text("请输入正确格式的Email");
			objp.addClass("input-text-error").removeClass("input-text-cur");
		} else{
			objpoint.removeClass("point-ico2").addClass("point-ico1").text("");
			objp.removeClass("input-text-error");
		}
	}
	/* 验证码 */
	if(id == "yanzhm") {
		if (!v){
	    	objpoint.addClass("point-ico2").text("请输入验证码");
			objp.addClass("input-text-error").removeClass("input-text-cur");
	    }else{
			objpoint.removeClass("point-ico2").addClass("point-ico1").text("");
			objp.removeClass("input-text-error");
		}
	}
}
function sub(){
	if(!$("#usertype").val() || $("#usertype").nextAll(".input-radio").hasClass("radio-cur") == false){
		$("#usertype").siblings(".point").addClass("point-ico2").text("请选择用户类型").show();
	}else{
		$("#usertype").siblings(".point").addClass("point-ico1").removeClass("point-ico2").text("").show();
	}
}