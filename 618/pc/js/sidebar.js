//侧边栏链接
var side = $('\
    <section class="side">\
        <div class="side-bar">\
            <i class="shouqi">\
                <img src="/huodong/618/2018/img/sidebar-shouqi.png" alt="">\
            </i>\
            <ul>\
                <li>\
                    <a href="/huodong/618/2018/index.html" target="_blank" onclick="check_cps(this);" isconvert="1">\
                    <img src="/huodong/618/2018/img/sidebar-1.png" alt="">\
                    <span><img src="/huodong/618/2018/img/sidebar-2.png" alt=""></span>\
                    </a>\
                </li>\
                <li>\
                    <a href="'+ zhuhuichangUrl +'"  onclick="check_cps(this); isconvert="1" target="_blank" > \
                        <img src="/huodong/618/2018/img/sidebar-3.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="/huodong/618/2018/miaosha.html">\
                        <img src="/huodong/618/2018/img/sidebar-4.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="/huodong/618/2018/chaopianyi.html">\
                        <img src="/huodong/618/2018/img/sidebar-5.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href = "/huodong/618/2018/baokuan.html" > \
                        <img src="/huodong/618/2018/img/sidebar-6.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="/huodong/618/2018/yushou.html">\
                        <img src="/huodong/618/2018/img/sidebar-7.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="'+ jdUrl +'" target="_blank">\
                        <img src="/huodong/618/2018/img/sidebar-8.png" alt="">\
                    </a>\
                </li>\
            </ul>\
        </div>\
        <div class="side-bar-show">\
            <img src="/huodong/618/2018/img/sidebar-618.png" alt="">\
            <i class="zhankai">\
                <img src="/huodong/618/2018/img/sidebar-zhankai.png" alt="">\
            </i>\
        </div>\
    </section>\
')

$('body').append(side);

var getShow = JSON.parse(localStorage.getItem('isShow'));

if(getShow){
    //alert('隐藏');
    $('.side-bar').hide();
    $('.side-bar-show').show();

}else{
    //alert('显示')
    $('.side-bar').show();
    $('.side-bar-show').hide();
}


$('.shouqi').click(function () {
    localStorage.setItem('isShow', true);
    $('.side-bar').hide();
    $('.side-bar-show').show();
})

$('.side-bar-show').click(function () {
    localStorage.setItem('isShow', false);
    $('.side-bar').show();
    $('.side-bar-show').hide()
})
