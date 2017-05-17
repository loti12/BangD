$(document).ready(function(){
	$(function() {
	  $(".dropBtn").click(function() {
		$(this).parent().children(".dropList").toggle();
	  });
	  $(".dropList li").click(function() {
		var listText = $(this).html();
		$(this).parent().parent().children(".putIn").val(listText); //将所点击下拉列表的内容复制到input中
		$(this).parent().hide();  //然后将下拉列表隐藏
	  });  //以下是给文档绑定点击事件，当所点的祖级元素们中没有dropDown样式，则下拉列表隐藏
	  $(document).bind('click',
	  function(e) {
		var clickme = $(e.target);
		if (!clickme.parents().hasClass("dropDown")) $(".dropList").hide();
	  });
	});
});
