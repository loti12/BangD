/*
(jquery依赖)
 **************************
 示例(注意：页面中放置id为pageNav的html对象):

 //转到页码时触发的自定义方法,p为当前页码,pn为总页数
 pageNav.fn = function(p,pn){
 alert(p+","+pn);
 };
 //初始跳到第3页,共33页
 pageNav.go(3,33);

 */

var pageNavBox = function(obj){
    var _this = {};
    _this.fn = null;
    //p为当前页码,pn为总页数,pl为总数据
    _this.nav = function(p, pn, pl) {
        pl = pl || 0;
        //只有一页,直接显示1
        if (pn <= 1) {
            _this.p = 1;
            _this.pn = 1;
            return _this.pHtml2("");
        }
        if (pn < p) {
            p = pn;
        };
        var re = $("<div class='wrap'>");
        //第一页
        if (p <= 1) {
            re.append(_this.pHtml3("首页"));
            re.append(_this.pHtml3("上一页"));
            p = 1;
        } else {
            re.append(_this.pHtml(1, pn, pl, "首页"));
            re.append(_this.pHtml(p - 1, pn, pl, "上一页"));
            //非第一页
            //总是显示第一页页码
            re.append(_this.pHtml(1, pn, pl, "1"));
        }
        //校正页码
        _this.p = p;
        _this.pn = pn;

        //开始页码
        var start = 2;
        var end = (pn < 6) ? pn: 6;
        //是否显示前置省略号,即大于10的开始页码
        if (p >= 5) {
            re.append("<a href='javascript:;'>...</a>");
            start = p - 2;
            var e = p + 2;
            end = (pn < e) ? pn: e;
        }
        for (var i = start; i < p; i++) {
            re.append(_this.pHtml(i, pn, pl));
        };
        re.append(_this.pHtml2(p));
        for (var i = p + 1; i <= end; i++) {
            re.append(_this.pHtml(i, pn, pl));
        };
        if (end < pn) {
            re.append("<a href='javascript:;'>...</a>");
            //显示最后一页页码,如不需要则去掉下面这一句
            re.append(_this.pHtml(pn, pn, pl));
        };
        if (p < pn) {
            //re.append(_this.pHtml(p + 1, pn, "下一页>"));
            re.append(_this.pHtml(p + 1, pn, pl, "下一页"));
            re.append(_this.pHtml(pn, pn, pl, "末页"));
        }else{
            re.append(_this.pHtml3("下一页"));
            re.append(_this.pHtml3("末页"));
        };
        re.append("<span class='all'>共<strong>"+pl+"</strong>条数据 <strong>"+p+"</strong>/<strong>"+pn+"</strong></span>");
        return re;
    };
    //显示非当前页
    _this.pHtml = function(pageNo, pn, pl, showPageNo) {
        showPageNo = showPageNo || pageNo;
        var H = $("<a>").attr("href","javascript:;").removeClass("on");
        H.text(showPageNo).click(function(){_this.go(pageNo,pn,pl);});
        return H;

    };
    //显示当前页
    _this.pHtml2 = function(pageNo) {
        if(pageNo !=""){
            var H = " <a href='javascript:;' class='on'>" + pageNo + "</a>";
            return H;
        }        
    };
    //无数据
    _this.pHtml3 = function(pageNo) {
        var H = " <a>" + pageNo + "</a> ";
        return H;
    };
    //输出页码,可根据需要重写此方法
    _this.go = function(p, pn, pl) {
        obj.html(_this.nav(p,pn,pl));
        if (_this.fn != null) {
            _this.fn(p, pn, pl);
        };
    };
    return _this;
}